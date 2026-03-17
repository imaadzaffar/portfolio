import { useRef, useState, useEffect } from 'react'
import * as THREE from 'three'
import ContentCard from './components/ContentCard'

// ─── Face metadata (Three.js BoxGeometry order: +X -X +Y -Y +Z -Z) ──────────
const FACES = [
  { id: 0, label: 'Bio',      icon: '◈', bg: '#0d2b2b' },
  { id: 1, label: 'Projects', icon: '⬡', bg: '#0c2828' },
  { id: 2, label: 'Zafaris',  icon: '◎', bg: '#0e2d2a' },
  { id: 3, label: 'Learning', icon: '◇', bg: '#0b2626' },
  { id: 4, label: 'Travel',   icon: '◉', bg: '#0d2929' },
  { id: 5, label: 'Links',    icon: '⊕', bg: '#0c2a28' },
]

// Face normals matching Three.js BoxGeometry material indices
const FACE_NORMALS = [
  new THREE.Vector3(1, 0, 0),   // 0: +X  Bio
  new THREE.Vector3(-1, 0, 0),  // 1: -X  Projects
  new THREE.Vector3(0, 1, 0),   // 2: +Y  Zafaris
  new THREE.Vector3(0, -1, 0),  // 3: -Y  Learning
  new THREE.Vector3(0, 0, 1),   // 4: +Z  Travel  (faces camera at identity)
  new THREE.Vector3(0, 0, -1),  // 5: -Z  Links
]

// ─── Content data per face ───────────────────────────────────────────────────
export const FACE_DATA = [
  {
    id: 0,
    label: 'Bio',
    title: 'Imaad Zaffar',
    body: 'Building x creating. Constantly tinkering with cool tech for projects with purpose.',
    tags: ['London', 'UCL CS', 'Bloomberg', 'Builder'],
  },
  {
    id: 1,
    label: 'Projects',
    title: 'Side Projects',
    body: 'Shipping ideas into reality.',
    items: [
      { name: 'Munch',         desc: 'Halal restaurant discovery, London-first.' },
      { name: 'Layers',        desc: 'Smart skincare companion app.' },
      { name: 'Uncooked Jobs', desc: 'Truth-first recruiting for early-stage startups.' },
    ],
  },
  {
    id: 2,
    label: 'Zafaris',
    title: 'Zafaris',
    body: 'YouTube videos, travel, vlogs and projects.',
    tags: ['YouTube', 'Travel', 'Vlogs', 'Projects'],
  },
  {
    id: 3,
    label: 'Learning',
    title: 'Currently Learning',
    body: 'Always building. Always reading.',
    items: [
      { name: 'Agentic Dev',    desc: 'Building with LangGraph and autonomous agents.' },
      { name: 'LLMs',           desc: 'Applied language model workflows.' },
      { name: 'Mobile App Dev', desc: 'React Native, shipping on iOS.' },
    ],
    books: ['The Courage to Be Disliked', 'Grit', 'Why We Sleep'],
  },
  {
    id: 4,
    label: 'Travel',
    title: 'Travel',
    body: '20+ countries. Highlights in Japan, Qatar, Pakistan, Taiwan and SF. Addicted to adventures.',
    tags: ['Japan', 'Qatar', 'Pakistan', 'Taiwan', 'SF'],
  },
  {
    id: 5,
    label: 'Links',
    title: 'Find Me',
    links: [
      { label: 'YouTube',  handle: 'Zafaris',                url: 'https://youtube.com/zafaris' },
      { label: 'X',        handle: '@imaadzaffar',           url: 'https://twitter.com/imaadzaffar' },
      { label: 'LinkedIn', handle: 'Imaad Zaffar',           url: 'https://linkedin.com/in/imaadzafafr' },
      { label: 'GitHub',   handle: 'github.com/imaadzaffar', url: 'https://github.com/imaadzaffar' },
    ],
  },
]

// ─── Canvas texture factory ──────────────────────────────────────────────────
function createFaceTexture(face) {
  const canvas = document.createElement('canvas')
  canvas.width = 256
  canvas.height = 256
  const ctx = canvas.getContext('2d')

  // Background
  ctx.fillStyle = face.bg
  ctx.fillRect(0, 0, 256, 256)

  // Grid lines
  ctx.strokeStyle = 'rgba(45,212,164,0.12)'
  ctx.lineWidth = 1
  for (let i = 0; i <= 256; i += 32) {
    ctx.beginPath(); ctx.moveTo(i, 0);   ctx.lineTo(i, 256); ctx.stroke()
    ctx.beginPath(); ctx.moveTo(0, i);   ctx.lineTo(256, i); ctx.stroke()
  }

  // Border glow
  ctx.strokeStyle = 'rgba(45,212,164,0.35)'
  ctx.lineWidth = 4
  ctx.strokeRect(2, 2, 252, 252)

  // Geometric icon
  ctx.fillStyle = 'rgba(45,212,164,0.6)'
  ctx.font = '64px serif'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText(face.icon, 128, 100)

  // Face label
  ctx.fillStyle = 'rgba(232,245,240,0.9)'
  ctx.font = 'bold 22px sans-serif'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText(face.label.toUpperCase(), 128, 168)

  return new THREE.CanvasTexture(canvas)
}

// ─── Noise overlay SVG (inline, no external asset) ───────────────────────────
const NOISE_SVG = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`

// ─── Component ───────────────────────────────────────────────────────────────
export default function App() {
  const mountRef = useRef(null)
  // activeFace drives the nav indicator
  const [activeFace, setActiveFace]     = useState(4) // 4 = +Z, faces camera at identity
  // displayFace is the data shown in the card (lags activeFace by 300ms for fade)
  const [displayFace, setDisplayFace]   = useState(4)
  const [contentVisible, setContentVisible] = useState(true)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const w = mount.clientWidth
    const h = mount.clientHeight

    // Scene
    const scene = new THREE.Scene()

    // Camera
    const camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 100)
    camera.position.set(0, 0, 4)
    camera.lookAt(0, 0, 0)

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(w, h)
    renderer.setClearColor(0x000000, 0)
    mount.appendChild(renderer.domElement)

    // Lighting
    scene.add(new THREE.AmbientLight(0xffffff, 0.4))
    const keyLight = new THREE.PointLight(0x2dd4a4, 2.5)
    keyLight.position.set(2, 2, 3)
    scene.add(keyLight)
    const fillLight = new THREE.PointLight(0x1a8a6a, 1.0)
    fillLight.position.set(-2, -1, -2)
    scene.add(fillLight)

    // Cube
    const geometry = new THREE.BoxGeometry(1.5, 1.5, 1.5)
    const materials = FACES.map((face) =>
      new THREE.MeshStandardMaterial({
        map: createFaceTexture(face),
        roughness: 0.4,
        metalness: 0.2,
      })
    )
    const cube = new THREE.Mesh(geometry, materials)
    scene.add(cube)

    // Wireframe edge overlay (child of cube so it rotates with it)
    const edgesGeo = new THREE.EdgesGeometry(geometry)
    const edgesMat = new THREE.LineBasicMaterial({ color: 0x2dd4a4, transparent: true, opacity: 0.25 })
    cube.add(new THREE.LineSegments(edgesGeo, edgesMat))

    // Mutable interaction state (not React state — lives only inside this effect)
    const s = {
      isDragging: false,
      prevX: 0,
      prevY: 0,
      targetQ: new THREE.Quaternion(), // lerp target
      snapTimer: null,
      idleTimer: null,
      isIdle: false,
      rafId: null,
    }
    s.targetQ.copy(cube.quaternion)

    const CAMERA_FORWARD = new THREE.Vector3(0, 0, 1)

    // Detect which face is most aligned with the camera direction
    function getFrontFace() {
      let best = 4, bestDot = -Infinity
      for (let i = 0; i < 6; i++) {
        const worldNormal = FACE_NORMALS[i].clone().applyQuaternion(cube.quaternion)
        const dot = worldNormal.dot(CAMERA_FORWARD)
        if (dot > bestDot) { bestDot = dot; best = i }
      }
      return best
    }

    // Snap cube to cleanly show the nearest face
    function snapToFace() {
      const fi = getFrontFace()
      // Quaternion that rotates face fi's local normal to world +Z
      const q = new THREE.Quaternion().setFromUnitVectors(FACE_NORMALS[fi], CAMERA_FORWARD)
      s.targetQ.copy(q)

      // Fade content card out, swap data, fade back in
      setContentVisible(false)
      setTimeout(() => {
        setActiveFace(fi)
        setDisplayFace(fi)
        setContentVisible(true)
      }, 300)
    }

    function resetIdle() {
      s.isIdle = false
      clearTimeout(s.idleTimer)
      s.idleTimer = setTimeout(() => { s.isIdle = true }, 3000)
    }

    function clientXY(e) {
      return e.touches
        ? { x: e.touches[0].clientX, y: e.touches[0].clientY }
        : { x: e.clientX,            y: e.clientY }
    }

    function onPointerDown(e) {
      s.isDragging = true
      const { x, y } = clientXY(e)
      s.prevX = x; s.prevY = y
      clearTimeout(s.snapTimer)
      resetIdle()
      mount.style.cursor = 'grabbing'
    }

    function onPointerMove(e) {
      if (e.cancelable) e.preventDefault()
      if (!s.isDragging) return
      const { x, y } = clientXY(e)
      const dx = x - s.prevX
      const dy = y - s.prevY
      s.prevX = x; s.prevY = y

      const sensitivity = 0.012
      const qY = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), dx * sensitivity)
      const qX = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), dy * sensitivity)
      // premultiply = world-space rotation
      cube.quaternion.premultiply(qY).premultiply(qX)
      s.targetQ.copy(cube.quaternion)
    }

    function onPointerUp() {
      if (!s.isDragging) return
      s.isDragging = false
      mount.style.cursor = 'grab'
      clearTimeout(s.snapTimer)
      s.snapTimer = setTimeout(snapToFace, 600)
      resetIdle()
    }

    mount.addEventListener('mousedown',  onPointerDown)
    window.addEventListener('mousemove', onPointerMove)
    window.addEventListener('mouseup',   onPointerUp)
    mount.addEventListener('touchstart', onPointerDown, { passive: false })
    window.addEventListener('touchmove', onPointerMove, { passive: false })
    window.addEventListener('touchend',  onPointerUp)

    const idleAxis = new THREE.Vector3(0.3, 1, 0.1).normalize()

    function animate() {
      s.rafId = requestAnimationFrame(animate)

      if (s.isIdle && !s.isDragging) {
        // Slow diagonal idle spin
        const q = new THREE.Quaternion().setFromAxisAngle(idleAxis, 0.003)
        cube.quaternion.premultiply(q)
        s.targetQ.copy(cube.quaternion)
      } else if (!s.isDragging) {
        // Slerp toward snap target
        cube.quaternion.slerp(s.targetQ, 0.12)
      }

      renderer.render(scene, camera)
    }
    animate()
    resetIdle()

    function onResize() {
      const w = mount.clientWidth, h = mount.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(s.rafId)
      clearTimeout(s.snapTimer)
      clearTimeout(s.idleTimer)
      mount.removeEventListener('mousedown',  onPointerDown)
      window.removeEventListener('mousemove', onPointerMove)
      window.removeEventListener('mouseup',   onPointerUp)
      mount.removeEventListener('touchstart', onPointerDown)
      window.removeEventListener('touchmove', onPointerMove)
      window.removeEventListener('touchend',  onPointerUp)
      window.removeEventListener('resize',    onResize)
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement)
      renderer.dispose()
      geometry.dispose()
      materials.forEach((m) => { m.map?.dispose(); m.dispose() })
      edgesGeo.dispose()
      edgesMat.dispose()
    }
  }, [])

  return (
    <div style={{
      minHeight: '100svh',
      background: 'radial-gradient(ellipse at 30% 40%, #0d2520 0%, #080c0b 60%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'clamp(1rem, 3vw, 2rem)',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: "'DM Sans', sans-serif",
      userSelect: 'none',
    }}>

      {/* Grain noise overlay */}
      <div style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.4,
        backgroundImage: NOISE_SVG,
        backgroundSize: '256px 256px',
      }} />

      {/* Main content */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        width: '100%',
        maxWidth: '960px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 'clamp(1.5rem, 3vw, 2.5rem)',
      }}>

        {/* Header */}
        <div style={{ textAlign: 'center' }}>
          <p style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: '11px',
            color: '#2dd4a4',
            opacity: 0.6,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            marginBottom: '8px',
          }}>Portfolio</p>

          <h1 style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(28px, 5vw, 48px)',
            color: '#e8f5f0',
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
          }}>Imaad Zaffar</h1>

          <p style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: '13px',
            color: '#4a7a6a',
            letterSpacing: '0.05em',
            marginTop: '8px',
          }}>Engineer · Builder · Creator</p>
        </div>

        {/* Cube + Content card row */}
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 'clamp(24px, 4vw, 64px)',
          flexWrap: 'wrap',
          width: '100%',
        }}>
          {/* Three.js mount point */}
          <div
            ref={mountRef}
            style={{
              width: 'clamp(240px, 35vw, 380px)',
              height: 'clamp(240px, 35vw, 380px)',
              cursor: 'grab',
              flexShrink: 0,
              touchAction: 'none',
            }}
          />

          <ContentCard face={FACE_DATA[displayFace]} visible={contentVisible} />
        </div>

        {/* Face navigation dots */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            {FACES.map((_, i) => (
              <div key={i} style={{
                height: '2px',
                width: activeFace === i ? '20px' : '6px',
                background: '#2dd4a4',
                opacity: activeFace === i ? 1 : 0.3,
                transition: 'width 0.3s ease, opacity 0.3s ease',
                borderRadius: '1px',
              }} />
            ))}
          </div>

          <p style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: '11px',
            color: '#2dd4a4',
            opacity: 0.7,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}>{FACES[activeFace].label}</p>

          <p style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: '11px',
            color: '#2a4a40',
            letterSpacing: '0.15em',
          }}>drag to rotate · release to snap</p>
        </div>

      </div>
    </div>
  )
}

export default function ContentCard({ face, visible }) {
  return (
    <div
      className="content-card"
      style={{
        background: '#0b1a17',
        border: '1px solid #1e3d34',
        borderRadius: '4px',
        padding: '24px',
        position: 'relative',
        flexShrink: 0,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(12px)',
        transition: visible
          ? 'opacity 0.5s ease, transform 0.5s ease'
          : 'opacity 0.3s ease, transform 0.3s ease',
      }}
    >
      {/* Corner bracket accent */}
      <div style={{ position: 'absolute', top: '12px', left: '12px', pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '40px', height: '2px', background: '#2dd4a4' }} />
        <div style={{ position: 'absolute', top: 0, left: 0, width: '2px', height: '40px', background: '#2dd4a4' }} />
      </div>

      {/* Section label */}
      <p style={{
        fontFamily: "'DM Mono', monospace",
        fontSize: '11px',
        color: '#2dd4a4',
        opacity: 0.7,
        textTransform: 'uppercase',
        letterSpacing: '0.2em',
        marginBottom: '8px',
        paddingTop: '4px',
      }}>{face.label}</p>

      {/* Title */}
      <h2 style={{
        fontFamily: "'Syne', sans-serif",
        fontSize: '28px',
        fontWeight: 600,
        color: '#e8f5f0',
        letterSpacing: '-0.02em',
        lineHeight: 1.1,
        marginBottom: '10px',
      }}>{face.title}</h2>

      {/* Body */}
      {face.body && (
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '14px',
          color: '#8ab5a8',
          lineHeight: 1.7,
          marginBottom: '16px',
        }}>{face.body}</p>
      )}

      {/* Tags */}
      {face.tags && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {face.tags.map((tag) => (
            <span key={tag} style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '11px',
              color: '#2dd4a4',
              background: '#2dd4a412',
              border: '1px solid #2dd4a430',
              borderRadius: '3px',
              padding: '4px 10px',
            }}>{tag}</span>
          ))}
        </div>
      )}

      {/* Item list (Projects / Learning) */}
      {face.items && (
        <div style={{
          borderLeft: '2px solid #2dd4a430',
          paddingLeft: '12px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          marginBottom: face.books ? '16px' : 0,
        }}>
          {face.items.map((item) => (
            <div key={item.name}>
              <p style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: '13px',
                fontWeight: 600,
                color: '#2dd4a4',
                marginBottom: '2px',
              }}>{item.name}</p>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '12px',
                color: '#6a9990',
              }}>{item.desc}</p>
            </div>
          ))}
        </div>
      )}

      {/* Books (Learning face) */}
      {face.books && (
        <div style={{ marginTop: '16px' }}>
          <p style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: '11px',
            color: '#2dd4a4',
            opacity: 0.7,
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            marginBottom: '8px',
          }}>Reading</p>
          <div style={{
            borderLeft: '2px solid #2dd4a430',
            paddingLeft: '12px',
            display: 'flex',
            flexDirection: 'column',
            gap: '6px',
          }}>
            {face.books.map((book) => (
              <p key={book} style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '12px',
                color: '#6a9990',
              }}>{book}</p>
            ))}
          </div>
        </div>
      )}

      {/* Links (Links face) */}
      {face.links && (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {face.links.map((link, i) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingBottom: '10px',
                paddingTop: i > 0 ? '10px' : 0,
                borderBottom: '1px solid #1a3830',
                textDecoration: 'none',
              }}
            >
              <span style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '11px',
                color: '#4a7a70',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
              }}>{link.label}</span>
              <span style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: '13px',
                fontWeight: 600,
                color: '#2dd4a4',
              }}>{link.handle}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  )
}

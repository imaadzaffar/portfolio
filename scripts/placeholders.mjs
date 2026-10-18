import sharp from 'sharp'

for (let n = 1; n <= 6; n++) {
  const a = 222 - n * 4
  const b = a - 14
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="1200">
<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="rgb(${a},${a},${a})"/><stop offset="1" stop-color="rgb(${b},${b},${b})"/></linearGradient></defs>
<rect width="1200" height="1200" fill="url(#g)"/>
<text x="600" y="615" text-anchor="middle" font-family="monospace" font-size="44" letter-spacing="6" fill="rgb(140,140,140)">PLACEHOLDER ${n}</text></svg>`
  await sharp(Buffer.from(svg)).jpeg({ quality: 80 }).toFile(`src/content/gallery/placeholder-${n}.jpg`)
  await import('node:fs').then(({ writeFileSync }) =>
    writeFileSync(
      `src/content/gallery/placeholder-${n}.json`,
      JSON.stringify({ image: `./placeholder-${n}.jpg`, caption: null, place: null, date: null, todo: 'photo, caption, place and date' }, null, 2) + '\n'
    )
  )
}

import { readFileSync, readdirSync } from 'node:fs'

const dir = new URL('../src/content/', import.meta.url)
const rows = []
const now = readFileSync(new URL('now.md', dir), 'utf8').match(/^todo:\s*(.+)$/m)
if (now) rows.push(['now.md', now[1]])
for (const name of ['timeline.json', 'projects.json', 'interests.json', 'links.json'])
  for (const e of JSON.parse(readFileSync(new URL(name, dir), 'utf8')))
    if (e.todo) rows.push([`${name}#${e.id}`, e.todo])
for (const f of readdirSync(new URL('gallery/', dir)).filter((f) => f.endsWith('.json')))
  rows.push([`gallery/${f}`, JSON.parse(readFileSync(new URL(`gallery/${f}`, dir), 'utf8')).todo])
for (const [where, what] of rows.filter((r) => r[1])) console.log(`${where}: ${what}`)

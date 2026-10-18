import { defineCollection, z } from 'astro:content'
import { file, glob } from 'astro/loaders'
import countries from 'i18n-iso-countries'

const todo = z.string().optional()

const now = defineCollection({
  loader: glob({ pattern: 'now.md', base: './src/content' }),
  schema: z.object({ updated: z.coerce.date(), aside: z.string().optional(), todo }),
})

const timeline = defineCollection({
  loader: file('./src/content/timeline.json'),
  schema: z.object({
    year: z.number().int().nullable(),
    role: z.string().nullable(),
    org: z.string(),
    url: z.string().url().optional(),
    note: z.string().nullable(),
    current: z.boolean().default(false),
    aside: z.string().optional(),
    todo,
  }),
})

const interests = defineCollection({
  loader: file('./src/content/interests.json'),
  schema: z.discriminatedUnion('kind', [
    z.object({ kind: z.literal('interest'), label: z.string().nullable(), todo }),
    z.object({ kind: z.literal('highlight'), text: z.string() }),
    z.object({
      kind: z.literal('book'),
      title: z.string().nullable(),
      status: z.enum(['reading', 'read']),
      todo,
    }),
  ]),
})

const projects = defineCollection({
  loader: file('./src/content/projects.json'),
  schema: z.object({
    name: z.string(),
    blurb: z.string().nullable(),
    url: z.string().url().optional(),
    repo: z.string().url().optional(),
    year: z.number().int().nullable(),
    status: z.enum(['live', 'archived', 'wip']).nullable(),
    todo,
  }),
})

const alpha2 = Object.keys(countries.getAlpha2Codes()) as [string, ...string[]]

const travel = defineCollection({
  loader: file('./src/content/travel.json'),
  schema: z.object({
    id: z.enum(alpha2),
    favourite: z.boolean().default(false),
    year: z.number().int().optional(),
    note: z.string().optional(),
  }),
})

export const linkIds = ['x', 'instagram', 'youtube', 'github', 'linkedin', 'email'] as const

const links = defineCollection({
  loader: file('./src/content/links.json'),
  schema: z.object({
    id: z.enum(linkIds),
    label: z.string(),
    url: z.string().nullable(),
    todo,
  }),
})

const gallery = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/gallery' }),
  schema: ({ image }) =>
    z.object({
      image: image(),
      caption: z.string().nullable(),
      place: z.string().nullable(),
      date: z.coerce.date().nullable(),
      todo,
    }),
})

export const collections = { now, timeline, projects, interests, travel, links, gallery }

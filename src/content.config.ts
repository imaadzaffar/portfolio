import { defineCollection, z } from 'astro:content'
import { file, glob } from 'astro/loaders'

const todo = z.string().optional()

const now = defineCollection({
  loader: glob({ pattern: 'now.md', base: './src/content' }),
  schema: z.object({ updated: z.coerce.date(), todo }),
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
    z.object({
      kind: z.literal('book'),
      title: z.string().nullable(),
      status: z.enum(['reading', 'read']),
      todo,
    }),
    z.object({
      kind: z.literal('project'),
      name: z.string(),
      blurb: z.string().optional(),
      url: z.string().url().nullable(),
      todo,
    }),
  ]),
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

export const collections = { now, timeline, interests, links, gallery }

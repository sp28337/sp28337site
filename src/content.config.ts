import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().min(10),
    description: z.string().min(20),
    publishedAt: z.coerce.date(),
    author: z.string().default('sp28337'),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false)
  })
});

export const collections = { blog };

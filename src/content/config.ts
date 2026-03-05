import { defineCollection, z } from 'astro:content';

const countries = defineCollection({
  schema: z.object({
    name: z.string(),
    flag: z.string(),
    capital: z.string(),
    region: z.string(),
    government: z.string(),
    population: z.string(),
    alliances: z.array(z.string()),
    tags: z.array(z.string()),
  }),
});

const organizations = defineCollection({
  schema: z.object({
    name: z.string(),
    flag: z.string(),
    type: z.string(),
    founded: z.string(),
    headquarters: z.string(),
    members: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = { countries, organizations };

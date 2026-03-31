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
    map: z.string().optional(),
    map_credit: z.string().optional(),
  }),
});

const organizations = defineCollection({
  schema: z.object({
    name: z.string(),
    name_short: z.string().optional(),
    flag: z.string(),
    type: z.string(),
    subtype: z.string().optional(),
    founded: z.union([z.string(), z.number()]),
    headquarters: z.string(),
    active_regions: z.array(z.string()).optional(),
    members: z.string().optional(),
    members_count: z.number().optional(),
    members_type: z.string().optional(),
    secretary_general: z.string().optional(),
    designation_un: z.enum(['tak', 'nie', 'częściowa']).optional(),
    designation_eu: z.enum(['tak', 'nie']).optional(),
    designation_us: z.enum(['tak', 'nie']).optional(),
    tags: z.array(z.string()),
    last_updated: z.string().optional(),
  }),
});

export const collections = { countries, organizations };

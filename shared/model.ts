import { z } from 'zod'

/**
 * Core schemas define the shape of the data.
 * They are then extended to include the ID.
 * 
 * This is useful for validating incoming data.
 * 
 * Inspired by DrizzleORM's zod schema generation, see https://orm.drizzle.team/docs/zod.
 */
export const userSchemaCore = z.object({
    username: z.string(),
    hash: z.string(),
})

export const sessionSchemaCore = z.object({
    userId: z.number(),
    expiresAt: z.date(),
    data: z.any(),
})

export const genreSchemaCore = z.object({
    name: z.string(),
})

export const mediaSchemaCore = z.object({
    title: z.string(),
    description: z.string(),
    genres: z.array(z.string()),
    uploadedOn: z.coerce.date(),
    status: z.enum(['draft', 'published']),
    thumbnailUrl: z.string(),
})

export const userSchema = userSchemaCore.extend({
    id: z.string(),
})

export const sessionSchema = sessionSchemaCore.extend({
    id: z.string(),
})

export const genreSchema = genreSchemaCore.extend({
    id: z.string(),
})

export const mediaSchema = mediaSchemaCore.extend({
    id: z.string(),
})

export type UserCore = z.infer<typeof userSchemaCore>
export type SessionCore = z.infer<typeof sessionSchemaCore>
export type GenreCore = z.infer<typeof genreSchemaCore>
export type MediaCore = z.infer<typeof mediaSchemaCore>
export type User = z.infer<typeof userSchema>
export type Session = z.infer<typeof sessionSchema>
export type Genre = z.infer<typeof genreSchema>
export type Media = z.infer<typeof mediaSchema>
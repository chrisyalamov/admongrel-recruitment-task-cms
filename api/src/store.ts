/**
 * This file includes in-memory stores for the application.
 * 
 * In production, this would be stored in a database.
 */

import argon2 from 'argon2'
import type { User, Session, Genre, Media } from '../../shared/model.ts'


const users: User[] = [
    { id: 'a57e56c3-72d0-4479-acd2-f768b865809c', username: 'admin', hash: await argon2.hash('admongrel') },
]

const sessions: Session[] = [
]

const genres: Genre[] = [
    { id: 'fc1ec18b-5565-4cb4-9bce-a002cfbf4110', name: 'Action' },
    { id: 'ed058993-ee44-4102-9fbb-89694f435133', name: 'Adventure' },
    { id: 'e07b54bf-1548-4531-8609-9e190a92bd3b', name: 'Comedy' },
    { id: 'a686c39d-675f-4b1a-bc8a-465640df807a', name: 'Drama' },
    { id: 'b8e81ead-4e56-4bde-96de-69fa37a7b392', name: 'Fantasy' },
    { id: '68bd643c-b027-4290-9b95-4f89f88172e4', name: 'Horror' },
    { id: '4ef45569-2fe5-41fa-b13b-ba16d6ae56aa', name: 'Romance' },
    { id: '2afac126-f432-40d1-a3d9-03ad43fcd703', name: 'Sci-Fi' },
    { id: 'fe6eaed4-8bdc-420e-8c42-7ee556b3f4f0', name: 'Thriller' },
]

/**
 * The data in the object below has been created using Generative AI.
 */
const media: Media[] = [
    {
        id: "387a1989-2d6e-4c3b-bc3b-26e734773f9f",
        title: "Galactic Odyssey",
        description: "An interstellar journey filled with danger and discovery as astronauts explore uncharted worlds.",
        genres: ["2afac126-f432-40d1-a3d9-03ad43fcd703", "ed058993-ee44-4102-9fbb-89694f435133"],
        uploadedOn: new Date("2023-01-12"),
        status: "published",
        thumbnailUrl: "https://example.com/thumbnails/galactic_odyssey.jpg",
    },
    {
        id: 'e7014996-2b29-4666-b4c1-0985190a6eda',
        title: "Heart's Embrace",
        description: "A heartfelt story of two people finding love amidst life's challenges.",
        genres: ["4ef45569-2fe5-41fa-b13b-ba16d6ae56aa", "a686c39d-675f-4b1a-bc8a-465640df807a"],
        uploadedOn: new Date("2022-11-30"),
        status: "published",
        thumbnailUrl: "https://example.com/thumbnails/hearts_embrace.jpg",
    },
    {
        id: 'b75982a9-f3b6-4506-8158-94e678fba42b',
        title: "The Last Warrior",
        description: "A brave warrior fights to save his kingdom from a looming threat.",
        genres: ["fc1ec18b-5565-4cb4-9bce-a002cfbf4110", "ed058993-ee44-4102-9fbb-89694f435133"],
        uploadedOn: new Date("2022-08-14"),
        status: "published",
        thumbnailUrl: "https://example.com/thumbnails/the_last_warrior.jpg",
    },
    {
        id: '831f7209-038c-4b1d-9e4e-8c040cb4e82e',
        title: "Into the Depths",
        description: "A horror story of survival and courage beneath the dark waves.",
        genres: ["68bd643c-b027-4290-9b95-4f89f88172e4", "fe6eaed4-8bdc-420e-8c42-7ee556b3f4f0"],
        uploadedOn: new Date("2023-03-22"),
        status: "published",
        thumbnailUrl: "https://example.com/thumbnails/into_the_depths.jpg",
    },
    {
        id: '66b05a55-0c1e-43d2-9e80-849c6c136c3c',
        title: "Stolen Stars",
        description: "Two rival captains seek the power of the stars in a high-stakes space race.",
        genres: ["2afac126-f432-40d1-a3d9-03ad43fcd703", "fc1ec18b-5565-4cb4-9bce-a002cfbf4110"],
        uploadedOn: new Date("2023-05-17"),
        status: "draft",
        thumbnailUrl: "https://example.com/thumbnails/stolen_stars.jpg",
    },
    {
        id: '83b4eed4-f70a-46e2-bda9-34d3a25d266c',
        title: "Mystic Isles",
        description: "An enchanted land filled with mythical creatures and ancient mysteries.",
        genres: ["b8e81ead-4e56-4bde-96de-69fa37a7b392", "ed058993-ee44-4102-9fbb-89694f435133"],
        uploadedOn: new Date("2021-10-11"),
        status: "published",
        thumbnailUrl: "https://example.com/thumbnails/mystic_isles.jpg",
    },
    {
        id: 'ea7e3096-81c8-4a88-a1a0-e12f512ec857',
        title: "Edge of Reality",
        description: "A group of friends ventures into a parallel universe and discovers their own worst fears.",
        genres: ["68bd643c-b027-4290-9b95-4f89f88172e4", "2afac126-f432-40d1-a3d9-03ad43fcd703"],
        uploadedOn: new Date("2022-09-29"),
        status: "published",
        thumbnailUrl: "https://example.com/thumbnails/edge_of_reality.jpg",
    }
]

/**
 * Function which checks if a genre exists.
 * Typically, this would simply be a constraint in the database, however,
 * as this demo uses an in-memory store, we need to check it manually.
 */
export const validateGenreId = (genreId: string) => {
    return genres.some((g) => g.id === genreId)
}

export { users, sessions, genres, media }
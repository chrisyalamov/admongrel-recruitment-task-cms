import { v4 as uuidv4 } from 'uuid';
import { Hono } from "hono"
import { genres } from "./store.js"
import { genreSchemaCore, type Genre, type GenreCore } from "../../shared/model.js"

const app = new Hono()

/**
 * This route will return a list of genres.
 */
app.get('/', (c) => {
    return c.json(genres)
})

/**
 * This route will return the details of a genre.
 */
app.get("/:genreId", (c) => {
    const genreId = c.req.param().genreId
    const genre = genres.find((g) => g.id === genreId)

    if (!genre) {
        return c.notFound()
    } else {
        return c.json(genre)
    }
})

app.post("/", async (c) => {
    const body = await c.req.json()
    console.log(body)

    /**
     * Validate the request body against the genre schema.
     * 
     * All remaining codepaths can assume that the body is valid and
     * conforms to the genre schema.
     * 
     * I.e. if no error is thrown, the body is valid.
     */
    try {
        genreSchemaCore.parse(body)
    }
    catch (e) {
        c.status(400)
        return c.text("Bad Request")
    }
    
    const genre: Genre = {
        id: uuidv4(),
        ...body as GenreCore
    }

    genres.push(genre)
    return c.json(genre)
})

app.delete("/:genreId", (c) => {
    const genreId = c.req.param().genreId
    const genreIndex = genres.findIndex((g) => g.id === genreId)

    if (genreIndex === -1) {
        return c.notFound()
    } else {
        genres.splice(genreIndex, 1)
        return c.json(genres)
    }
})

export default app
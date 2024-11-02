import { v4 as uuidv4 } from 'uuid';
import { Hono } from "hono"
import { media, validateGenreId } from './store.ts';
import { mediaSchemaCore, type Media, type MediaCore } from '../../shared/model.ts';

const app = new Hono()

app.get('/', (c) => {
    return c.json(media)
})

app.get("/:mediaId", (c) => {
    const mediaId = c.req.param().mediaId
    const mediaItem = media.find((m) => m.id === mediaId)

    if (!media) {
        return c.notFound()
    } else {
        return c.json(mediaItem)
    }
})

app.post("/", async (c) => {
    const body = await c.req.json()
    console.log(body)

    // Validate overall shape of the request body
    try {
        mediaSchemaCore.parse(body)
    }
    catch (e) {
        c.status(400)
        return c.text("Bad Request")
    }

    const genresValid = body.genres.every((genre: string) => { validateGenreId(genre) })
    if (!genresValid) {
        c.status(400)
        return c.text("Bad Request")
    }
    
    const mediaItem: Media = {
        id: uuidv4(),
        ...body as MediaCore
    }

    media.push(mediaItem)
    return c.json(media)
})

app.delete("/:mediaId", (c) => {
    const mediaId = c.req.param().mediaId
    const mediaIndex = media.findIndex((m) => m.id === mediaId)

    if (mediaIndex === -1) {
        return c.notFound()
    } else {
        media.splice(mediaIndex, 1)
        return c.json(media)
    }
})

export default app
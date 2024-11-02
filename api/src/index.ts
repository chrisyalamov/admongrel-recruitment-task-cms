import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import genres from './genres.ts'
import media from './media.ts'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.use('*', cors({
  origin: '*'
}))

app.route('/genres', genres)
app.route('/media', media)

const port = 3000
console.log(`Server is running on http://localhost:${port}`)

serve({
  fetch: app.fetch,
  port
})

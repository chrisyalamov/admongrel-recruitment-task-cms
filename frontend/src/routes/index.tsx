import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { mediaSchema, mediaSchemaCore } from '../../../shared/model'
import { z } from 'zod'
import MediaEntry from '../components/media-entry'

export const Route = createFileRoute('/')({
  component: IndexPage,
  loader: async () => {
    const res = await fetch('http://localhost:3000/media')
    const json = await res.json()

    const data = z.array(mediaSchema).parse(json)

    return data
  },
})

function IndexPage() {
  const data = Route.useLoaderData()

  return (
    <div className="p-2 md:px-20 pt-0">
      <h3 className="moderustic w-full text-center border-b-[0.5px] border-neutral-400 py-2 mb-8">Directory</h3>
      <div className='mx-auto gap-12 max-w-5xl grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))]'>
        {
          data.map((media: any) => (
            <MediaEntry media={media} key={media.id} />
          ))
        }
      </div>
    </div>
  )
}

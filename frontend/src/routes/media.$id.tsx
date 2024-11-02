import { createFileRoute } from '@tanstack/react-router'
import { mediaSchema } from '../../../shared/model'
import { useQuery } from '@tanstack/react-query'
import GenreBadge from '../components/genre-badge'
import { DateTime } from 'luxon'

const MediaPage = () => {
    const data = Route.useLoaderData()

    return <div>
        <h2 className='big-shoulders text-4xl uppercase tracking-wide font-extrabold'>{data.title}</h2>
        <p>{data.description}</p>
        <input type='date' defaultValue={DateTime.fromJSDate(data.uploadedOn).toISODate()}  />

        {
            data.genres.map((genre) => (
                <GenreBadge genreID={genre} key={genre} />
            ))
        }
    </div>
}

export const Route = createFileRoute('/media/$id')({
    loader: async ({ params }) => {
        const res = await fetch(`http://localhost:3000/media/${params.id}`)
        const json = await res.json()

        const data = mediaSchema.parse(json)

        return data
    },
    component: MediaPage,
})
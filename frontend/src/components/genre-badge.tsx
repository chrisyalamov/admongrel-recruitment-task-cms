import { useQuery } from "@tanstack/react-query"

export default function GenreBadge({ genreID }: { genreID: string }) {
    const genre = useQuery({
        queryKey: ['genre', genreID],
        queryFn: async () => {
            const res = await fetch(`http://localhost:3000/genres/${genreID}`)
            const json = await res.json()

            return json
        }
    })

    return (
        <span className="bg-neutral-400/20 rounded px-1">
            {JSON.stringify(genre.data)}
        </span>
    )
}
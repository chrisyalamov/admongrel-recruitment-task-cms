import type { Media } from '../../../shared/model'
export const StatusBadge = ({ status }: Pick<Media, "status">) => {
    if (status == "draft") {
        return <span className='inline-block bg-blue-400/10 border border-blue-400/50 text-blue-500 rounded px-2 py-0.5 text-sm uppercase leading-none'>
            Draft
        </span>
    } else if (status == "published") {
        return <span className='inline-block bg-emerald-400/10 border border-emerald-400/50 text-emerald-500 rounded px-2 py-0.5 text-sm uppercase leading-none'>
            Published
        </span>
    } else {
        return <span className='inline-block bg-neutral-400/10 border border-neutral-400/50 text-neutral-400 rounded px-2 py-0.5 text-sm uppercase leading-none'>
            Unknown status
        </span>
    }
} 
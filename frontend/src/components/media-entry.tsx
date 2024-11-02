import { Link } from "@tanstack/react-router"
import { Media } from "../../../shared/model"
import { StatusBadge } from "./status-badge"
import { DateTime } from 'luxon'

const MediaEntryBasicInfo = ({ title, description }: Pick<Media, "title" | "description">) => {
  return <>
    <h3 className="big-shoulders text-xl uppercase tracking-wide font-bold group-hover:bg-neutral-400/20 rounded max-w-max px-1">{title}</h3>
    <p className="group-hover:bg-neutral-400/20 rounded max-w-max px-1">{description}</p>
  </>
}

const MediaEntryMeta = ({ status, uploadedOn }: Pick<Media, "status" | "uploadedOn">) => {
  return <div className="flex justify-between items-center px-1">
    <span>{
      DateTime.fromJSDate(uploadedOn).toISODate()
    }</span>
    <StatusBadge status={status} />
  </div>
}

const MediaEntry = ({ media }: { media: Media }) => {
  // Retrieve zustand context whether to render images
  
  return (
    <Link className="flex gap-2 items-center">
      <img src="https://placehold.co/400x700" alt={media.title} className="rounded w-14" />
      <div className="p-2 group flex flex-col gap-1 grow justify-between min-h-full">
        <MediaEntryBasicInfo
          title={media.title}
          description={media.description}
        />
        <MediaEntryMeta
          status={media.status}
          uploadedOn={media.uploadedOn}
        />
      </div>
    </Link>
  )
}
export default MediaEntry
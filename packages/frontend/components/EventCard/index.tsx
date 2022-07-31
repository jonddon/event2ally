import Link from "next/link"
import slugify from 'react-slugify';
import BookMark from "@components/Icons/BookMark"
import { IEventCard } from "types"


const EventCard = (props:IEventCard & {className:string}) =>{

    const {name, cost, date, venue, organizer, imgSrc, className} = props

    return (<>

    <div className={className} style={{maxWidth:'20rem'}}>
      <div className="relative transition duration-500 bg-white rounded-lg shadow-lg hover:shadow-xl">
        <Link href={`events/${slugify(name)}`}>
          <a>
        <img className="rounded-t-lg" src={imgSrc} alt={name} />
          </a>
        </Link>
        <div className="px-8 py-6 bg-white rounded-lg">
          <h2 className="mb-3 text-2xl font-bold text-gray-700 hover:text-gray-900 hover:cursor-pointer">{name}</h2>
          <p className="tracking-wide text-orange-600" >{date}</p>
          <p className="tracking-wide text-gray-700">{venue}</p>
          <p className="my-4 tracking-wide text-gray-700">{organizer}</p>
          <div className="flex justify-between ">
            <div className="">{cost}</div>
            <div className="flex items-center p-1 px-2 rounded-sm bg-purple-cpurple">
                <BookMark classNames="mx-1"/>
                Save Event
                </div>
          </div>
        </div>
      </div>
    </div>   
    </>)
}

export default EventCard
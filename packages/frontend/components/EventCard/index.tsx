import BookMark from "@components/Icons/BookMark"
import { IEventCard } from "types"


const EventCard = (props:IEventCard & {className:string}) =>{

    const {name, cost, date, venue, organizer, imgSrc, className} = props

    return (<>

    <div className={className} style={{maxWidth:'20rem'}}>
      <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
        <img className="rounded-t-lg" src={imgSrc} alt={name} />
        <div className="py-6 px-8 rounded-lg bg-white">
          <h2 className="text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer">{name}</h2>
          <p className="tracking-wide text-orange-600" >{date}</p>
          <p className="text-gray-700 tracking-wide">{venue}</p>
          <p className="text-gray-700 tracking-wide my-4">{organizer}</p>
          <div className="flex justify-between ">
            <div className="">{cost}</div>
            <div className="flex items-center bg-purple-cpurple rounded-sm p-1 px-2">
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
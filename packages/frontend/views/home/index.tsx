import {Fragment} from 'react'
import EventCard from '@components/EventCard'
import FilterIcon from '@components/Icons/Filter'
import useGetEvents from './hooks/useGetEvents'


const Home  = ()=> {
    const {events} = useGetEvents()
    return <>
    <div className="h-screen bg-red-200 bg-[url('/home-hero.png')] bg-cover grid place-items-center bg-no-repeat">     
        <h1 className='text-6xl  text-white px-3'
        >Find, Host and Manage 
        <br />
        Your Events</h1>
       
    </div>

    <div className='my-12 px-8'>
        <div className='flex justify-between p-4 '>
            <div><h2 className='text-2xl'>Upcoming Coming</h2></div>
            <div className='rounded-md bg-gray-300 py-1 px-2 flex items-center '>
                <FilterIcon classNames='mr-1' />
                filter</div>
        </div>
       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 place-items-center" >
            
        {
            events.map(({id, ...items})=>(<Fragment key={id}>
            <EventCard className='my-4'  {...items} />
            </Fragment>))
        }
        </div> 
    </div>
    </>
}




export default Home
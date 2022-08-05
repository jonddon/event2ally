 import Link from "next/link"
import EventPageWrapper from "@components/EventPageWrapper"


const Event =()=>{

    return (<>
    
    <EventPageWrapper>
            <div className='h-112' style={{height:'32rem'}}>
        <img src="/event-one.png" className="object-cover w-full h-full"/>     
            </div>
            <div className='w-4/5 mx-auto md:hidden '>
                    <Link href='/events/checkout'>
                        <a className='block w-full p-3 mx-auto text-xl text-white -translate-y-6 rounded-md bg-red-cred'>
                        Get Ticket
                        </a>
                    </Link>
            </div>
       <div className='grid grid-cols-1 gap-4 p-3 md:grid-cols-1 lg:grid-cols-2 '>
        
        <div>
            <h1 className='my-2 text-xl'>Crypto Happy Hour 2022</h1>
            <h2 className='my-3 font-semibold text-gray-700'>Description</h2>
          <p className='text-gray-600'>
          With the Tapas and Flamenco Crawl experience authentic Tapas and Flamenco in Madrid. On this tour you will try typical Spanish “Tapas” with a drink of your choice (you can choose between beer, sangria, red wine, white wine, soda, water) and have a shot of the traditional Spanish liqueur "Madroño", then watch a traditional flamenco show in one of the most famous “Tablaos” of flamenco in Madrid with professional dancers. At the end discover why Madrid is called "the city that never sleep" in our famous Pub Crawl, going from pub to pub and finishing the night in one of the best clubs in Madrid.
          </p>
            
          <h2 className='my-3 font-semibold text-gray-700'>Event Type</h2>
          <p>Hybrid</p>
          <h2 className='my-3 font-semibold text-gray-700'>Location</h2>
          <p>30 Mobolaji Bank Anthony Way, Lagos, Lagos 021189</p>
          <h2 className='my-3 font-semibold text-gray-700'>Host</h2>
          <p>Tech Badies</p>
        </div>
        <div>
        <div className='mx-auto md:max-w-sm'>
        <Link href='/events/checkout'>
                        <a className='items-start justify-center hidden w-full p-3 text-xl text-white -translate-y-10 rounded-md md:flex bg-red-cred'>
                        Get Ticket
                        </a>
                    </Link>
          
            <h1 className='my-2 font-semibold md:my-0 md:pl-3'>Date and Time</h1>
            <ul>
                <li  className='mb-3'>
                    <div className='flex items-center justify-between p-3 py-4 my-4 bg-white border-l-4 border-l-black-c100'>
                        <div className='text-xs'>
                        <span className='text-orange-corange'>
                        Thu, September 15, 2022 -             
                        </span>
                        7:00 AM – 3:00 PM EDT
                        </div>
                        <div className='flex items-center'>  
                        <label className="custom-checkbox">
                        <input type="checkbox" checked />
                        <span></span>
                        </label>
                            </div>
                    </div>
                </li>
                <li  className='mb-3'>
                    <div className='flex items-center justify-between p-3 py-4 my-4 bg-white border-l-4 border-l-black-c100'>
                        <div className='text-xs'>
                        <span className='text-orange-corange'>
                        Thu, September 15, 2022 -             
                        </span>
                        7:00 AM – 3:00 PM EDT
                        </div>
                        <div className='flex items-center'>  
                        <label className="custom-checkbox">
                        <input type="checkbox" />
                        <span></span>
                        </label>
                            </div>
                    </div>
                </li>
                <li  className='mb-3'>
                    <div className='flex items-center justify-between p-3 py-4 my-4 bg-white border-l-4 border-l-black-c100'>
                        <div className='text-xs'>
                        <span className='text-orange-corange'>
                        Thu, September 15, 2022 -             
                        </span>
                        7:00 AM – 3:00 PM EDT
                        </div>
                        <div className='flex items-center'>  
                        <label className="custom-checkbox">
                        <input type="checkbox" />
                        <span></span>
                        </label>
                            </div>
                    </div>
                </li>
                  
            </ul>
            <div>
            <h1 className='my-2 font-semibold'>Photos</h1>
            <div className='grid gap-2 lg:grid-cols-3'>
                <div className='h-32 bg-red-500 '>
                <img src="/event-photo-1.png" className="object-cover w-full h-full"/>  
                </div>
                <div className='h-32 bg-red-500 '>
                <img src="/event-photo-1.png" className="object-cover w-full h-full"/>  
                </div>
                <div className='h-32 bg-red-500'>
                <img src="/event-photo-1.png" className="object-cover w-full h-full"/>  
                </div>
              
            </div>              
            </div>
        </div>

        </div>
       </div>
    </EventPageWrapper>
    </>)
}

export default Event
import React, { useState } from "react"
import EventPageWrapper from "@components/EventPageWrapper"
import Select from "@components/Select"


const CheckoutEvent = ()=>{
    const  [qty, setQty] = useState(1)
    const handleChange =(e:React.ChangeEvent<HTMLInputElement>)=>{   
            setQty(Number(e.target.value))
        }

    const handleQty = (qtyType:string)=>{ 
        if(qtyType=='inc'){
            return setQty(()=> qty + 1)
        }
        setQty(()=>qty == 0 ? qty : qty- 1)
    }
    return <>
    <EventPageWrapper>
    
    {/* grid grid-cols-1 md:grid-cols-2 p-6 */}
    <div className="p-6 bg-white md:mt-20">
    <div className="grid md:grid-cols-3 gap-4">
        <div>
            <div className="max-w-xs rounded-none bg-gray-cgray">
                <img src='/event-photo-1.png' alt='event-image' width='100%' className="rounded-none" />
                <div className="p-3">


                <div className="flex justify-between">
                    <div>
                        <div className="text-xs text-gray-500" >Tickets</div>
                        <div className="font-bold">3 Matic</div>
                    </div>
                    <div className="flex h-auto  items-center" >
                        <button className="bg-gray-btngray px-2" onClick={()=>handleQty('inc')}>+</button>
                       <input 
                       value={qty}
                       type='number'
                       min={0}
                       onChange={handleChange}
                       style={{width:'2rem'}} 
                       className='px-1 focus:outline-none' />
                        <button className="bg-gray-btngray px-2" onClick={()=>handleQty('dec')}>-</button>
                    </div>
                </div>
                <div className="mx-auto text-center"> 
                <Select name="event-type" onChange={(e)=>console.log(e.target.value)} className='mt-3' >
                        <option value={1}>Hybrid</option>
    <option value={2}>Online</option>
    <option value={3}>Onsite</option>
                    </Select>
                </div>
                </div>
               
            </div>
        </div>
        <div className="md:col-span-2 ">
            <div>
            <h1 className='my-2 text-xl'>Crypto Happy Hour 2022</h1>
            </div>

            <div > 
            <h2 className='my-3 font-semibold text-gray-700'>Location</h2>
          <p className='text-gray-600'>
          30 Mobolaji Bank Anthony Way, Lagos, Lagos 021189
          </p>
        
          <div className="bg-gray-cgray p-6 mt-6">
            <div className="flex justify-between items-center">
                <div  className='my-3 font-semibold text-gray-700'> Order Summary</div>
                <div className="text-right"> Mon Jul 11,2022 </div>
            </div>
            <div className="flex justify-between">
                <div>2 x Tickets </div>
                <div>6 Matic </div>
            </div>
          <button className="w-full rounded-md bg-black-cblack text-white p-2 my-6 bg-black-c200">checkout</button>
          </div>

            
            </div>
        </div>
    </div>
    </div>
    </EventPageWrapper>
    
     </>
}


export default CheckoutEvent
import { ReactNode } from "react"



interface IProps {
    children:ReactNode
}
const EventPageWrapper  =({children}:IProps)=>{
    return(<>

    <div className="min-h-screen  bg-[url('/home-hero.png')] bg-no-repeat mb-12">
        <div className="backdrop-blur">

       <div className="max-w-5xl px-3 m-auto pt-28" >
        <div style={{
        backgroundColor:'#F6F6F6'
       }}>
            
       {children}
        </div>
        </div>
        </div>
    </div>
    
    </>)
}


export default EventPageWrapper
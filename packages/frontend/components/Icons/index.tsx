
interface IProps {
    children:React.ReactNode
}

const IconWrapper = ({children}:IProps)=>{
    return (<>
    <span className="font-2xl">
    {children}
    </span>
    </>)
}

export default IconWrapper
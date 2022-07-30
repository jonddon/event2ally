import IconWrapper from ".."
import { MdBookmarkBorder } from "react-icons/md";


const BookMark = ({classNames=''})=>{
    return (<>
    <IconWrapper>
    <MdBookmarkBorder className={classNames} />
    </IconWrapper>
    </>)
}

export default BookMark
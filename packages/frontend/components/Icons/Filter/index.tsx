import IconWrapper from ".."
import { MdFilterAlt } from "react-icons/md";

const FilterIcon = ({classNames=''})=>{
    return (<>
    <IconWrapper>
    <MdFilterAlt className={classNames} />
    </IconWrapper>
    </>)
}

export default FilterIcon
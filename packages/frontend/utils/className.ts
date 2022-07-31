

const ClassNames = (className:string, defaultClasses:string=''):string =>{ 
    const splitClassName = className.split(",")
    const splitClasses=!!defaultClasses?  defaultClasses.split(" "): []
    return [ ...splitClasses,...splitClassName].join(" ")
}

export  default ClassNames
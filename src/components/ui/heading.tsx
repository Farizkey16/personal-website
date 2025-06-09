import { ReactNode } from "react"

interface HeadingTitles{
    name: string,
    className: string
}

export default function HeadingTitles({name, className, ...rest}: HeadingTitles){
    return(
        <h1 className={className} {...rest}>{ name }</h1>
    )
}
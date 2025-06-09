
import { ReactNode, HTMLAttributes } from "react"

interface SectionWrapper extends HTMLAttributes<HTMLElement>{
    children: ReactNode,
    className?: string
}


export default function Section_wrapper({children, className, ...rest}: SectionWrapper) {
    return(
        <section className={className} {...rest}>
            { children }
        </section>
    )

}


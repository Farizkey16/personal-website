
import { ReactNode, HTMLAttributes } from "react"

interface WhiteBox{
    children: ReactNode,
    className: string
}

export default function White_box({ children, className, ...rest}: WhiteBox) {
    return(
        <div className={`rounded-lg ${className}`} {...rest}>
            {children}
            
        </div>
    )
}
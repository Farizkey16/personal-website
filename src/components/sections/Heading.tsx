
interface HeadingType{
    className?: string
}


export default function SiteHeading({className}: HeadingType) {

    return <div className={className}>
        <h2 className="text-white heading-font font-bold text-6xl sm:text-7xl">Farizky,</h2>
        <h4 className="text-white heading-font font-bold text-md sm:text-2xl">A Software Engineer.</h4>
    </div>
}
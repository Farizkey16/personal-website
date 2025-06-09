
import Image from "next/image";
import { Button } from "../ui/button";
import { Bebas_Neue, IBM_Plex_Sans } from "next/font/google";

interface ProfileTyping{
    isActive?: string
}

export const bebasNeue = Bebas_Neue({
      weight: "400",
      subsets: ["latin"],
      variable: "--font-bebas"
    })
    
export const ibmPlex = IBM_Plex_Sans({
      weight: "500",
      subsets: ["latin"],
      variable: "--font-ibm"
    })
    



export default function ProfilePage({isActive}: ProfileTyping){

    

    return <section className="flex flex-col md:flex-row items-center bg-[#EAEAEA] justify-between min-h-screen px-6 pt-24 gap-8">

        
            <div className="flex-1 flex flex-col justify-center gap-2">
                <div className="">
                    <h2 className={`${bebasNeue.className} text-3xl md:text-[150px] text-[#252A34]`}>Hi, I'm</h2>
                    <h2 className={`${bebasNeue.className} text-8xl sm:text-9xl md:text-[200px] text-[#FA7E7E]`}>Farizky</h2>
                </div>
                <p className={`${ibmPlex.className} text-lg text-[#252A34] max-w-md`}>
                I build website, develop product, and help your product visible to the market.
                </p>  
                <Button size="default" variant="default" className={`bg-[#08D9D6] text-[#252A34] hover:bg-[#05c0be] cursor-pointer font-bold w-1/3 md:w-1/3 ${ibmPlex.className}`} >View my work</Button>
            </div>

            <div className="flex justify-center items-center sm:w-1/3 md:w-3xl md:self-end">
                <Image
                src="/assets/heroImageBW.png"
                alt="Farizky Hero"
                width={600} // or whatever your max width
                height={600} // or a fixed height if you want
                className="object-contain max-w-full"
                />
            </div>

            
       

    </section>

}
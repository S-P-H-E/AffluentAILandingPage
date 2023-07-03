import { useSpring, animated } from 'react-spring';
import { PiArrowBendLeftDownBold, PiChatFill } from "react-icons/pi"

export default function Chat(){
    const tryitAnimation = useSpring({
        from: { opacity: 0, transform: 'scale(0)'},
        to: { opacity: 1, transform: 'scale(1)'},
        delay: 1500,
    });

    return(
        <>
            <div className="fixed bottom-0 right-0 m-10 md:m-[100px] flex flex-col justify-end items-end z-10">
                <animated.div style={tryitAnimation} className="invisible md:visible md:w-[200px] flex flex-col justify-center items-center">
                    <h1 className="text-3xl font-medium mb-4">Try it out</h1>
                    <PiArrowBendLeftDownBold className=" scale-[200%] -rotate-45"/>
                </animated.div>
                <div className="bg-[var(--button)] text-black transition-all duration-300 hover:shadow-xl hover:scale-105 w-[50px] md:w-[100px] h-[50px] md:h-[100px] flex justify-center items-center rounded-full cursor-pointer">
                    <PiChatFill size={40} className="scale-50 md:scale-100"/>
                    {/* <Image src={Logo} className="w-[45px]"/> */}
                </div>
            </div>
        </>
    )
}
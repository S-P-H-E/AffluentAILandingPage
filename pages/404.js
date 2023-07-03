import Chat from "@/components/Chat";
import Image from "next/image";
import { PiArrowBendLeftDownBold } from "react-icons/pi"
import { useSpring, animated } from 'react-spring';
import Logo from "@/public/images/logo.svg"
import Logo2 from "@/public/images/logo.png"
import Head from "next/head";

export default function Fourofour(){
     // Animation
    const logoAnimation = useSpring({
        from: { opacity: 0, transform: 'translateY(130px)'},
        to: { opacity: 1, transform: 'translateY(0)'},
        delay: 1,
    });

    const buttonPlanAnimation = useSpring({
        from: { opacity: 0, transform: 'translateY(130px)'},
        to: { opacity: 1, transform: 'translateY(0)'},
        delay: 400,
    });

    const h1Animation = useSpring({
        from: { opacity: 0, transform: 'translateY(130px)'},
        to: { opacity: 1, transform: 'translateY(0)'},
        delay: 800,
    });

    const pAnimation = useSpring({
        from: { opacity: 0, transform: 'translateY(130px)'},
        to: { opacity: 1, transform: 'translateY(0)'},
        delay: 1000,
    });

    return(
        <>
            <Head>
                <title>404 not found</title>
                <meta name="description" content="Harnessing AI to improve your business, captivate and inspire." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Chat />
            <div className="flex flex-col justify-center items-center">
                <div className="w-full md:w-[1000px] p-7 flex justify-between items-center">
                    <div className="mask">  
                        <animated.div style={logoAnimation} className="flex justify-center items-center">
                        <Image src={Logo} alt="logo" width={30} className="cursor-pointer"/>
                        </animated.div>
                    </div>
                    <div className="mask">
                        <animated.button style={buttonPlanAnimation} className="bg-[var(--button)] px-4 py-2 rounded-xl font-medium">Go back home</animated.button>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center">
                <div className="mask">
                    <animated.h1 style={h1Animation} className="text-[25rem]">404</animated.h1>
                </div>
                <div className="mask p-1">
                    <animated.p style={pAnimation} className="text-4xl font-medium flex flex-col justify-center items-center">Got lost looking for something? Chat to our AI <span><Image width={50} src={Logo2}/></span></animated.p>
                </div>
            </div>
        </>
    )
}
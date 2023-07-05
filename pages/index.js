import Head from "next/head";
import Image from "next/image";
import Logo from "@/public/images/logo.svg"
import { BsArrowRightShort } from "react-icons/bs"
import { GoGraph } from "react-icons/go"
import { useSpring, animated } from 'react-spring';
import Offer from "@/components/Offer";
import Chat from "@/components/Chat";
import Plan from "@/components/Plan";
import Contact from "@/components/Contact";
import { useRef, useEffect } from "react";
import Script from 'next/script'

export default function Home() {

  const offerRef = useRef(null);
  const planRef = useRef(null);

  const scrollToOffer = () => {
    offerRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToPlan = () => {
    planRef.current.scrollIntoView({ behavior: 'smooth' });
  };

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

  // Hero
  const nameAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(130px)'},
    to: { opacity: 1, transform: 'translateY(0)'},
    delay: 600,
  });

  const h11Animation = useSpring({
    from: { opacity: 0, transform: 'translateY(130px)'},
    to: { opacity: 1, transform: 'translateY(0)'},
    delay: 800,
  });

  const h12Animation = useSpring({
    from: { opacity: 0, transform: 'translateY(130px)'},
    to: { opacity: 1, transform: 'translateY(0)'},
    delay: 1100,
  });

  const buttonAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(130px)'},
    to: { opacity: 1, transform: 'translateY(0)'},
    delay: 1300,
  });

  return (
    <>
      <Head>
        <title>Affluent AI</title>
        <meta name="description" content="Harnessing AI to improve your business, captivate and inspire." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Script src="https://cdn.botpress.cloud/webchat/v0/inject.js"></Script>
      <Script src="https://mediafiles.botpress.cloud/77c19103-88e3-46cf-b99b-c7e6754c3803/webchat/config.js" defer></Script>

      <div className="flex flex-col justify-center items-center">

        {/* Navbar */}
        <div className="w-full md:w-[1000px] p-7 flex justify-between items-center">
          <div className="mask">  
            <animated.div style={logoAnimation} className="flex justify-center items-center">
              <Image src={Logo} alt="logo" width={30} className="cursor-pointer"/>
            </animated.div>
          </div>
          <div className="mask">
            <animated.button style={buttonPlanAnimation} onClick={scrollToPlan} className="bg-[var(--button)] px-4 py-2 rounded-xl font-medium">Choose Your Plan</animated.button>
          </div>
          {/* <div className="flex gap-10">
            <div className="flex flex-col group">
              <button className="font-medium">About Us</button>
              <div className="bg-[var(--main)] h-[1px] transition-all scale-x-0 group-hover:scale-x-100"/>
            </div>
            <div className="flex flex-col group">
              <button className="font-medium">Our Services</button>
              <div className="bg-[var(--main)] h-[1px] transition-all scale-x-0 group-hover:scale-x-100"/>
            </div>
            <div className="flex flex-col group">
              <button className="font-medium">Get In Touch</button>
              <div className="bg-[var(--main)] h-[1px] transition-all scale-x-0 group-hover:scale-x-100"/>
            </div>
          </div> */}
        </div>

        {/* Hero */}
        <div className="flex flex-col justify-center items-center my-10 h-fit md:m-0 md:h-[85vh]">
          <div className="mask">
            <animated.div style={nameAnimation} className="border border-[#2C2F27] rounded-full px-4 py-1 flex justify-center items-center gap-1 mb-2">
              <Image src={Logo} alt="logo" className="w-[13px] md:w-[20px]"/>
              <h1 className="font-bold text-[13px] md:text-xl uppercase">Affluent AI</h1>
            </animated.div>
          </div>
          <div className="mask">
            <animated.h1 style={h11Animation} className="text-center uppercase font-bold text-5xl md:text-9xl">Unleash the</animated.h1>
          </div>
          <div className="mask">
            <animated.h1 style={h12Animation} className="text-center uppercase font-bold text-5xl md:text-9xl">power of AI</animated.h1>
          </div>
          <div className="mask">
            <animated.button style={buttonAnimation} onClick={scrollToOffer} className="group bg-[var(--button)] px-6 md:px-8 py-2 md:py-6 rounded-xl font-medium text-xl md:text-3xl m-10 flex justify-center items-center gap-2">
              Learn More
              <BsArrowRightShort size={40} className="transition-transform duration-300 group-hover:rotate-45"/>
            </animated.button>
          </div>
        </div>

        {/* What we offer */}
        <div ref={offerRef}>
          <Offer/>
        </div>

        {/* Choose your plan */}
        <div ref={planRef}>
          <Plan />
        </div>

        {/* Get in touch */}
        <div>
          <Contact />
        </div>

        {/* Footer */}
        <h1 className="font-medium uppercase m-5">©Affuent AI, 2023</h1>
      </div>
    </>
  )
}

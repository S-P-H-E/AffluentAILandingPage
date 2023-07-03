import { BsCheckCircle } from "react-icons/bs"
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

export default function Plan(){
    const [ref, inView] = useInView({
        triggerOnce: true, // Animation triggers only once when entering the viewport
    });
    
    const PlanAnimation = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(300px)',
    });

    //Card1
    const [ref1, inView1] = useInView({
        triggerOnce: true, // Animation triggers only once when entering the viewport
    });
    
    const Card1Animation = useSpring({
        opacity: inView1 ? 1 : 0,
        transform: inView1 ? 'perspective(1000px) rotateX(0deg)' : 'perspective(1000px) rotateX(40deg)',
        delay: 200,
    });

    //Card2
    const [ref2, inView2] = useInView({
        triggerOnce: true, // Animation triggers only once when entering the viewport
    });
    
    const Card2Animation = useSpring({
        opacity: inView2 ? 1 : 0,
        transform: inView2 ? 'perspective(1000px) rotateX(0deg)' : 'perspective(1000px) rotateX(45deg)',
        
    });

    //Card3
    const [ref3, inView3] = useInView({
        triggerOnce: true, // Animation triggers only once when entering the viewport
    });

    const Card3Animation = useSpring({
        opacity: inView3 ? 1 : 0,
        transform: inView3 ? 'perspective(1000px) rotateX(0deg)' : 'perspective(1000px) rotateX(45deg)',
        delay: 500,
        // Adjust the perspective value (1000px) and the rotation angle (0deg and -90deg) as per your requirement
    });

    return(
        <>
            <animated.div ref={ref} style={PlanAnimation} className="w-full md:w-[1000px] flex flex-col justify-center items-center">
                <h1 className="text-2xl md:text-5xl font-bold uppercase">Choose Your Plan</h1>
                <div className="m-12 flex flex-col md:flex-row gap-2">
                    <animated.div ref={ref1} style={Card1Animation}>
                        <div className="bg-[#181916] border border-[#D9DCD6] w-[350px] rounded-2xl p-10">
                            <div>
                                <h1 className="text-[#9EA098] font-medium text-xl">Basic</h1>
                            </div>
                            <div className="my-5 flex justify-start items-end gap-1">
                                <h1 className="text-[#E0E5D2] text-5xl font-bold">$50</h1>
                                <h2 className="text-[#6C6E68] font-medium">/month</h2>
                            </div>
                            <div>
                                <div className="flex justify-start items-center gap-2">
                                    <BsCheckCircle className="text-[#E0E5D2]"/>
                                    <h1 className="text-[#9EA098]">AI-powered chatbot</h1>
                                </div>
                                <div className="flex justify-start items-center gap-2 my-4">
                                    <BsCheckCircle className="text-[#E0E5D2]"/>
                                    <h1 className="text-[#9EA098]">500 interactions per month</h1>
                                </div>
                            </div>
                            <button className="bg-[#565E45] text-[#DCE0CD] px-4 py-2 rounded-xl font-medium mt-7">Get Started</button>
                        </div>
                    </animated.div>
                    <animated.div ref={ref2} style={Card2Animation}>
                        <div className="bg-[#181916] border border-[#D9DCD6] w-[350px] rounded-2xl p-10">
                            <div>
                                <h1 className="text-[#A0D03A] bg-[#2E3C11] px-3 py-1 w-fit rounded-full font-medium text-xl">Premium</h1>
                            </div>
                            <div className="my-5 flex justify-start items-end gap-1">
                                <h1 className="text-[#E0E5D2] text-5xl font-bold">$899</h1>
                                <h2 className="text-[#6C6E68] font-medium">/month</h2>
                            </div>
                            <div>
                                <div className="flex justify-start items-center gap-2">
                                    <BsCheckCircle className="text-[#E0E5D2]"/>
                                    <h1 className="text-[#9EA098]">AI-powered chatbot</h1>
                                </div>
                                <div className="flex justify-start items-center gap-2 my-4">
                                    <BsCheckCircle className="text-[#E0E5D2]"/>
                                    <h1 className="text-[#9EA098]">20,000 interactions per month</h1>
                                </div>
                                <div className="flex justify-start items-center gap-2">
                                    <BsCheckCircle className="text-[#E0E5D2]"/>
                                    <h1 className="text-[#9EA098]">24/7 Support</h1>
                                </div>
                            </div>
                            <button className="bg-[var(--button)] px-4 py-2 rounded-xl font-medium mt-7">Get Started</button>
                        </div>
                    </animated.div>
                    <animated.div ref={ref3} style={Card3Animation}>
                        <div className="bg-[#181916] border border-[#D9DCD6] w-[350px] rounded-2xl p-10">
                            <div>
                                <h1 className="text-[#9EA098] font-medium text-xl">Standard</h1>
                            </div>
                            <div className="my-5 flex justify-start items-end gap-1">
                                <h1 className="text-[#E0E5D2] text-5xl font-bold">$399</h1>
                                <h2 className="text-[#6C6E68] font-medium">/month</h2>
                            </div>
                            <div>
                                <div className="flex justify-start items-center gap-2">
                                    <BsCheckCircle className="text-[#E0E5D2]"/>
                                    <h1 className="text-[#9EA098]">AI-powered chatbot</h1>
                                </div>
                                <div className="flex justify-start items-center gap-2 my-4">
                                    <BsCheckCircle className="text-[#E0E5D2]"/>
                                    <h1 className="text-[#9EA098]">1,000 interactions per month</h1>
                                </div>
                            </div>
                            <button className="bg-[#565E45] text-[#DCE0CD]  px-4 py-2 rounded-xl font-medium mt-7">Get Started</button>
                        </div>
                    </animated.div>
                </div>
            </animated.div>
        </>
    )
}
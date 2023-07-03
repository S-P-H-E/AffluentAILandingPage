import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

export default function Offer(){
    //Main
    const [ref, inView] = useInView({
        triggerOnce: true, // Animation triggers only once when entering the viewport
    });
    
    const AboutUsAnimation = useSpring({
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
        config: {
            opacity: inView1 ? 1 : 0,
            duration: 500, // Adjust the duration as per your preference
        },
    });

    //Card2
    const [ref2, inView2] = useInView({
        triggerOnce: true, // Animation triggers only once when entering the viewport
    });
    
    const Card2Animation = useSpring({
        opacity: inView2 ? 1 : 0,
        transform: inView2 ? 'perspective(1000px) rotateX(0deg)' : 'perspective(1000px) rotateX(40deg)',
        config: {
            opacity: inView2 ? 1 : 0,
            duration: 500, // Adjust the duration as per your preference
        },
        delay: 200,
    });

    //Card3
    const [ref3, inView3] = useInView({
        triggerOnce: true, // Animation triggers only once when entering the viewport
    });

    const Card3Animation = useSpring({
        opacity: inView3 ? 1 : 0,
        transform: inView3 ? 'perspective(1000px) rotateX(0deg)' : 'perspective(1000px) rotateX(45deg)',
        // Adjust the perspective value (1000px) and the rotation angle (0deg and -90deg) as per your requirement
    });




    return(
        <>
            <animated.div ref={ref} style={AboutUsAnimation} className="w-full p-5 md:p-0 md:w-[1000px] flex flex-col justify-center items-center md:m-24">
                <h1 className="text-2xl md:text-5xl font-bold uppercase">What we offer</h1>
                <div className="mt-10 mb-3 flex flex-col md:flex-row gap-3">
                    <animated.div ref={ref1} style={Card1Animation} className="text-2xl bg-white border border-[#D9DCD6] rounded-3xl p-10 font-semibold flex flex-col gap-10 h-[500px] w-full">
                        <h1 className="text-[#A5A79F]">Hassle-free</h1>
                        <p>We specialize in automating business support systems by offering a custom AI Chatbot as an assitant. We'll take the pressure off you and let the AI handle the rest.</p>
                    </animated.div>
                    <animated.div ref={ref2} style={Card2Animation} className="text-2xl bg-white border border-[#D9DCD6] rounded-3xl p-10 font-medium flex flex-col gap-10 h-[500px] w-full">
                        <h1 className="text-[#A5A79F]">Cost Effective</h1>
                        <p>By implementing automation, you can minimize expenses and increase your bottom line through a reduction in manual labor requirements.</p>
                    </animated.div>
                </div>
                <div className="mb-10 flex gap-3">
                    <animated.div ref={ref3} style={Card3Animation} className="text-2xl bg-white border border-[#D9DCD6] rounded-3xl p-10 font-semibold flex flex-col gap-10 h-[500px] w-full">
                        <h1 className="text-[#A5A79F]">Scalability</h1>
                        <p>We have developed scalable solutions that seamlessly adapt to your business, allowing for future growth and expansion.</p>
                    </animated.div>
                </div>
            </animated.div>
        </>
    )
}
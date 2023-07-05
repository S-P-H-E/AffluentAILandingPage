import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true, // Animation triggers only once when entering the viewport
  });

  const ContactAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'scale(1)' : 'scale(0)',
  });

  const handleBookCall = () => {
    window.open('https://calendly.com/contactaffluentai/discovery?back=1&month=2023-07', '_blank');
  };

  return (
    <>
      <animated.div ref={ref} style={ContactAnimation} className="md:m-24 flex flex-col justify-center items-center">
        <h1 className="text-2xl md:text-5xl font-bold uppercase">Get In Contact</h1>
        <button className="bg-[var(--button)] px-6 py-3 rounded-xl font-medium m-2 md:mt-7" onClick={handleBookCall}>
          Book a call
        </button>
      </animated.div>
    </>
  );
}

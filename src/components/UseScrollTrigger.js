import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";



function UseScrollTrigger(ref) {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.from(ref.current, {
      opacity: 0,
      duration: 2,
      ease: "easeInOut",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
        once: false,
        onEnter: () => {
          gsap.to(ref.current, {
            opacity: 1,
            duration: 2,
          });
        },
        onLeaveBack: () => {
          gsap.to(ref.current, {
            opacity: 0,
            duration: 2,
          });
        },
      },
    });
  }, );
}

export default UseScrollTrigger;

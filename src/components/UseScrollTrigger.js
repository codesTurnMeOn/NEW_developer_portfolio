import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function UseScrollTrigger(ref) {
  gsap.registerPlugin(ScrollTrigger);

  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    // 创建 IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // 当目标元素进入视窗时
          if (entry.isIntersecting) {
            // set trigger opposite 
            setTrigger(!trigger);
          }
        });
      },
      { threshold: 0.3} // 定义元素可见的阈值
    );

    // 开始观察目标元素
    if (ref.current) {
      observer.observe(ref.current);
    }

    // return () => {
    //   // 在组件卸载时停止观察
    //   if (ref.current) {
    //     observer.unobserve(ref.current);
    //   }
    // };
  }, [ref.current]); //reset trigger when different component mount

  useEffect(() => {
    gsap.from(ref.current, {
      opacity: 0,
      duration: 1,
      ease: "easeInOut",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 90%",
        end: "bottom 30%",
        toggleActions: "play none none reverse",
        once: false,
        onEnter: () => {
          gsap.to(ref.current, {
            opacity: 1,
            duration: 1,
          });
        },
        onLeaveBack: () => {
          gsap.to(ref.current, {
            opacity: 0,
            duration: 1,
          });
        },
      },
    });
  }, [trigger]);

  console.log("trigger is", trigger);
}

export default UseScrollTrigger;

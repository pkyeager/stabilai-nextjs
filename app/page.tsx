"use client";
import React, { useRef, useEffect, useState } from "react";
import {
  motion,
  useAnimation,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimatedCursor from "react-animated-cursor";
import Hero from "@/components/hero";
import Intro from "@/components/intro";
import Features from "@/components/features";
import Faq from "@/components/faq";

const Section = ({ children }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
        hidden: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } },
      }}
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);
  const background = useTransform(
    scrollYProgress,
    [0, 1],
    ["rgba(255,255,255)", "rgba(156,39,176)"]
  );

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return <div>Loading....</div>;
  }

  return (
    <div className="flex-1 w-full h-full">
      <AnimatedCursor color="156,39,176" />
      <motion.div
        style={{
          scaleX,
          transformOrigin: "left",
          background,
          position: "sticky",
          top: 0,
          width: "100%",
          height: "20px",
          boxShadow: "0 0 20px rgba(156,39,176,0.8)",
          borderRadius: "10px",
        }}
      />
      <Section>
        <Hero />
      </Section>
      <Section>
        <Intro />
      </Section>
      <Section>
        <Features />
      </Section>
      <Section>
        <Faq />
      </Section>
    </div>
  );
}

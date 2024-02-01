"use client";
import React from "react";
import {
  motion,
  useAnimation,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import AnimatedCursor from "react-animated-cursor";
import Hero from "@/components/hero";
import Intro from "@/components/intro";
import Features from "@/components/features";
import Faq from "@/components/faq";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);
  const background = useTransform(
    scrollYProgress,
    [0, 1],
    ["rgba(255,255,255)", "rgba(156,39,176)"]
  );
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  useEffect(() => {
    setTimeout(() => {
      3000;
      setIsLoading(false);
    });
    // window.onload = () => {
    //   setIsLoading(false);
    // };
  }, []);

  if (isLoading) {
    return <div>Loading....</div>;
  }

  return (
    <div className="flex-1  gap-2 h-[850] w-full">
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
      <Hero />
      <Intro />
      <Features />
      <Faq />
    </div>
  );
}

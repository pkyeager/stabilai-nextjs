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
import Header from "@/components/header";

export default function Home() {
  return (
    <div className="flex-1 w-full h-full">
      <Header />
      <Hero />
      <Features />
      <Faq />
    </div>
  );
}

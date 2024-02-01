"use client";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import {
  Button,
  Image,
  Card,
  CardHeader,
  Divider,
  CardBody,
  Accordion,
  AccordionItem,
} from "@nextui-org/react";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import {
  motion,
  useAnimation,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Application } from "@splinetool/runtime";
import Spline from "@splinetool/react-spline";
import AnimatedCursor from "react-animated-cursor";

export default function Hero() {
  return (
    <div className="h-screen relative flex-col flex">
      <Spline
        className="w-full h-1/2 align-top top-[600px]"
        scene="https://prod.spline.design/AYItJrbMLHQRViW0/scene.splinecode"
      />
      <TypeAnimation
        className="text-6xl text-center font-bold shadow-2xl"
        cursor={false}
        sequence={[
          "Welcome to the future of strength training.",
          250,
          "Welcome to stabil.ai",
          250,
        ]}
        wrapper="span"
        speed={50}
        style={{ color: "text-gradient" }}
        repeat={Infinity}
      />
    </div>
  );
}

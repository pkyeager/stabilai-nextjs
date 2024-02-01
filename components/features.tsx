"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Spline from "@splinetool/react-spline";
import { title, subtitle } from "@/components/primitives";

const Section = ({ children }: { children: React.ReactNode }) => {
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
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
        hidden: { opacity: 0, scale: 0.8, transition: { duration: 0.5 } },
      }}
    >
      {children}
    </motion.div>
  );
};

export default function Features() {
  return (
    <div className="flex  mt-4 flex-col">
      <Section>
        <div className="flex items-center h-screen ">
          <Spline scene="https://prod.spline.design/FIu9ekKNtvMrUQ9z/scene.splinecode" />
          <div className="flex-row w-1/2">
            <h2 className={title()}>AI Powered 🤖</h2>
            <p className={subtitle()}>
              Unlock your potential with AI-driven training now.
            </p>
            <p className={subtitle()}>
              Using your biometric data, we create customized workout plans
              aligned with your goals.
            </p>
            <p className={subtitle()}>
              Our intelligent algorithms adjust weights, reps, and intensity for
              peak performance.
            </p>
            <p className={subtitle()}>
              You shape your journey by pinpointing focus areas and weak spots.
            </p>
            <p className={subtitle()}>
              With our intuitive AI system, every lift isnt just a movement— its
              a deliberate action driving you closer to your fitness
              aspirations.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="flex mt-4 items-center h-screen">
          <div className="w-1/2 mr-4">
            <h2 className={title()}>Responsive AI Assistant ⚡</h2>
            <div className="">
              <p className={subtitle()}>
                Experience the power of our AI performance system, transforming
                your workouts like never before.
              </p>
              <p className={subtitle()}>
                Daily, we calculate your athlete score, fine-tuning your regimen
                for optimal progress.
              </p>
              <p className={subtitle()}>
                Our AI dynamically adjusts weights and recalibrates based on
                your feedback, ensuring every session is effective.
              </p>
              <p className={subtitle()}>
                Prepare for a surge of performance enhancement as you surpass
                your limits and unlock your potential.
              </p>
              <p className={subtitle()}>
                It is more than a workout; it is about unleashing your inner
                beast and reaching new strength levels.
              </p>
              <p className={subtitle()}>
                Welcome to the future of fitness, where every rep propels you
                towards greatness.
              </p>
            </div>
          </div>
          <Spline scene="https://prod.spline.design/FIu9ekKNtvMrUQ9z/scene.splinecode" />
        </div>
      </Section>
    </div>
  );
}

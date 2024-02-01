"use client";
import { title, subtitle } from "@/components/primitives";
import React from "react";
import Spline from "@splinetool/react-spline";

export default function Features() {
  return (
    <div className="flex  mt-4 flex-col">
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
            With our intuitive AI system, every lift isnt just a movement— its a
            deliberate action driving you closer to your fitness aspirations.
          </p>
        </div>
      </div>

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
              Our AI dynamically adjusts weights and recalibrates based on your
              feedback, ensuring every session is effective.
            </p>
            <p className={subtitle()}>
              Prepare for a surge of performance enhancement as you surpass your
              limits and unlock your potential.
            </p>
            <p className={subtitle()}>
              It is more than a workout; it is about unleashing your inner beast
              and reaching new strength levels.
            </p>
            <p className={subtitle()}>
              Welcome to the future of fitness, where every rep propels you
              towards greatness.
            </p>
          </div>
        </div>
        {/* <Image
    isZoomed
    className="rounded-lg shadow-xl mt-24"
    width={400}
    src="https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?q=80&w=967&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    alt="This is an image of the dashboard"
  /> */}
        <Spline scene="https://prod.spline.design/FIu9ekKNtvMrUQ9z/scene.splinecode" />
      </div>
    </div>
  );
}

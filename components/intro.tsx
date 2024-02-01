"use client";
import { title, subtitle } from "@/components/primitives";
import { Button, Image, colorVariants } from "@nextui-org/react";
import React from "react";
import Spline from "@splinetool/react-spline";

export default function Intro() {
  return (
    //   {/* <div className="flex h-screen w-full"> */}
    //   {/* <Spline scene="https://prod.spline.design/9hvYOC9fXh5J1ogG/scene.splinecode" /> */}
    //   {/* </div> */}
    <div className="flex h-screen items-center">
      <div className="flex-col justify-center gap-4 py-8 w-2/3">
        <div className="inline-block text-left">
        <h1 className={`${title()} whitespace-nowrap`}>Bye Cookie Cutter Plans🍪</h1>
        </div>
        <div className="inline-block text-left">
          <h1 className={title()}>Hello Personal&nbsp;</h1>
          <h1 className={title({ color: "violet" })}>AI Coach</h1>
        </div>

        <div className="inline-block text-left">
          <h2 className={subtitle({ class: "mt-4" })}>
            Unlock your strength potential with our AI-powered training plans.
            Get personalized workouts designed to help you build muscle and get
            stronger, powered by cutting-edge technology.
          </h2>
        </div>
        <Button color="secondary" variant="shadow">
          Download Now
        </Button>
        <h2 className={subtitle({ class: "mt-4" })}>
          This project is a collaborative effort among a group of driven and
          talented students from
        </h2>
        <div className="flex gap-4">
          <Image
            isZoomed
            className="rounded-lg shadow-xl"
            width={120}
            src="https://images.unsplash.com/photo-1611262588024-d12430b98920?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="SDU logo"
          />
          <Image
            isZoomed
            className="rounded-lg shadow-xl"
            width={120}
            src="https://images.unsplash.com/photo-1611262588024-d12430b98920?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="TH Lübeck Logo"
          />
        </div>
      </div>
      <Spline
        className="w-1/2"
        scene="https://prod.spline.design/FIu9ekKNtvMrUQ9z/scene.splinecode"
      />
      {/* <Image
            isZoomed
            className="rounded-lg shadow-xl flex"
            width={1200}
            src="https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?q=80&w=967&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="This is an image of the dashboard"
          /> */}
    </div>
  );
}

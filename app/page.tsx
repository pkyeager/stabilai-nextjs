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
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Application } from "@splinetool/runtime";
import Spline from "@splinetool/react-spline";

export default function Home() {
  const phone1Img = "/assets/images/phone1.png"; // not used now buggy
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="flex-1 flex-col gap-2 h-[850]">
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={{
          visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
          hidden: { opacity: 0, scale: 0.9 },
        }}
      >
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
        <div className="flex h-screen w-full">
        <Spline scene="https://prod.spline.design/9hvYOC9fXh5J1ogG/scene.splinecode" />
        </div>
        <div className="flex h-screen items-center">
          <div className="flex-col justify-center gap-4 py-8 w-1/2">
            <div className="inline-block text-left">
              <h1 className={title()}>Bye Cookie Cutter</h1>
            </div>
            <div className="inline-block text-left">
              <h1 className={title()}>Hello Personal&nbsp;</h1>
              <h1 className={title({ color: "violet" })}>AI Coach</h1>
            </div>

            <div className="inline-block text-left">
              <h2 className={subtitle({ class: "mt-4" })}>
                Unlock your strength potential with our AI-powered training
                plans. Get personalized workouts designed to help you build
                muscle and get stronger, powered by cutting-edge technology.
              </h2>
            </div>
            <Button color="secondary" variant="shadow">
              Download
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
        {/* Scale and replace this later */}
        {/* <div className="flex justify-between space-x-4 ">
        <Card isHoverable>
          <CardHeader className="">
            <div className="">
              <p className="text-lg font-semibold gap-x-10 mx-auto">
                Personalized 🛠️
              </p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p className="text-sm text-white">
              Your path, your way. Tailored workouts sculpted to your goals,
              preferences, and progress, ensuring every lift brings you closer
              to lifting goals.
            </p>
          </CardBody>
        </Card>
        <Card isHoverable>
          <CardHeader>
            <div className="text-center">
              <p className="text-lg font-semibold">Responsive ⚡️</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p className="text-sm text-white">
              Adapting to you, powered by AI. Experience a platform that evolves
              with your progress and feedback, guided by advanced algorithms to
              ensure every interaction is personalized and impactful
            </p>
          </CardBody>
        </Card>
        <Card isHoverable>
          <CardHeader>
            <div>
              <p className="text-lg font-semibold">Passion 🌟</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p className="text-sm text-white">
              Born from the passion of committed lifters, our app is a heartfelt
              endeavour designed to ignite your love for lifting and drive you
              towards greatness.
            </p>
          </CardBody>
        </Card>
      </div> */}
        <div className="flex justify-between mt-4 items-center h-screen">
          {/* <Image
            isZoomed
            className="rounded-lg shadow-xl"
            width={400}
            src="https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?q=80&w=967&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="This is an image of the dashboard"
          /> */}
          <Spline scene="https://prod.spline.design/FIu9ekKNtvMrUQ9z/scene.splinecode" />
          <div className="w-1/2 ml-4 item-center">
            <h2 className={title()}>
              AI-Powered Personalized Training Plans 🤖
            </h2>
            <div className="flex-col flex">
              <p className={subtitle()}>
                Unlock your potential with AI-driven training now.
              </p>
              <p className={subtitle()}>
                Using your biometric data, we create customized workout plans
                aligned with your goals.
              </p>
              <p className={subtitle()}>
                Our intelligent algorithms adjust weights, reps, and intensity
                for peak performance.
              </p>
              <p className={subtitle()}>
                You shape your journey by pinpointing focus areas and weak
                spots.
              </p>
              <p className={subtitle()}>
                With our intuitive AI system, every lift isnt just a movement—
                its a deliberate action driving you closer to your fitness
                aspirations.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-4 items-center h-screen">
          <div className="w-1/2 mr-4">
            <h2 className={title()}>
              Unleash Your Potential with Adaptive AI Performance ⚡
            </h2>
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
          {/* <Image
            isZoomed
            className="rounded-lg shadow-xl mt-24"
            width={400}
            src="https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?q=80&w=967&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="This is an image of the dashboard"
          /> */}
          <Spline scene="https://prod.spline.design/FIu9ekKNtvMrUQ9z/scene.splinecode" />
        </div>
        <div className="h-screen justify-center  my-auto flex flex-col space-y-4">
          <h2 className={title({ class: "mt-4 text-left" })}>
            Frequently Asked Questions
          </h2>
          <p className={subtitle({ class: "mt-2" })}>
            Here are some common questions from our community. If you have any
            more inquiries, suggestions, or feedback, we would love to hear from
            you! Feel free to reach out anytime:{" "}
            <a href="mailto:support@stabil.ai" className="gradient-text">
              support@stabil.ai
            </a>
          </p>

          <div className="mt-4 flex w-full">
            <Accordion selectionMode="single">
              <AccordionItem
                key="1"
                aria-label="Accordion 1"
                title="Is the app free?"
              >
                Yes, our app is completely free to download and use! Enjoy all
                the features and benefits without any cost.
              </AccordionItem>
              <AccordionItem
                key="2"
                aria-label="Accordion 2"
                title="Is this app suitable for beginners?"
              >
                Absolutely! Our user-friendly interface and beginner-friendly
                workouts make it perfect for those new to fitness. Get started
                on your journey hassle-free!
              </AccordionItem>
              <AccordionItem
                key="3"
                aria-label="Accordion 3"
                title="What sets this app apart from other fitness apps on the market?"
              >
                We stand out with our commitment to providing a premium
                experience at no cost. Enjoy personalized plans, advanced
                features, and a supportive community—all for free!
              </AccordionItem>
              <AccordionItem
                key="4"
                aria-label="Accordion 4"
                title="Can I track my progress and see how I'm improving over time?"
              >
                Of course! Our app includes comprehensive progress tracking
                features, allowing you to monitor your performance and see your
                improvements over time. Stay motivated with tangible results!
              </AccordionItem>
              <AccordionItem
                key="5"
                aria-label="Accordion 5"
                title="Can I interact with other users or receive support from a community?"
              >
                Absolutely! Connect with other users, share experiences, and
                receive support from our vibrant community—all within our free
                app. It is fitness, friendship, and fun, all in one place!
              </AccordionItem>
            </Accordion>
          </div>
          <div className="justify-center items-center mt-4">
            <h2 className="gradient-text text-4xl text-center">
              Ready to get started?
            </h2>
            <div className="flex justify-center items-center mt-4 space-x-5">
              <a
                href="https://apps.apple.com/your-app-url"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=your-app-id"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Get it on Google Play"
                />
              </a>
            </div>
          </div>
        </div>

        <style jsx>{`
          .glow {
            box-shadow: 0 0 10px #9c27b0, 0 0 20px #9c27b0, 0 0 30px #9c27b0,
              0 0 40px #9c27b0;
          }
          .gradient-text {
            background: linear-gradient(to right, violet, blue);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        `}</style>
      </motion.div>
    </div>
  );
}

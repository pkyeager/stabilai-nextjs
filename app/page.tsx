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

export default function Home() {
  const phone1Img = "/assets/images/phone1.png"; // not used now buggy
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  return (
    <div className="flex flex-col gap-2">
      <h2 className={title({ class: "mt-4" })}>
        stabil<span className={title({ color: "violet" })}>.ai</span>
      </h2>
      <div className="flex gap-3">
        <div className="flex-col justify-center gap-4 py-8 md:py-10">
          <div className="inline-block text-left">
            <h1 className={title({ class: "text-center" })}>
              Bye Cookie Cutters 🍪
            </h1>
          </div>

          <div className="inline-block text-left">
            <h1 className={title()}>Hello Personal&nbsp;</h1>
            <h1 className={title({ color: "violet" })}>AI Coach</h1>
            <h1 className={title()}>&nbsp;💪</h1>
          </div>

          <div className="inline-block text-left">
            <h2 className={subtitle({ class: "mt-4" })}>
              Unlock your strength potential with our AI-powered training plans.
              Get personalized workouts designed to help you build muscle and
              get stronger, powered by cutting-edge technology.
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
              width={80}
              src="https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg"
              alt="SDU logo"
            />
            <Image
              isZoomed
              className="rounded-lg shadow-xl"
              width={80}
              src="https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg"
              alt="TH Lübeck Logo"
            />
          </div>
        </div>
        {/* Scale and replace this later */}
        <Image
          isZoomed
          className="rounded-lg shadow-xl"
          width={1600}
          src="https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg"
          alt="This is an image of the dashboard"
        />
      </div>
      <div className="flex justify-between space-x-4">
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
      </div>
      <div className="flex justify-between mt-4">
        <Image
          isZoomed
          className="rounded-lg shadow-xl w-1/2"
          src="https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg"
          alt="Image description"
        />
        <div className="w-1/2 ml-4">
          <h2 className={title()}>Title</h2>
          <p className={subtitle()}>This is some text.</p>
        </div>
      </div>

      <div className="flex justify-between mt-4">
        <div className="w-1/2 mr-4">
          <h2 className={title()}>Title</h2>
          <p className={subtitle()}>This is some text.</p>
        </div>
        <Image
          isZoomed
          className="rounded-lg shadow-xl w-1/2"
          src="https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg"
          alt="Image description"
        />
      </div>
      <h2 className={title({ class: "mt-4" })}>Frequently Asked Questions</h2>
      <p className={subtitle({ class: "mt-2" })}>
        Here are some common questions about our App.
      </p>

      <div className="mt-4">
        <h2 className={subtitle()}>Ready to get started?</h2>
        <Accordion selectionMode="multiple">
          <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
            {defaultContent}
          </AccordionItem>
          <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
            {defaultContent}
          </AccordionItem>
          <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
            {defaultContent}
          </AccordionItem>
        </Accordion>
        <div className="flex gap-2 mt-2">
          <Button color="primary" variant="shadow">
            App Store Icon
          </Button>
          <Button color="secondary" variant="shadow">
            Google Play Icon
          </Button>
        </div>
      </div>
    </div>
  );
}

"use client";
import React from "react";
import Hero from "@/components/hero";
import Features from "@/components/features";
import Faq from "@/components/faq";
import Header from "@/components/header";
import Credits from "@/components/credits";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="flex-1 w-full">
      <Header />
      <Hero />
      <Features />
      <Credits />
      <Faq />
      <Footer />
    </div>
  );
}

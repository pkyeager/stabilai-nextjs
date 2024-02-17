/* eslint-disable @next/next/no-img-element */
// pages/legal-notice.tsx
import React from "react";
import Link from "next/link";
import Footer from "@/components/footer";
import Header from "@/components/header";

const LegalNotice: React.FC = () => {
  return (
    <div className="bg-zinc-900 text-white flex flex-col items-center justify-center h-screen w-screen fixed top-0 left-0">
      {/* <Header /> */}
      <Link href="/" className="flex items-center justify-center w-full">
        <h2 className="text-2xl font-bold mb-8 self-center sm:self-start sm:text-left">
          stabil.ai
        </h2>
      </Link>
      <p className="text-2xl font-bold mb-8 self-center sm:self-start sm:text-left">
        stabil.ai is a product of{" "}
        <a
          href="http://www.yeager.gmbh"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Yeager GmbH
        </a>
      </p>
      <h1>Legal Notice</h1>
      <h2>Information pursuant to Sect. 5 German Telemedia Act (TMG)</h2>
      <p className="mb-4">
        Yeager GmbH
        <br />
        Wandsbeker Chaussee 91
        <br />
        22089 Hamburg
      </p>

      <p className="mb-4">
        Commercial Register: HRB 178135
        <br />
        Registration court: Amtsgericht Hamburg
      </p>

      <p className="mb-4">
        <strong>Represented by:</strong>
        <br />
        Yuan-Yan Kevin Got
        <br />
        Phongsakon Mark Konrad
      </p>

      <h2>Contact</h2>
      <p className="mb-4">
        Phone: +45 1511 7629322
        <br />
        E-mail: management@yeager.gmbh
      </p>

      <h2>EU dispute resolution</h2>
      <p className="mb-4">
        The European Commission provides a platform for online dispute
        resolution (ODR):{" "}
        <a
          href="https://ec.europa.eu/consumers/odr/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          https://ec.europa.eu/consumers/odr/
        </a>
        .<br /> Our e-mail address can be found above in the site notice.
      </p>

      <h2>
        Dispute resolution proceedings in front of a consumer arbitration board
      </h2>
      <p>
        We are not willing or obliged to participate in dispute resolution
        proceedings in front of a consumer arbitration board.
      </p>
      {/* <Footer /> */}
    </div>
  );
};

export default LegalNotice;

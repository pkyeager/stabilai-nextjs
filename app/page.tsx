import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import {Image} from "@nextui-org/react";

export default function Home() {
  return (
    <section className="flex flex-col justify-center gap-4 py-8 md:py-10">
      <h2 className={title({ class: "mt-4" })}> 
        stabil<span className={title({ color: "violet" })}>.ai</span>
      </h2>
      <div className="flex justify-between items-center">
        <div className="inline-block text-left">
          <h1 className={title({ class: "text-center" })}>
            Bye Cookie Cutters 🍪
          </h1>
        </div>
      </div>

      <div className="inline-block text-left">
        <h1 className={title()}>Hello Personal&nbsp;</h1>
        <h1 className={title({ color: "violet" })}>AI Coach</h1>
        <h1 className={title()}>&nbsp;💪</h1>
      </div>

      <div className="inline-block text-left">
        <h2 className={subtitle({ class: "mt-4" })}>
          Unlock your strength potential with our AI-powered training plans. Get
          personalized workouts designed to help you build muscle and get
          stronger, powered by cutting-edge technology.
        </h2>
      </div>
      <div className="flex gap-3">
        <Link
          isExternal
          href={siteConfig.links.docs}
          className={buttonStyles({
            color: "secondary",
            radius: "full",
            variant: "shadow",
          })}
        >
          Download
        </Link>
      </div>
    </section>
  );
}
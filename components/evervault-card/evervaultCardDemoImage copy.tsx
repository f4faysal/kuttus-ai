"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

export function EvervaultCardDemoImageChat() {
  const [loaded, setLoaded] = useState(false);
  return (
    <section className="flex justify-end w-full py-20 container mx-auto items-center " id="documentation" >
      <div className=" w-3/5 flex items-center justify-center">
        {/* <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm  p-4 relative h-[30rem]">
          <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
          <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
          <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
          <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

          <EvervaultCard text="Conversations" />

          <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
            Conversational AI
          </p>
        </div> */}
        <div className="h-3/4 w-3/4">
          <Image
            src="/text-to-image.png"
            height="500"
            width="500"
            onLoad={() => setLoaded(true)}
            className={cn(
              "object-cover inset-0 h-full w-full transition duration-200",
              loaded ? "blur-none" : "blur-md"
            )}
            alt="thumbnail"
          />
        </div>
      </div>
      <div className="w-[40%]">
        <h2 className="text-black text-xl">
          <span className="inline-flex h-12 animate-shimmer items-center justify-center rounded-lg  bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            AI Creation
          </span>
        </h2>
        <h1 className="text-4xl py-5 leading-10">
          Where Your Imagination Meets Efficiency
        </h1>
        <p className="pb-5 text-muted-foreground leading-loose">
          This isn&apost just a tool; it&aposs your creative partner. With an
          intuitive array of templates, DaffThink turns complex tasks into
          simple, elegant processes. Whether you&aposre drafting a paper,
          designing a presentation, or optimizing your resume, DaffThink
          transforms these tasks into seamless experiences. It&aposs not about
          the templates; it&aposs about you. Your unique ideas, powered by
          DaffThink, create something extraordinary. Embrace the future of
          creativity – simple, powerful, uniquely yours.
        </p>

        <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          Try DaffThink
        </button>
      </div>
    </section>
  );
}

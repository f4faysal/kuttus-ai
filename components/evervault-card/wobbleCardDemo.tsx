"use client";
import Image from "next/image";
import { WobbleCard } from "../ui/wobble-card";

export function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Gippity AI powers the entire universe
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            Leverage our cutting-edge AI tools to create and manage diverse
          </p>
        </div>
        <Image
          src="/linear.webp"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Secure Authentication
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          Enjoy secure access with Clerk, supporting email, Google, and over 9
          social logins for seamless and safe user authentication.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            The Ultimate Homework Companion
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            Say hello to stress-free homework sessions with PopAi! it's your
            personalized academic ally. Imagine uploading a PDF, and DaffThink
            instantly helps answer any questions about its content. You can also
            upload a learning document, DaffThink will assist in crafting
            well-informed, articulate articles based on that material.
          </p>
        </div>
        <Image
          src="/linear.png"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-2 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
        />
      
      </WobbleCard>
    </div>
  );
}

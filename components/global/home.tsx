"use client";
import { CardBody, CardContainer, CardItem } from "@/components/global/3d-card";
import { ContainerScroll } from "@/components/global/container-scroll-animation";
import { LampComponent } from "@/components/global/lamp";
import Navbar from "@/components/global/navbar";
import { Button } from "@/components/ui/button";
import { useAuth } from "@clerk/nextjs";
import { motion } from "framer-motion";
import { CheckIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BackgroundGradientAnimationDemo } from "../evervault-card/backgroundGradientAnimationDemo";
import { CanvasRevealEffectDemo } from "../evervault-card/canvasRevealEffectDemo";
import { EvervaultCardDemo } from "../evervault-card/evervaultCardDemo";
import { EvervaultCardDemoImage } from "../evervault-card/evervaultCardDemoImage";
import { EvervaultCardDemoImageChat } from "../evervault-card/evervaultCardDemoImage copy";
import { WobbleCardDemo } from "../evervault-card/wobbleCardDemo";
import { AuroraBackgroundDemo } from "./aurora-background";
import { GoogleGeminiEffectDemo } from "./google-gemini-effect";
import Welcome from "./welcome";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const { isSignedIn } = useAuth();

  useEffect(() => {
    // Simulate loading time
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 7000);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      {isLoading && !isSignedIn ? (
        <Welcome />
      ) : (
        <motion.main
          initial={{ opacity: 0 }} // Initial state (hidden)
          animate={{ opacity: 1 }} // Animate to visible
          transition={{ duration: 0.9 }}
          className="flex items-center justify-center flex-col "
        >
          <Navbar />

          <AuroraBackgroundDemo />

          <section className="w-full bg-neutral-950 rounded-md  !overflow-visible relative flex flex-col items-center  antialiased">
            <div className="absolute inset-0  h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_35%,#223_100%)]"></div>
            <div className="flex flex-col mt-[-100px] md:mt-[-50px]">
              <ContainerScroll
                titleComponent={
                  <div className="flex items-center flex-col">
                    <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
                      <Button
                        size={"lg"}
                        className="p-8 mb-8 md:mb-0 text-2xl w-full sm:w-fit border-t-2 rounded-full border-[#4D4D4D] bg-[#1F1F1F] hover:bg-white group transition-all flex items-center justify-center gap-4 hover:shadow-xl hover:shadow-neutral-500 duration-500"
                      >
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 to-neutral-600  md:text-center font-sans group-hover:bg-gradient-to-r group-hover:from-black goup-hover:to-black">
                          Get Started for free
                        </span>
                      </Button>
                    </Link>
                    <h1 className="text-5xl md:text-8xl  bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-sans font-bold">
                      Enhance Your Try with DaffThink
                    </h1>
                  </div>
                }
              />
            </div>
          </section>

          <GoogleGeminiEffectDemo />

          <EvervaultCardDemoImageChat />
          <EvervaultCardDemoImage />
          <EvervaultCardDemo />
          <div>
            <BackgroundGradientAnimationDemo />
          </div>
          <CanvasRevealEffectDemo />

          <WobbleCardDemo />

          <section id="pricing" className="mt-[0px] md:mt-[0px] p-20">
            <LampComponent />
            <div className="flex flex-wrap items-center justify-center flex-col md:flex-row gap-8 -mt-72">
              {/* Free Plan */}
              <CardContainer className="inter-var ">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                  >
                    Free Plan
                    <h2 className="text-6xl">$0</h2>
                  </CardItem>
                  <CardItem
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    A great start for exploring our platform with essential
                    features.
                    <ul className="my-4 flex flex-col gap-2">
                      <li className="flex items-center gap-2">
                        <CheckIcon /> Access to Conversation tool
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckIcon /> 50 generations per month
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckIcon /> Basic Image Generation
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckIcon /> Community support
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckIcon /> Basic analytics and insights
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckIcon /> 2 active projects
                      </li>
                    </ul>
                  </CardItem>
                  <div className="flex justify-between items-center mt-8">
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                      Try now →
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                      Get Started Now
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>

              {/* Standard Plan */}
              <CardContainer className="inter-var ">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                  >
                    Standard Plan
                    <h2 className="text-6xl">$18</h2>
                  </CardItem>
                  <CardItem
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    Ideal for growing your projects with more features.
                    <ul className="my-4 flex flex-col gap-2">
                      <li className="flex items-center gap-2">
                        <CheckIcon /> Access to Conversation tool
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckIcon /> 200 generations per month
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckIcon /> Advanced Image Generation
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckIcon /> Priority support
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckIcon /> Enhanced analytics and insights
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckIcon /> 5 active projects
                      </li>
                    </ul>
                  </CardItem>
                  <div className="flex justify-between items-center mt-8">
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                      Try now →
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                      Get Started Now
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>

              {/* Premium Plan */}
              <CardContainer className="inter-var ">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                  >
                    Premium Plan
                    <h2 className="text-6xl">$27</h2>
                  </CardItem>
                  <CardItem
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    Best for maximizing your productivity with all features.
                    <ul className="my-4 flex flex-col gap-2">
                      <li className="flex items-center gap-2">
                        <CheckIcon /> Access to Conversation tool
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckIcon /> Unlimited generations
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckIcon /> Premium Image Generation
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckIcon /> Dedicated support
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckIcon /> Comprehensive analytics and insights
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckIcon /> Unlimited active projects
                      </li>
                    </ul>
                  </CardItem>
                  <div className="flex justify-between items-center mt-8">
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                      Try now →
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                      Get Started Now
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </div>
          </section>

          <footer className="h-[150px] w-full">
            <div className="flex items-center justify-center h-full w-full bg-neutral-950">
              {/* All rights reserved. */}
              <p className="text-neutral-500 dark:text-neutral-300">
                © 2021 DaffThink. All rights reserved| Made with ❤️ by DaffThink
              </p>
            </div>
          </footer>
        </motion.main>
      )}
    </>
  );
}

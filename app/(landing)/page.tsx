import Home from "@/components/global/home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | kuttusAi",
  description: "kuttus Ai is a web app that allows you to shorten URLs.",
};

const LandingPage = () => {
  return (
    // <div className="h-full ">
    //   {/* <LandingHero /> */}
    //   {/* <LandingContent /> */}
    // </div>
      // {/* <LandingNavbar /> */}
    <Home />
  );
};

export default LandingPage;

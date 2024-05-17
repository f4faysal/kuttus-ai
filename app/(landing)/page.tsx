import Home from "@/components/global/home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Daff Think - Home",
  description: "Daff Think - Home Page",
};

const LandingPage = () => {
  return <Home />;
};

export default LandingPage;

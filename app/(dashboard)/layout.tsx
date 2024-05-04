import Navbar from "@/components/navbar";
import MenuOptions, { Sidebar } from "@/components/sidebar";

import { getApiLimitCount } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const apiLimitCount = await getApiLimitCount();
  const isPro = await checkSubscription();

  return (
    <div className="flex overflow-hidden h-screen">
      {/* // <div className="h-screen relative"> */}
      {/* <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-80 bg-gray-900"> */}
      <Sidebar isPro={isPro} apiLimitCount={apiLimitCount} />
      {/* <MenuOptions  /> */}
      {/* </div> */}
      <MenuOptions />
      {/* <main className="md:pl-72 pb-10 bg-gray-900 h-full"> */}
      <main className="w-full ">
        <Navbar />
        <div className="dark:bg-[#111827]">
          <div className="border-l-[1px] border-t-[1px] dark:bg-black  pt-20 h-screen rounded-l-3xl border-muted-foreground/20 overflow-scroll shadow-inner">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;

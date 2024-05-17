import { GlobeDemo } from "@/components/auth/globeDemo";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-screen flex items-center justify-center bg-black">
      <div className="w-[60%] h-full ">
        <GlobeDemo />
      </div>
      <div className="w-[40%] h-screen flex items-center justify-center bg-white/5 backdrop-blur-lg">
        {children}
      </div>
    </main>
  );
};

export default AuthLayout;

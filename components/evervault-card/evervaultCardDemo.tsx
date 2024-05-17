import { EvervaultCard, Icon } from "./evervault-card";

export function EvervaultCardDemo() {
  return (
    <section className="flex justify-end w-full py-20 container mx-auto items-center ">
      <div className=" w-3/5 flex items-center justify-center">
        <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm  p-4 relative h-[30rem]">
          <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
          <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
          <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
          <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

          <EvervaultCard text="Conversations" />

          <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
            Conversational AI
          </p>
        </div>
      </div>
      <div className="w-[40%]">
        <h2 className="text-black text-xl">
          <span className="inline-flex h-12 animate-shimmer items-center justify-center rounded-lg  bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            CONVERSATION AI
          </span>
        </h2>
        <h1 className="text-4xl py-5 leading-10">
          Elevate Engagement: DaffThink Facilitates Dynamic Conversations
        </h1>
        <p className="pb-5 text-muted-foreground leading-loose">
          Transform your interactions with DaffThink`s conversational AI
          capabilities. Engage effortlessly with AI-powered dialogue generation,
          enabling seamless communication and enhanced user experiences.
          Experience the future of conversation with DaffThink.
        </p>

        <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          Try DaffThink
        </button>
      </div>
    </section>
  );
}

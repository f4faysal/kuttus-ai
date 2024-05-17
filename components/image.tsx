import Image from "next/image";
import { useState } from "react";
import { cn } from "../lib/utils";

export const BlurImage = ({ url }: { url: string }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <Image
      src={url}
      height="500"
      width="500"
      onLoad={() => setLoaded(true)}
      className={cn(
        "object-cover object-top absolute inset-0 h-full w-full transition duration-200",
        loaded ? "blur-none" : "blur-md"
      )}
      alt="thumbnail"
    />
  );
};

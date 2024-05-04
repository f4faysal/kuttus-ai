"use client";

import { Crisp } from "crisp-sdk-web";
import { useEffect } from "react";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("385f1b38-2d9b-437f-b22d-8b770da430d1");
  }, []);

  return null;
};

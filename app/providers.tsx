"use client";

import { Toaster } from "react-hot-toast";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Toaster /> {children}
    </>
  );
};

export default Providers;

import HowService from "@/component/services/howService"
import WhatService from "@/component/services/whatService"
import Testimony from "@/component/testimony"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service",
  description: "Learn more about our type of service.",
};

export default function Home() {
  return (
    <main className="h-full py-8">
      <HowService />
      <WhatService />
      <Testimony />
    </main>
  );
}
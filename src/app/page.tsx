import Hero from "@/component/home/hero"
import Overview from "@/component/home/overview"
import WhatService from "@/component/services/whatService"
import Testimony from "@/component/testimony"

export default function Home() {
  return (
    <main className="h-full md:pb-8">
      <Hero />
      <Overview />
      <WhatService />
      <Testimony />
    </main>
  );
}
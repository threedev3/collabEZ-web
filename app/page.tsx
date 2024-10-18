import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import { Services } from "@/components/Services";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto ">
      <Hero />
      <Intro />
      <Services />
    </div>
  );
}

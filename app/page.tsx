import Choose from "@/components/Choose";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Portfolio from "@/components/Portfolio";
import Reviews from "@/components/Reviews";
import ScrollToTop from "@/components/ScrollToTop";
import { Services } from "@/components/Services";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto ">
      <div className="bg-[url('/bgLines.png')] bg-no-repeat h-full bg-cover w-full bg-center bg-opacity-20 absolute inset-0 z-0" />
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <Hero />
      <Intro />
      <Services />
      <Choose />
      <Portfolio />
      <Reviews />
      <ContactForm />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

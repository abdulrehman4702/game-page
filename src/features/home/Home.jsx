import React from "react";
import Hero from "./Hero";
import PlatformSection from "../platform/PlatformSection";
import ClientShowcase from "../showcase/ClientShowcase";

const Home = () => {
  return (
    <>
      <Hero />
      <PlatformSection />
      <ClientShowcase />
    </>
  );
};

export default Home;

import { About, Footer, Hero, Hobbies, Projects, Skills } from "@/components";
import React from "react";

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Hobbies />
      <Skills />
      <Projects />
      <Footer />
    </main>
  );
};

export default Home;

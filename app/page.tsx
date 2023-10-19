import { About, Contact, Footer, Hero, Hobbies, Projects, Skills } from "@/components";
import React from "react";

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Hobbies />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;

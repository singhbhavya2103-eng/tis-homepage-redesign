import { MotionConfig } from "framer-motion";
import ScrollProgress from "./components/ScrollProgress";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Learning from "./sections/Learning";
import Sports from "./sections/Sports";
import Rankings from "./sections/Rankings";
import Reviews from "./sections/Reviews";
import Campus from "./sections/Campus";
import "./App.css";

export default function App() {
  return (
    // reducedMotion="user" makes every Framer Motion animation respect the
    // visitor's "reduce motion" setting.
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <ScrollProgress />
      <CustomCursor />
      <Navbar />

      <main id="main">
        <Hero />
        <About />
        <Learning />
        <Sports />
        <Rankings />
        <Reviews />
        <Campus />
      </main>

      <Footer />
    </MotionConfig>
  );
}

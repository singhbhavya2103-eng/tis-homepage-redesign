import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { heroPhotos } from "../data/heroPhotos";
import "./Hero.css";

const leftPhotos = heroPhotos.filter((photo) => photo.side === "left");
const rightPhotos = heroPhotos.filter((photo) => photo.side === "right");

// Shared fade-and-rise entrance for the text blocks.
const fadeUp = (delay = 0, y = 18) => ({
  initial: { opacity: 0, y },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: "easeOut" },
});

// The outer div floats forever with CSS; the inner motion.div plays the
// entrance. Keeping them separate stops the two from fighting over `transform`.
function PhotoColumn({ photos, position }) {
  return (
    <div className={`hero-photos hero-photos-${position}`} aria-hidden="true">
      {photos.map((photo) => {
        const order = heroPhotos.indexOf(photo);

        return (
          <div
            className="hero-photo"
            key={photo.id}
            style={{ animationDelay: `${-order * 1.7}s` }}
          >
            <motion.div
              className="hero-photo-frame"
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.15 + order * 0.08, ease: "easeOut" }}
            >
              <img src={photo.src} alt="" width="150" height="150" decoding="async" />
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-overlay" aria-hidden="true" />
      <span className="hero-decoration hero-decoration-one" aria-hidden="true" />
      <span className="hero-decoration hero-decoration-two" aria-hidden="true" />

      <PhotoColumn photos={leftPhotos} position="left" />

      <div className="hero-content">
        <motion.p className="hero-eyebrow" {...fadeUp(0, 14)}>
          TULAS INTERNATIONAL SCHOOL · DEHRADUN
        </motion.p>

        <motion.h1 id="hero-title" {...fadeUp(0.1, 24)}>
          LET&apos;S DO
          <br />
          <span>it With</span> <em>Tulas.</em>
        </motion.h1>

        <motion.p className="hero-description" {...fadeUp(0.22)}>
          TIS is one of India&apos;s top boarding and day schools in Dehradun, India.
        </motion.p>

        <motion.div className="hero-actions" {...fadeUp(0.34, 14)}>
          <a href="#admissions" className="button-primary">
            Explore Admissions <ArrowRight size={17} aria-hidden="true" />
          </a>

          <a href="#about" className="hero-secondary">
            Discover Tulas <ArrowDown size={16} aria-hidden="true" />
          </a>
        </motion.div>
      </div>

      <PhotoColumn photos={rightPhotos} position="right" />

      <div className="hero-bottom-note">
        <span>CBSE · CO-ED · CLASS IV–XII</span>
        <span>DEHRADUN, UTTARAKHAND</span>
      </div>
    </section>
  );
}

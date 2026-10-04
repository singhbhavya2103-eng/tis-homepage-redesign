import { ArrowUpRight } from "lucide-react";
import Reveal from "../components/Reveal";
import { allSports, featuredSports } from "../data/sports";
import "./Sports.css";

export default function Sports() {
  return (
    <section
      className="sports-section"
      id="sports"
      aria-labelledby="sports-title"
    >
      <div className="sports-heading">
        <Reveal>
          <p className="sports-eyebrow">03 — BEYOND ACADEMICS</p>
          <h2 id="sports-title">
            It&apos;s not just a facility.
            <br />
            <em>At Tulas it&apos;s the foundation!</em>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="sports-intro">
            16+ sports curated to bring joy and discipline to your life.
          </p>
        </Reveal>
      </div>

      <div className="sports-grid">
        {featuredSports.map((sport, index) => (
          <Reveal key={sport.name} delay={index * 0.1}>
            <article className="sport-card">
              <img
                src={sport.image}
                alt=""
                width="500"
                height="260"
                loading="lazy"
                decoding="async"
              />
              <h3>{sport.name}</h3>
            </article>
          </Reveal>
        ))}
      </div>

      <ul className="sports-list" aria-label="All sports offered at TIS">
        {allSports.map((name, index) => (
          <li key={name}>
            <Reveal delay={(index % 8) * 0.04}>
              <span className="sports-chip">{name}</span>
            </Reveal>
          </li>
        ))}
      </ul>

      <div className="sports-footer">
        <a
          href="https://tis.edu.in/beyond-academics/sports/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Explore Sports <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}

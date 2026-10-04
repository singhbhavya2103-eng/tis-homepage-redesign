import { ArrowRight } from "lucide-react";
import Reveal from "../components/Reveal";
import "./About.css";

export default function About() {
  return (
    <section className="section about-section" id="about">
      <div className="about-inner">
        <Reveal>
          <p className="eyebrow">01 — ABOUT TIS</p>
          <span className="about-gold-line" aria-hidden="true">
            ✳
          </span>
        </Reveal>

        <Reveal delay={0.08}>
          <h2>
            Boarding and Day
            <br />
            <em>School Excellence</em>
          </h2>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="about-copy">
            <p>
              We provide world-class education, modern facilities, and a
              nurturing environment for students to thrive academically,
              socially, and culturally.
            </p>
            <p>
              Join TIS to be part of a community that encourages leadership,
              innovation, and lifelong learning.
            </p>
            <p className="about-established">
              Established in 2012 under the aegis of Rishabh Educational Trust
              to impart education through seamless opportunities.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.24}>
          <a className="inline-link" href="#learning">
            Discover our approach <ArrowRight size={17} aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

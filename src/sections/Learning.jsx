import { ArrowRight } from "lucide-react";
import Reveal from "../components/Reveal";
import programs from "../data/programs";
import "./Learning.css";

export default function Learning() {
  return (
    <section
      className="section learning-section"
      id="learning"
      aria-labelledby="learning-title"
    >
      <Reveal>
        <p className="eyebrow">02 — ACADEMICS</p>

        <div className="section-heading">
          <h2 id="learning-title">
            &ldquo;We feel supported in what we do
            <br />
            <em>and nudged further to do more.&rdquo;</em>
          </h2>

          <p>
            At Tulas, we believe in bringing out the best in every
            student&mdash;whether it&apos;s academics, music, art, or drama.
          </p>
        </div>
      </Reveal>

      <div className="program-grid">
        {programs.map((program, index) => (
          <Reveal key={program.number} delay={index * 0.1}>
            <article className="program-card">
              <span className="program-number">{program.number}</span>

              <div>
                <h3>{program.title}</h3>
                <p>{program.description}</p>
              </div>

              <a href={program.href} aria-label={`Go to ${program.title}`}>
                <ArrowRight size={19} aria-hidden="true" />
              </a>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

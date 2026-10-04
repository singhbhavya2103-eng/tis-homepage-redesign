import Reveal from "../components/Reveal";
import CountUp from "../components/CountUp";
import { campusStats } from "../data/stats";
import Admissions from "./Admissions";
import "./Campus.css";

export default function Campus() {
  return (
    <section
      className="campus-section"
      id="campus"
      aria-labelledby="campus-title"
    >
      <div className="campus-image" aria-hidden="true" />

      <div className="campus-inner">
        <Reveal>
          <p className="eyebrow">06 — BOARDING LIFE</p>
          <h2 id="campus-title" className="campus-title">Boarding Life at Tulas</h2>
          <p className="campus-intro">
            A nurturing environment for students to thrive academically,
            socially, and culturally.
          </p>
        </Reveal>

        <ul className="campus-stats">
          {campusStats.map((stat, index) => (
            <li key={stat.id}>
              <Reveal delay={index * 0.08}>
                <div className="campus-stat">
                  <span className="campus-stat-value">
                    {stat.display ?? (
                      <>
                        <CountUp to={stat.value} />
                        {stat.suffix}
                      </>
                    )}
                  </span>
                  <span className="campus-stat-label">{stat.label}</span>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>

        <Admissions />
      </div>
    </section>
  );
}

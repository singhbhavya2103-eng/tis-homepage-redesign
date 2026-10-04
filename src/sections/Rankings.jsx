import Reveal from "../components/Reveal";
import CountUp from "../components/CountUp";
import { rankings } from "../data/rankings";
import "./Rankings.css";

export default function Rankings() {
  return (
    <section
      className="rankings-section"
      id="rankings"
      aria-labelledby="rankings-title"
    >
      <div className="rankings-inner">
        <Reveal>
          <p className="rankings-eyebrow">04 — RECOGNITION</p>
          <h2 id="rankings-title" className="rankings-title">
            Ranked <em>#1</em> Co-Educational
            <br />
            Boarding School in Dehradun
          </h2>
          <p className="rankings-intro">
            As recognised by Education Today and Outlook.
          </p>
        </Reveal>

        <ul className="rankings-grid">
          {rankings.map((item, index) => (
            <li key={item.id}>
              <Reveal delay={index * 0.1}>
                <article className="ranking-card">
                  <span className="ranking-number">#{item.rank}</span>
                  <h3>{item.place}</h3>
                  <p>{item.description}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal delay={0.1}>
          <p className="rankings-collab">
            <span className="rankings-collab-value">
              <CountUp to={12} />+
            </span>
            Collaborations
          </p>
        </Reveal>
      </div>
    </section>
  );
}

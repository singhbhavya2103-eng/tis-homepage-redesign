
import { motion, useScroll } from "framer-motion";
import { ArrowDown, ArrowRight, Menu } from "lucide-react";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="scroll-progress"
      style={{ scaleX: scrollYProgress }}
    />
  );
}

function Reveal({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function Navbar() {
  return (
    <header className="navbar">
      <a className="brand" href="#home" aria-label="Tulas International School home">
        <span className="brand-mark">T</span>
        <span>
          <strong>TULAS</strong>
          <small>INTERNATIONAL SCHOOL</small>
        </span>
      </a>

      <nav className="nav-links" aria-label="Main navigation">
        <a href="#about">Our School</a>
        <a href="#learning">Learning</a>
        <a href="#campus">Campus Life</a>
      </nav>

      <a className="button button-dark nav-cta" href="#admissions">
        Admissions <ArrowRight size={16} />
      </a>

      <a className="mobile-menu" href="#admissions" aria-label="Go to admissions">
        <Menu size={23} />
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-image" />

      <div className="hero-content">
        <motion.p
          className="eyebrow hero-eyebrow"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          DEHRADUN, INDIA · ESTABLISHED 2012
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12 }}
        >
          A place to
          <br />
          <em>learn.</em> A world
          <br />
          to discover.
        </motion.h1>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          Discover an education that nurtures curiosity,
          builds character, and prepares young minds for
          a world of possibilities.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
        >
          <a className="button button-light" href="#about">
            Discover Tulas <ArrowRight size={17} />
          </a>
          <a className="text-link" href="#admissions">
            Explore admissions
          </a>
        </motion.div>
      </div>

      <div className="hero-bottom">
        <span>LEARNING BEYOND CLASSROOMS</span>
        <a href="#about" aria-label="Scroll to discover Tulas">
          <ArrowDown size={18} />
        </a>
        <span>GROW · EXPLORE · BECOME</span>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section about-section" id="about">
      <Reveal>
        <p className="eyebrow">01 — A SCHOOL WITH A PURPOSE</p>
        <div className="about-grid">
          <h2>
            Education for
            <br />
            <em>the life ahead.</em>
          </h2>
          <div className="about-copy">
            <p>
              At Tulas International School, learning goes beyond
              textbooks. We believe in creating an environment where
              students can discover their strengths, develop confidence,
              and grow into thoughtful global citizens.
            </p>
            <p>
              Our CBSE curriculum brings together academic learning,
              creativity, sports, and opportunities to explore.
            </p>
            <a className="inline-link" href="#learning">
              Discover our approach <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function Learning() {
  const programs = [
    {
      number: "01",
      title: "Academic Excellence",
      description:
        "Build a strong foundation through curiosity, critical thinking, and meaningful learning.",
    },
    {
      number: "02",
      title: "Beyond Academics",
      description:
        "Explore sports, arts, creativity, and the interests that make every student unique.",
    },
    {
      number: "03",
      title: "Boarding & Day Life",
      description:
        "Experience a supportive school community built around growth, independence, and belonging.",
    },
  ];

  return (
    <section className="section learning-section" id="learning">
      <Reveal>
        <p className="eyebrow">02 — THE TULAS EXPERIENCE</p>
        <div className="section-heading">
          <h2>
            Room to grow.
            <br />
            <em>Freedom to flourish.</em>
          </h2>
          <p>
            An education shaped around knowledge, character,
            and the joy of discovering something new.
          </p>
        </div>
      </Reveal>

      <div className="program-grid">
        {programs.map((program, index) => (
          <Reveal key={program.number} delay={index * 0.12}>
            <article className="program-card">
              <span className="program-number">{program.number}</span>
              <div>
                <h3>{program.title}</h3>
                <p>{program.description}</p>
              </div>
              <a
                href="#admissions"
                aria-label={`Learn more about ${program.title}`}
              >
                <ArrowRight size={19} />
              </a>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Campus() {
  return (
    <section className="campus-section" id="campus">
      <div className="campus-image" />
      <div className="campus-copy">
        <Reveal>
          <p className="eyebrow">03 — LIFE AT TULAS</p>
          <h2>
            More than
            <br />
            a classroom.
          </h2>
          <p>
            From sporting pursuits to shared experiences,
            school life creates space for students to develop
            skills, friendships, and lasting memories.
          </p>
          <a className="inline-link" href="#admissions">
            Discover campus life <ArrowRight size={17} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function Admissions() {
  return (
    <section className="admissions-section" id="admissions">
      <Reveal>
        <p className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</p>
        <h2>
          Every great journey
          <br />
          <em>begins somewhere.</em>
        </h2>
        <p>
          Discover the Tulas experience and take the next
          step in your child's educational journey.
        </p>
        <a
          className="button button-light"
          href="https://admission.tis.edu.in/"
          target="_blank"
          rel="noreferrer"
        >
          Explore Admissions <ArrowRight size={17} />
        </a>
      </Reveal>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <a className="brand footer-brand" href="#home">
        <span className="brand-mark">T</span>
        <span>
          <strong>TULAS</strong>
          <small>INTERNATIONAL SCHOOL</small>
        </span>
      </a>
      <p>Dhoolkot, Selaqui, Dehradun, Uttarakhand</p>
      <a href="https://tis.edu.in/">Official TIS Website ↗</a>
      <span>© {new Date().getFullYear()} Tulas International School</span>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Learning />
        <Campus />
        <Admissions />
      </main>
      <Footer />
    </>
  );
}
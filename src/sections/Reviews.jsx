import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import Reveal from "../components/Reveal";
import { featuredQuote, reviews } from "../data/reviews";
import "./Reviews.css";

const EDGE_TOLERANCE = 4;

// "Mrs Urja Bhayani" -> "UB"
function getInitials(name) {
  return name
    .replace(/^(Mrs|Mr|Ms)\.?\s+/i, "")
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export default function Reviews() {
  const trackRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  // Disable the arrows at either end of the track.
  const updateEdges = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    setAtStart(track.scrollLeft <= EDGE_TOLERANCE);
    setAtEnd(
      track.scrollLeft + track.clientWidth >= track.scrollWidth - EDGE_TOLERANCE,
    );
  }, []);

  useEffect(() => {
    updateEdges();
    window.addEventListener("resize", updateEdges);
    return () => window.removeEventListener("resize", updateEdges);
  }, [updateEdges]);

  // Scroll by exactly one card, measured from the distance between two cards.
  const scrollByCard = (direction) => {
    const track = trackRef.current;
    const card = track?.querySelector("li");
    if (!card) return;

    const next = card.nextElementSibling;
    const step = next ? next.offsetLeft - card.offsetLeft : card.offsetWidth;

    track.scrollBy({
      left: direction * step,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <section
      className="reviews-section"
      id="reviews"
      aria-labelledby="reviews-title"
    >
      <div className="reviews-inner">
        <Reveal>
          <div className="reviews-header">
            <div>
              <p className="reviews-eyebrow">05 — GOOGLE REVIEWS</p>
              <h2 id="reviews-title">From The Parents</h2>
              <p className="reviews-lead">{featuredQuote}</p>
            </div>

            <div className="reviews-controls">
              <button
                type="button"
                aria-label="Previous reviews"
                onClick={() => scrollByCard(-1)}
                disabled={atStart}
              >
                <ArrowLeft size={20} aria-hidden="true" />
              </button>
              <button
                type="button"
                aria-label="Next reviews"
                onClick={() => scrollByCard(1)}
                disabled={atEnd}
              >
                <ArrowRight size={20} aria-hidden="true" />
              </button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div
            className="reviews-track"
            ref={trackRef}
            onScroll={updateEdges}
            role="region"
            aria-label="Parent reviews"
            tabIndex={0}
          >
            <ul className="reviews-list">
              {reviews.map((review) => (
                <li className="review-card" key={review.id}>
                  <figure>
                    <blockquote>
                      <p>{review.text}</p>
                    </blockquote>

                    <figcaption>
                      <span className="review-avatar" aria-hidden="true">
                        {getInitials(review.name)}
                      </span>
                      <span>
                        <cite>{review.name}</cite>
                        <span className="review-relation">
                          {review.relation}
                        </span>
                      </span>
                    </figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

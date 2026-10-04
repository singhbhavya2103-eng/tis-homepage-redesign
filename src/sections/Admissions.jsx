import { Globe, Mail, MapPin, Phone } from "lucide-react";
import Reveal from "../components/Reveal";
import { applyUrl, contact } from "../data/site";
import "./Admission.css";

export default function Admissions() {
  return (
    <section className="admissions-section" id="admissions">
      <Reveal>
        <div className="enquiry-card">
          <div className="enquiry-contact">
            <h2>Contact Us.</h2>

            <a href={contact.helpline.href}>
              <Phone size={16} aria-hidden="true" />
              <span>{contact.helpline.label}</span>
            </a>

            <a href={`mailto:${contact.email}`}>
              <Mail size={16} aria-hidden="true" />
              <span>{contact.email}</span>
            </a>

            <div className="enquiry-contact-item">
              <MapPin size={16} aria-hidden="true" />
              <address>
                Tulas International School, {contact.address}
              </address>
            </div>

            <a href="https://tis.edu.in/" target="_blank" rel="noopener noreferrer">
              <Globe size={16} aria-hidden="true" />
              <span>Visit School Website</span>
            </a>

            <a
              className="enquiry-logo-link"
              href="https://tis.edu.in/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Tulas International School website"
            >
              <img src="/images/schoolLogo.jpg" alt="" width="65" height="65" />
            </a>
          </div>

          <div className="enquiry-form-panel">
            <h2>Enquire Now!</h2>
            <p>Take the first step towards joining Tulas.</p>

            <a
              className="enquiry-submit"
              href={applyUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Continue to Enquiry
            </a>

            <small>
              You will be redirected to the school&apos;s admissions portal.
            </small>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

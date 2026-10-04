import { Fragment } from "react";
import { ArrowUpRight, MapPin } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { actionLinks, contact, policyLinks, socialLinks } from "../data/site";
import "./Footer.css";

const SOCIAL_ICONS = {
  facebook: FaFacebookF,
  x: FaXTwitter,
  linkedin: FaLinkedinIn,
  instagram: FaInstagram,
  youtube: FaYoutube,
};

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        {/* Campus map */}
        <div className="footer-map">
          <iframe
            title="Tulas International School location"
            src={contact.mapEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <a
            className="footer-map-link"
            href={contact.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MapPin size={15} aria-hidden="true" />
            View location
          </a>
        </div>

        {/* School information */}
        <div>
          <a
            className="footer-brand"
            href="#home"
            aria-label="Tulas International School home"
          >
            <img
              src="/images/schoolLogo.jpg"
              alt=""
              width="120"
              height="120"
              className="footer-logo"
            />
          </a>

          <address className="footer-contact">
            <p>Tulas International School</p>
            <p>{contact.address}</p>
            <p>
              Landline No.{" "}
              {contact.landlines.map(({ label, href }, index) => (
                <Fragment key={href}>
                  {index > 0 && ", "}
                  <a href={href}>{label}</a>
                </Fragment>
              ))}
            </p>
            <p>
              Admission Helpline No.{" "}
              <a href={contact.helpline.href}>{contact.helpline.label}</a>
            </p>
            <p>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </p>
          </address>

          <a
            className="footer-official-link"
            href="https://tis.edu.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Official TIS Website <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>

        {/* Policies and useful links */}
        <nav className="footer-policies" aria-label="Policies and useful links">
          {policyLinks.map(({ label, href }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer">
              {label}
            </a>
          ))}
        </nav>

        {/* Virtual tour, apply and login */}
        <div className="footer-actions">
          {actionLinks.map(({ label, href }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer">
              {label}
            </a>
          ))}
        </div>
      </div>

      {/* Copyright and social links */}
      <div className="footer-bottom">
        <p>
          Copyright © {new Date().getFullYear()} Tulas International School,
          Dehradun | All Rights Reserved
        </p>
        <p>Designed and Managed By NetPuppys</p>

        <ul className="footer-socials">
          {socialLinks.map(({ id, label, href }) => {
            const Icon = SOCIAL_ICONS[id];

            return (
              <li key={id}>
                <a
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon size={17} aria-hidden="true" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}

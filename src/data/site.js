const SITE_URL = "https://tis.edu.in/";

export const applyUrl = "https://admission.tis.edu.in/";

export const contact = {
  helpline: { label: "+91-9837983791", href: "tel:+919837983791" },
  landlines: [
    { label: "0135-2699444", href: "tel:01352699444" },
    { label: "0135-2699666", href: "tel:01352699666" },
  ],
  email: "info@tis.edu.in",
  address:
    "Dhoolkot, P.O – Selaqui, Chakrata Road, Dehradun-248011 (Uttarakhand)",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=Tulas+International+School+Dehradun",
  mapEmbedUrl:
    "https://maps.google.com/maps?q=Tulas%20International%20School%20Dehradun&t=&z=13&ie=UTF8&iwloc=&output=embed",
};

// In-page anchors point at sections that exist on this page.
// Items without a section here link out to the official site.
export const navItems = [
  { label: "ABOUT TIS", href: "#about" },
  { label: "ACADEMICS", href: "#learning" },
  { label: "BOARDING LIFE", href: "#campus" },
  { label: "BEYOND ACADEMICS", href: "#sports" },
  { label: "EVENTS", href: SITE_URL, external: true },
  { label: "ADMISSION", href: "#admissions" },
  { label: "MANDATORY DISCLOSURE", href: SITE_URL, external: true },
  { label: "ALUMNI NETWORK", href: SITE_URL, external: true },
  { label: "QUICK LINKS", href: "#contact" },
];

export const policyLinks = [
  { label: "FAQ", href: `${SITE_URL}faq/` },
  { label: "Calendar", href: `${SITE_URL}MandatoryPDF/TIS_CALENDAR_2024__PDF.pdf` },
  { label: "Brochure", href: `${SITE_URL}MandatoryPDF/TIS_BROCHURE.pdf` },
  { label: "Privacy Policy", href: `${SITE_URL}privacy-policy/` },
  { label: "Terms & Conditions", href: `${SITE_URL}terms-conditions/` },
  { label: "Disclaimer", href: `${SITE_URL}disclaimer/` },
  { label: "Disciplinary Policy", href: `${SITE_URL}MandatoryPDF/DisciplinaryPolicy.pdf` },
  { label: "Mobile Phone Policy", href: `${SITE_URL}MandatoryPDF/MobilePhonePolicy.pdf` },
  {
    label: "Child Welfare & Safety Policy",
    href: `${SITE_URL}MandatoryPDF/childWelfarePolicy.pdf`,
  },
];

export const actionLinks = [
  { label: "Virtual Tour", href: `${SITE_URL}virtual-tour/` },
  { label: "Apply Now", href: applyUrl },
  { label: "Fedena Login", href: "https://tis.fedena.com/" },
];

export const socialLinks = [
  { id: "facebook", label: "Facebook", href: "https://www.facebook.com/tulasinternationalschool/" },
  { id: "x", label: "X (Twitter)", href: "https://twitter.com/tulas_intschool" },
  { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/school/tulas-international-school/" },
  { id: "instagram", label: "Instagram", href: "https://www.instagram.com/tulasinternationalschool/" },
  { id: "youtube", label: "YouTube", href: "https://www.youtube.com/channel/UC-eRtybnv3GvfvcWxQq93zw" },
];

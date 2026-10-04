const unsplash = (id) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=500&q=80`;

// Placeholder stock photos. Swap for TIS photos saved in public/images/sports/.
export const featuredSports = [
  { name: "Cricket", image: unsplash("photo-1531415074968-036ba1b575da") },
  { name: "Football", image: unsplash("photo-1574629810360-7efbbe195018") },
  { name: "Swimming", image: unsplash("photo-1530549387789-4c1017266635") },
  { name: "Basketball", image: unsplash("photo-1546519638-68e109498ffc") },
];

// The full list shown on tis.edu.in.
export const allSports = [
  "Archery",
  "Cycling",
  "Hockey",
  "Swimming",
  "Taekwondo",
  "Football",
  "Shooting Range",
  "Horse Riding",
  "Billiards",
  "Squash",
  "Volleyball",
  "Basketball",
  "Cricket",
  "Lawn Tennis",
  "Badminton",
  "Table Tennis",
];

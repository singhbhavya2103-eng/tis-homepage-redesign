const unsplash = (id) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=400&q=80`;

// Placeholder stock photos. Swap `src` for TIS campus photos saved in
// public/images/hero/ (for example "/images/hero/karate.webp").
export const heroPhotos = [
  { id: "cricket", side: "left", src: unsplash("photo-1531415074968-036ba1b575da") },
  { id: "cycling", side: "left", src: unsplash("photo-1517649763962-0c623066013b") },
  { id: "basketball", side: "left", src: unsplash("photo-1546519638-68e109498ffc") },
  { id: "students", side: "left", src: unsplash("photo-1529390079861-591de354faf5") },
  { id: "karate", side: "right", src: unsplash("photo-1555597673-b21d5c935865") },
  { id: "running", side: "right", src: unsplash("photo-1552674605-db6ffd4facb5") },
  { id: "music", side: "right", src: unsplash("photo-1508700115892-45ecd05ae2ad") },
  { id: "outdoors", side: "right", src: unsplash("photo-1473448912268-2022ce9509d8") },
];

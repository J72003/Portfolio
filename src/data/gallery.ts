export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  year: string;
  to: string;
  /** two colors for the poster gradient */
  from: string;
  toColor: string;
  ink: string;
  /** short poster tagline shown large on the card */
  poster: string;
}

export const GALLERY: GalleryItem[] = [
  {
    id: "invertequest",
    title: "InverteQuest",
    category: "flagship",
    subtitle: "field AI · water science",
    year: "2026",
    to: "/invertequest",
    from: "#2e5d43",
    toColor: "#173a29",
    ink: "#f4efe2",
    poster: "STREAM\nHEALTH\nIN THE\nFIELD",
  },
  {
    id: "portraid",
    title: "PortrAid",
    category: "research",
    subtitle: "ACM Southeast 2025",
    year: "2025",
    to: "/research",
    from: "#b05f2c",
    toColor: "#7d3d16",
    ink: "#faf1e6",
    poster: "COMPO\nSITION\nAS A\nSIGNAL",
  },
  {
    id: "frost",
    title: "Frost Bank",
    category: "product & ux",
    subtitle: "research internship",
    year: "2026",
    to: "/frost-bank",
    from: "#33505e",
    toColor: "#1e333d",
    ink: "#eef4f6",
    poster: "START\nWITH THE\nWORK\nFLOW",
  },
  {
    id: "dealerlot",
    title: "DealerLot",
    category: "full-stack",
    subtitle: "inventory & valuation",
    year: "2024",
    to: "/projects",
    from: "#5a4a63",
    toColor: "#342a3a",
    ink: "#f1eaf3",
    poster: "PRICE\nWITH\nCONFI\nDENCE",
  },
  {
    id: "streetwear",
    title: "Streetwear Across the World",
    category: "research",
    subtitle: "honors symposium · 3rd place",
    year: "2026",
    to: "/research",
    from: "#a63d52",
    toColor: "#6d2334",
    ink: "#fbeaee",
    poster: "CULTURE\nYOU CAN\nWEAR",
  },
  {
    id: "leadership",
    title: "Building Community",
    category: "leadership",
    subtitle: "Asian Student Association",
    year: "2025",
    to: "/leadership",
    from: "#356b58",
    toColor: "#1d3f34",
    ink: "#eef6f1",
    poster: "$200\n→\n$4,000",
  },
  {
    id: "storytelling",
    title: "Visual Storytelling",
    category: "photography",
    subtitle: "El Espejo · TIPA award",
    year: "2024",
    to: "/storytelling",
    from: "#2f3a44",
    toColor: "#191f25",
    ink: "#eef1f4",
    poster: "SEE\nPEOPLE\nCLEARLY",
  },
  {
    id: "awards",
    title: "Recognition",
    category: "awards",
    subtitle: "publications & honors",
    year: "2026",
    to: "/awards",
    from: "#8a6d2f",
    toColor: "#574417",
    ink: "#f7f0dd",
    poster: "THE\nRECORD\nSO FAR",
  },
];

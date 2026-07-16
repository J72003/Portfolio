/**
 * Detail content for the case-study overlay (opened from the home gallery).
 * Keyed by GalleryItem.id. Content is accurate; the `images` arrays are
 * intentionally left as OPEN PLACEHOLDERS, add real image files later and
 * swap the captions/paths in one place.
 */
export interface ProjectDetail {
  subtitle: string;
  description: string;
  role: string;
  tools: string;
  client: string;
  highlights: string[];
  /** Image slots. `src` filled = real image; omitted = open placeholder to add later. */
  images: { label: string; src?: string }[];
}

export const PROJECT_DETAILS: Record<string, ProjectDetail> = {
  invertequest: {
    subtitle: "Claude-Powered Freshwater Bioassessment",
    description:
      "A field-science application that identifies freshwater aquatic macroinvertebrates and uses those identifications to assess stream water quality in real time. Two independent AI analyses (a specialized detector and Claude) run on every specimen, GPS-tagged observations are logged offline, and site-level stream-health indicators are calculated in the field.",
    role: "Product scoping, full-stack build, AI integration",
    tools: "React Native · Supabase · RF-DETR · Claude Haiku",
    client: "TAMU-SA / NSF-supported research",
    highlights: ["Dual-model AI", "Offline field workflow", "FBI & EPT calculations", "Responsible AI"],
    images: [
      { label: "Fieldnotes, capture screen", src: "/images/invertequest-capture.png" },
      { label: "Field Guide, 13 indicator taxa", src: "/images/invertequest-guide.png" },
      { label: "Sites, GPS sampling locations", src: "/images/invertequest-sites.png" },
      { label: "Onboarding, how it works", src: "/images/invertequest-welcome.png" },
    ],
  },
  portraid: {
    subtitle: "AI-Driven Portrait Composition",
    description:
      "A computer-vision system that helps non-experts understand whether a portrait is well composed, learning composition by contrasting uncropped portraits against deliberately cropped examples. Published and presented at ACM Southeast 2025 with faculty mentorship.",
    role: "Research, model implementation, evaluation (collaborative)",
    tools: "PyTorch · Modified ResNet-50 · Grad-CAM · Integrated Gradients",
    client: "ACM Southeast 2025 · faculty-advised",
    highlights: ["Multi-scale ResNet-50", "Precision / Recall / F1", "Interpretability", "Peer-reviewed"],
    images: [
      { label: "PortrAid poster, ACM SE 2025", src: "/images/portraid-poster.png" },
      { label: "Datasets, PIQ2023, Photomatt85, P3M-10K, AIIM-500", src: "/images/portraid-datasets.jpg" },
      { label: "Multi-scale architecture (micro/meso/macro)", src: "/images/portraid-architecture.jpg" },
      { label: "Final metrics, 91.4% accuracy, confusion matrix, F1", src: "/images/portraid-results.jpg" },
    ],
  },
  frost: {
    subtitle: "Product & UX Research",
    description:
      "Product and user research for digital banking experiences, focused on small and medium business customers. Ran a Savings Goals adoption study, defined a North Star metric with a counter-metric, mapped friction across platforms, and translated findings into delivery-ready product work.",
    role: "Product Analyst / UX Research Intern",
    tools: "SQL · Python · Jira · Figma",
    client: "Frost Bank",
    highlights: ["User research", "KPI framework", "Competitive analysis", "Agile delivery"],
    images: [
      { label: "At Frost Bank", src: "/images/frost-bank.jpg" },
    ],
  },
  dealerlot: {
    subtitle: "Used-Car Inventory & Valuation",
    description:
      "A full-stack used-car inventory and valuation application with confidence bands, over-market flags, aging-inventory and holding-cost analysis, filtering, and dashboard statistics, deployed with continuous integration.",
    role: "Full-stack development",
    tools: "React · TypeScript · Node · Vercel",
    client: "Personal project",
    highlights: ["Valuation model", "Confidence bands", "Aging analysis", "CI / deploy"],
    images: [
      { label: "Inventory dashboard, price check", src: "/images/dealerlot-inventory.png" },
      { label: "Quick valuation", src: "/images/dealerlot-valuations.png" },
      { label: "Reports, holding cost & risk", src: "/images/dealerlot-reports.png" },
    ],
  },
  streetwear: {
    subtitle: "Interdisciplinary Digital-Humanities Research",
    description:
      "An interactive digital-humanities project examining how streetwear reflects culture, identity, globalization, and regional expression. Third place in the Junior/Senior research poster category at the 2026 San Antonio Honors Student Research Symposium.",
    role: "Interdisciplinary research & interactive build",
    tools: "React · Vite · TypeScript",
    client: "Honors Symposium 2026 · 3rd place",
    highlights: ["Cultural systems", "Interactive map", "Qualitative synthesis", "Award-winning"],
    images: [
      { label: "At the symposium poster (with Dr. Zhaojin Zeng)", src: "/images/streetwear-symposium.jpg" },
      { label: "Interactive map, Four Sites, One City", src: "/images/satw-map.png" },
      { label: "Garments as Evidence", src: "/images/satw-garments.png" },
      { label: "Honors Symposium, 3rd place", src: "/images/honors-3rd-place.png" },
    ],
  },
  leadership: {
    subtitle: "Community Leadership, Asian Student Association",
    description:
      "As Co-President of the Asian Student Association, grew available funding from ~$200 to ~$4,000, collaborated with five organizations, coordinated 50+ volunteers, and delivered recurring cultural programming reaching 100+ attendees. (Organization-supplied figures.)",
    role: "Co-President, ASA",
    tools: "Event ops · Fundraising · Partnerships",
    client: "TAMU-SA",
    highlights: ["$200 → $4,000", "5 partner orgs", "50+ volunteers", "Recurring programs"],
    images: [
      { label: "APIDA Cultural Night", src: "/images/apida-cultural-night.jpg" },
      { label: "Ramadan Nights", src: "/images/ramadan-nights.png" },
      { label: "ASA Diwali", src: "/images/asa-diwali.png" },
      { label: "ASA, meet the 2024–2025 team", src: "/images/asa-team.png" },
    ],
  },
  storytelling: {
    subtitle: "Photography & Journalism",
    description:
      "Photographer and visual contributor for El Espejo. Third place in the TIPA Environmental Portrait category for “Double Life, Bill Bush” (individual), and an SPJ Region 8 Mark of Excellence finalist for the collaborative project “Fashion Without Limits.”",
    role: "Photographer & Visual Contributor",
    tools: "Photography · Photojournalism · Editing",
    client: "El Espejo",
    highlights: ["TIPA 3rd place", "SPJ finalist", "Environmental portrait", "Visual storytelling"],
    images: [
      { label: '"Double Life, Bill Bush"', src: "/images/double-life.png" },
      { label: "El Espejo, cover (Fall 2024)", src: "/images/el-espejo-cover.png" },
      { label: '"Fashion Without Limits", El Espejo, Fall 2025', src: "/images/fashion-without-limits.jpg" },
      { label: '"Fashion Without Limits", editorial', src: "/images/fashion-without-limits-2.jpg" },
    ],
  },
  awards: {
    subtitle: "Recognition & Honors",
    description:
      "A record of recognition across published research, interdisciplinary scholarship, journalism, photography, hackathons, and scholarships, with individual, team, and publication-level honors kept clearly separate.",
    role: "Recipient",
    tools: "Research · Design · Leadership",
    client: "Various institutions",
    highlights: ["ACM published", "Honors symposium", "TIPA / SPJ", "NSF & DoD scholar"],
    images: [
      { label: "ACM Southeast 2025, author", src: "/images/acmse-2025-author.jpg" },
      { label: "HackUTD, winners podium", src: "/images/hackutd-podium.webp" },
      { label: "Honors Symposium, 3rd place", src: "/images/honors-3rd-place.png" },
      { label: "Intramural awards", src: "/images/intramural-awards.png" },
      { label: "DoD VICEROY Scholar", src: "/images/dod-viceroy.jpg" },
      { label: "NSF S-STEM", src: "/images/nsf-sstem-badge.png" },
      { label: "ACM Presenter, community", src: "/images/acm-presenter.png" },
    ],
  },
};

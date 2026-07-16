export const INVERTEQUEST = {
  title: "InverteQuest",
  subtitle: "Claude-Powered Freshwater Bioassessment Platform",
  overview:
    "InverteQuest is a field-science application that identifies freshwater aquatic macroinvertebrates and uses those identifications to assess stream water quality in real time. Students and field researchers photograph specimens, receive two independent AI analyses, log GPS-tagged observations, and calculate stream-health indicators at each sampling site.",
  productQuestion:
    "How might we help students and field researchers identify aquatic macroinvertebrates and interpret stream health while making AI uncertainty visible?",

  problem: {
    intro:
      "Aquatic macroinvertebrates are widely used as biological indicators because the organisms living in a stream reflect environmental conditions over time.",
    traditional: [
      "Collecting specimens",
      "Transporting them to a laboratory",
      "Microscopy",
      "Taxonomic expertise",
      "Manual calculations",
      "Delayed feedback for students and field teams",
    ],
    resolution:
      "InverteQuest brings preliminary identification and site-level analysis to a phone in the field.",
  },

  science: {
    fbiIntro:
      "Each taxon has a pollution-tolerance value from 0 to 10. The application calculates a weighted mean based on specimen abundance.",
    grades: [
      { grade: "A", range: "0.00–3.75", label: "Excellent", color: "#2e7d4f" },
      { grade: "B", range: "3.76–5.00", label: "Good", color: "#7aa63f" },
      { grade: "C", range: "5.01–6.50", label: "Fair", color: "#c9902b" },
      { grade: "D", range: "6.51 and above", label: "Poor", color: "#b0472c" },
    ],
    eptIntro:
      "EPT Richness is the number of distinct taxa from three orders:",
    eptOrders: ["Ephemeroptera", "Plecoptera", "Trichoptera"],
    eptNote:
      "These groups are commonly sensitive to pollution, so greater EPT richness can provide evidence of healthier stream conditions.",
    caveat:
      "InverteQuest does not produce a legally or scientifically certified water-quality result.",
  },

  dataset: {
    intro:
      "The original research dataset was an NSF-funded collection created through Texas A&M University–San Antonio research.",
    context: [
      "Field specimens collected from San Antonio-area streams (collected by Jordan Cruz, ~2011–2014)",
      "Specimens photographed through the university's BARC microscopy facility",
      "Labeled dataset covering 13 aquatic macroinvertebrate indicator taxa",
      "Research converted into a deployable mobile and web application",
    ],
    taxaNote:
      "The classes span different taxonomic levels, so these are referred to as taxa rather than species.",
    taxa: [
      "Baetidae",
      "Berosus",
      "Caenidae",
      "Cheumatopsyche",
      "Chimarra",
      "Elmidae",
      "Hyalella",
      "Hydropsyche",
      "Hydroptila",
      "Leptohyphidae",
      "Petrophila",
      "Psephenus",
      "Crambidae",
    ],
  },

  models: {
    model1: {
      name: "Roboflow RF-DETR Small",
      points: [
        "Transformer-based object detection model",
        "Trained specifically on the 13-taxon dataset",
        "Detects the specimen and draws a bounding box",
        "Returns a predicted taxon and confidence",
        "Trained using 1,482 augmented images",
        "Achieved 83.9% mAP in its training evaluation",
      ],
      caveat: "83.9% mAP is a detection metric, it is not the same as being “83.9% accurate.”",
    },
    model2: {
      name: "Claude Haiku (Anthropic API)",
      points: [
        "Independently examines the image",
        "Returns a proposed taxon",
        "Generates a feature-based biological rationale",
        "Helps explain visible anatomical characteristics",
        "Provides a second analytical perspective",
      ],
    },
    workflow: [
      { step: "Phone camera", desc: "Specimen photographed in the field" },
      { step: "Image storage", desc: "Uploaded to secure storage" },
      { step: "RF-DETR inference", desc: "Specialized detector predicts taxon + box" },
      { step: "Claude Haiku analysis", desc: "Independent visual analysis + rationale" },
      { step: "Prediction comparison", desc: "Outputs compared side by side" },
      { step: "Agreement / disagreement", desc: "Shown to the user, never hidden" },
      { step: "Human review", desc: "Person confirms the identification" },
      { step: "GPS-tagged observation", desc: "Logged to a sampling site" },
      { step: "FBI & EPT calculation", desc: "Site-level indicators computed" },
      { step: "Dashboards", desc: "Site and classroom views" },
    ],
  },

  claudeRole: [
    {
      title: "Independent analysis",
      text: "Claude evaluates every image separately from the specialized detector.",
    },
    {
      title: "Scientific translation",
      text: "Claude converts visual characteristics into a user-facing biological rationale that students can understand.",
    },
    {
      title: "Uncertainty communication",
      text: "The application shows when Claude and RF-DETR agree or disagree instead of silently selecting one answer.",
    },
    {
      title: "Educational support",
      text: "Students can understand why an identification may be plausible rather than only seeing a class label.",
    },
  ],
  claudeCaveat:
    "Claude's rationale is educational and user-facing. It is not proof of the internal mechanism responsible for the prediction.",

  responsibleDoes: [
    "Display predictions from both models",
    "Show disagreement",
    "Retain human review",
    "Keep API credentials server-side",
    "Separate model output from human confirmation",
    "Display confidence and uncertainty",
    "Preserve the original model outputs",
    "Explain current limitations",
  ],
  responsibleDoesNot: [
    "Treat model agreement as proof",
    "Hide disagreement",
    "Automatically claim scientific validation",
    "Present Claude's rationale as mechanistic explainability",
    "Automatically publish uncertain records",
    "Expose the Anthropic API key in the client",
    "Claim the dual-model system improves accuracy without evaluation",
  ],
  responsibleLimitation:
    "The RF-DETR model achieved 83.9% mAP in its training evaluation. The full RF-DETR–Claude workflow has not yet been benchmarked on a complete held-out dataset. Agreement is therefore treated as an additional decision-support signal rather than validated confidence.",

  fieldConstraints: [
    "Offline specimen capture",
    "Queue-based synchronization",
    "Automatic upload when connectivity returns",
    "Mobile-first interface",
    "GPS-tagged sites",
    "Multiple student observations",
    "Classroom monitoring",
    "Secure server-side API access",
    "Longitudinal sampling records",
  ],

  stack: {
    Frontend: ["Expo SDK 56", "React Native 0.85", "React 19", "TypeScript", "iOS", "Android", "Web"],
    Backend: ["Supabase Postgres", "Supabase Auth", "Supabase Storage", "Supabase Edge Functions"],
    AI: ["Roboflow RF-DETR", "Claude Haiku", "Anthropic API"],
    Infrastructure: ["Vercel", "EAS Build"],
  },

  credits:
    "The 2025 research version of InverteQuest is co-authored with Mariana Lozano and builds on an NSF-supported dataset; specimen collection (Jordan Cruz) and prior research predate the application. The items below are the application implementation I worked on.",

  contributions: [
    "Product scoping",
    "User-group definition",
    "Requirements development",
    "Student and researcher workflows",
    "React Native application development",
    "TypeScript implementation",
    "Supabase database architecture",
    "Authentication",
    "Storage integration",
    "Roboflow model integration",
    "Claude API integration",
    "Supabase Edge Function",
    "Prediction comparison logic",
    "Offline queue and synchronization",
    "GPS-tagged observation workflow",
    "FBI calculations",
    "EPT richness calculations",
    "Site dashboards",
    "Classroom functionality",
    "Vercel deployment",
    "EAS build configuration",
    "Documentation",
    "Testing",
    "Maintainer handoff",
  ],

  outcomes: [
    { value: "13", label: "Aquatic macroinvertebrate taxa" },
    { value: "1,482", label: "Augmented training images" },
    { value: "83.9%", label: "mAP, RF-DETR training evaluation", note: "Detection metric, not general accuracy" },
    { value: "2", label: "Independent AI analyses per image" },
    { value: "Cross-platform", label: "iOS, Android, and Web deployment" },
    { value: "Offline-first", label: "Field capture with queued sync" },
  ],
  outcomesExtra: [
    "Automatic FBI calculation",
    "Automatic EPT richness calculation",
    "GPS-tagged observations",
  ],

  lessons: [
    "An ambitious concept is not enough without a functioning core workflow.",
    "User value must be defined before adding features.",
    "General-purpose and specialized models require different evaluation methods.",
    "Model disagreement can be useful information.",
    "Generated explanations must be framed carefully.",
    "Field applications require offline and operational thinking.",
    "Responsible AI includes deciding what not to automate.",
    "A system is not complete until another person can understand and maintain it.",
  ],
};

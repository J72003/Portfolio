export const SKILL_GROUPS = [
  {
    group: "AI & machine learning",
    items: [
      "Claude API", "Anthropic SDK", "Computer vision", "PyTorch", "ResNet", "RF-DETR",
      "Model evaluation", "Precision", "Recall", "F1", "Failure-case analysis",
      "Grad-CAM", "Integrated Gradients", "Responsible AI", "LLM evaluation", "Human review",
    ],
  },
  {
    group: "Programming",
    items: ["Python", "SQL", "TypeScript", "JavaScript", "React", "React Native", "Node.js", "FastAPI", "Java", "Kotlin"],
  },
  {
    group: "Data & analytics",
    items: [
      "PostgreSQL", "Supabase", "MySQL", "Excel", "Tableau", "Power BI", "Matplotlib",
      "Data cleaning", "Funnel analysis", "KPI design", "Experiment analysis",
    ],
  },
  {
    group: "Product & research",
    items: [
      "UX research", "Stakeholder interviews", "Requirements gathering", "User stories",
      "Acceptance criteria", "Journey mapping", "Competitive intelligence", "Product metrics",
      "Agile", "Jira", "Figma",
    ],
  },
  {
    group: "Cloud & development",
    items: ["Git", "GitHub", "Vercel", "EAS Build", "Supabase Edge Functions", "REST APIs", "CI", "Docker"],
  },
  {
    group: "Enterprise tools",
    items: ["Salesforce", "ServiceNow", "Jira"],
  },
  {
    group: "Communication",
    items: [
      "Research presentations", "Executive readouts", "Journalism", "Photography",
      "Workshop facilitation", "Community organizing", "Visual storytelling",
    ],
  },
];

export const EDUCATION = {
  institution: "Texas A&M University–San Antonio",
  degree: "Bachelor of Science in Computer Science",
  graduation: "2026",
  highlights: [
    "Honors College",
    "NSF S-STEM Scholar",
    "DoD VICEROY Scholar",
    "Presidential Leadership Class",
    "ACM-published research",
    "Interdisciplinary research recognition",
  ],
  // Verified from LinkedIn (issuer · date · credential ID).
  certifications: [
    { name: "Technical Support Fundamentals", issuer: "Google", date: "May 2026", id: "7PGH6K9O3VOQ", verified: true },
    { name: "Product Manager", issuer: "Uxcel", date: "Mar 2026", id: "WY9Q714WQBCG", verified: true },
    { name: "UX/UI Designer", issuer: "Uxcel", date: "Feb 2026", id: "P1J582W3YEL6", verified: true },
    { name: "Neural Networks and Deep Learning", issuer: "DeepLearning.AI", date: "Jul 2024", id: "SFQGYFKV49M5", verified: true },
    { name: "Claude 101", issuer: "Anthropic", status: "confirm" },
    { name: "AI Fluency", issuer: "", status: "confirm" },
    { name: "CodePath Android (AND101)", issuer: "CodePath", status: "confirm" },
    { name: "OWASP Top 10 for LLM Applications", issuer: "OWASP", status: "confirm" },
  ],
};

export const CLAUDE_CORPS = [
  {
    capability: "Discover & scope",
    items: ["Frost Bank product and UX research", "InverteQuest user and field workflows"],
  },
  {
    capability: "Build with Claude",
    items: ["Claude Haiku integration", "Server-side Anthropic API", "Dual-model image workflow"],
  },
  {
    capability: "Enable an organization",
    items: ["Executive presentations", "Research presentations", "Community leadership", "Documentation and handoff"],
  },
  {
    capability: "Exercise judgment",
    items: ["Model disagreement", "Human confirmation", "Avoiding unsupported accuracy claims", "Reducing scope after setbacks"],
  },
  {
    capability: "Social impact",
    items: ["Environmental education", "Freshwater monitoring", "ASA cultural programming", "Student community-building"],
  },
  {
    capability: "Utility-player experience",
    items: ["Software", "Research", "Data", "Product", "Photography", "Journalism", "Event operations", "Fundraising", "Volunteer coordination"],
  },
];

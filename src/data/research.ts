export const PORTRAID = {
  title: "PortrAid",
  subtitle: "AI-Driven Portrait Assistant for Professional-Quality Image Composition",
  intro:
    "PortrAid helps non-experts understand whether a portrait is well composed. The system learns composition by distinguishing uncropped portraits from deliberately cropped examples, forcing the model to identify visual patterns associated with framing and composition.",
  collaboration:
    "Completed with faculty mentorship and collaboration from Dr. Gongbo “Tony” Liang.",
  highlights: [
    "More than 60,000 portrait images",
    "Modified ResNet-50 architecture",
    "Multi-scale composition analysis",
    "Micro-level facial detail",
    "Meso-level subject positioning",
    "Macro-level overall composition",
    "Precision, recall, and F1 evaluation",
    "Failure-case analysis",
    "Grad-CAM",
    "Integrated Gradients",
    "Web-based interface",
  ],
  publications: [
    "ACM Southeast 2025, publication and presentation",
    "Great Plains Honors Conference, presentation",
  ],
  metrics: [
    { value: "91.84%", label: "Baseline accuracy" },
    { value: "0.9663", label: "Precision, detecting suboptimal captures", note: "per archived symposium abstract" },
    { value: "~0.15s", label: "Processing time per image (standard hardware)" },
    { value: "60,000+", label: "Portrait images" },
    { value: "ResNet-50", label: "Modified, multi-scale architecture" },
    { value: "ACM SE 2025", label: "Published & presented" },
  ],
  sections: [
    {
      title: "Research problem",
      body: "Non-experts struggle to judge whether a portrait is well composed. PortrAid frames composition as a learnable signal by contrasting uncropped portraits against deliberately cropped examples, pushing the model to surface the visual patterns tied to framing.",
    },
    {
      title: "Model architecture",
      body: "A modified ResNet-50 analyzes composition at multiple scales: micro-level facial detail, meso-level subject positioning, and macro-level overall composition.",
    },
    {
      title: "Evaluation",
      body: "Evaluated with precision, recall, and F1 rather than a single accuracy figure, with a 91.84% baseline accuracy reported. Confusion patterns and individual failures were inspected directly.",
    },
    {
      title: "Interpretability",
      body: "Grad-CAM and Integrated Gradients were used to examine where the model attended and whether its focus aligned with meaningful compositional regions.",
    },
    {
      title: "Failure cases",
      body: "Failure-case analysis identified where the model's judgments broke down, informing an honest read on reliability rather than a demo-driven one.",
    },
    {
      title: "User-facing application",
      body: "A web-based interface makes the composition assessment usable by non-experts.",
    },
    {
      title: "Publication and presentation",
      body: "Published and presented at ACM Southeast 2025 and presented at the Great Plains Honors Conference.",
    },
    {
      title: "My contributions",
      body: "I worked on the model implementation and training, the evaluation (precision, recall, F1, confusion analysis, and failure cases), the interpretability work with Grad-CAM and Integrated Gradients, and the user-facing web interface, carried out as collaborative research under faculty mentorship from Dr. Gongbo “Tony” Liang.",
    },
    {
      title: "What I would improve",
      body: "Broaden evaluation beyond the baseline split, stress-test on more diverse portrait styles, and further validate that interpretability maps correspond to genuine compositional reasoning.",
    },
  ],
  lesson:
    "PortrAid taught me not to rely on a single metric and to inspect precision, recall, F1, confusion patterns, and individual failures.",
};

export const STREETWEAR = {
  title: "Streetwear Across the World",
  recognition: "Third Place, Junior/Senior Research Poster Category",
  event: "San Antonio Honors Student Research Symposium, 2026",
  themes: ["Culture", "Identity", "Globalization", "Social influence", "Regional expression", "Media", "Community"],
  framing:
    "A digital-humanities and interdisciplinary research project, not an AI project.",
  relevance:
    "The project demonstrates the ability to enter an unfamiliar field, investigate cultural systems, synthesize qualitative information, create an interactive digital experience, and present findings to an interdisciplinary audience.",
};

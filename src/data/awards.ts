export type AwardType = "Individual" | "Team" | "Publication" | "Scholarship" | "Program";

export interface Award {
  title: string;
  detail: string;
  type: AwardType;
  medal: string;
}

export const AWARDS: Award[] = [
  {
    title: "ACM Southeast 2025, publication & presentation",
    detail: "PortrAid, peer-reviewed publication and presentation",
    type: "Publication",
    medal: "📄",
  },
  {
    title: "Third Place, San Antonio Honors Student Research Symposium",
    detail: '"Streetwear Across the World," Junior/Senior Research Poster (2026)',
    type: "Individual",
    medal: "🥉",
  },
  {
    title: "Third Place, TIPA Environmental Portrait",
    detail: '"Double Life, Bill Bush" (Texas Intercollegiate Press Association)',
    type: "Individual",
    medal: "🥉",
  },
  {
    title: "SPJ Region 8 Mark of Excellence, finalist",
    detail: '"Fashion Without Limits", collaborative project',
    type: "Team",
    medal: "🏅",
  },
  {
    title: "El Espejo, national MediaFest recognition",
    detail: "Contributor during the publication's national recognition, including a third-place publication honor",
    type: "Publication",
    medal: "📄",
  },
  {
    title: "Second Place, HackUTD Frontier Internet track",
    detail: "Collaborative hackathon project",
    type: "Team",
    medal: "🥈",
  },
  {
    title: "Official of the Year, Recreational Sports (2024)",
    detail: "Intramural officiating recognition",
    type: "Individual",
    medal: "🏅",
  },
  {
    title: "Intramural Innovator, Recreational Sports",
    detail: "Recognition for introducing and supporting new ideas",
    type: "Individual",
    medal: "🏅",
  },
  {
    title: "Texas STEM Signing Day honoree",
    detail: "Supported by Boeing",
    type: "Program",
    medal: "🎓",
  },
  {
    title: "Honors College recognition",
    detail: "Texas A&M University–San Antonio Honors College",
    type: "Program",
    medal: "🎓",
  },
  {
    title: "NSF S-STEM Scholar",
    detail: "National Science Foundation scholarship",
    type: "Scholarship",
    medal: "🔬",
  },
  {
    title: "DoD VICEROY Scholar",
    detail: "Department of Defense program",
    type: "Scholarship",
    medal: "🛡️",
  },
];

export const AWARD_TYPES: AwardType[] = [
  "Individual",
  "Team",
  "Publication",
  "Scholarship",
  "Program",
];

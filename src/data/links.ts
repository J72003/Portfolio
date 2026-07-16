/**
 * EDITABLE PLACEHOLDERS, replace every "#TODO-..." value with a real URL.
 * Links still set to a placeholder render with a visible "add link" marker
 * so nothing ships half-finished by accident.
 */
export const LINKS = {
  email: "kahlonjaspalwork@gmail.com",
  linkedin: "https://www.linkedin.com/in/jaspalkahlon720/",
  github: "https://github.com/J72003",
  resumePdf: "/Jaspal-Kahlon-Resume.pdf",
  inverteQuestApp: "https://invert-quest.vercel.app/",
  inverteQuestRepo: "#TODO-invertequest-repository-url",
  portrAidPublication: "https://dl.acm.org/doi/10.1145/3696673.3723059",
  portfolioDomain: "#TODO-portfolio-domain",
  photographyPortfolio: "https://jsk-dusky.vercel.app/",
};

export const isPlaceholder = (url: string) => url.startsWith("#TODO");

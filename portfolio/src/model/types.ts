export enum Language {
  DANISH = "dk",
  ENGLISH = "en",
}

export interface ComponentProps {
  onIntersectionChange: (sectionName: string) => void;
}

//-------STRINGS-------

//NAV STRINGS
interface navString {
  stringName: string;
  stringRecord: Record<Language, string>;
}

export const navStrings: navString[] = [
  {
    stringName: "home",
    stringRecord: {
      [Language.ENGLISH]: "Home",
      [Language.DANISH]: "Hjem",
    },
  },
  {
    stringName: "about me",
    stringRecord: {
      [Language.ENGLISH]: "About Me",
      [Language.DANISH]: "Om Mig",
    },
  },
  {
    stringName: "projects",
    stringRecord: {
      [Language.ENGLISH]: "Projects",
      [Language.DANISH]: "Projekter",
    },
  },
  {
    stringName: "skills",
    stringRecord: {
      [Language.ENGLISH]: "Skills",
      [Language.DANISH]: "Færdigheder",
    },
  },
];

//HERO STRINGS
export const welcomeTagString: Record<Language, string> = {
  [Language.DANISH]: "Hej, Jeg er",
  [Language.ENGLISH]: "Hello, I Am",
};

export const devString: Record<Language, string> = {
  [Language.DANISH]: "Udvikler",
  [Language.ENGLISH]: "Developer",
};

export const btnSeeProjectsString: Record<Language, string> = {
  [Language.DANISH]: "Se Mit Arbejde",
  [Language.ENGLISH]: "See My Work",
};

export const btnHireMeString: Record<Language, string> = {
  [Language.DANISH]: "Hyr Mig",
  [Language.ENGLISH]: "Hire Me",
};

export const btnGetMyInfoString: Record<Language, string> = {
  [Language.DANISH]: "Mit Kontakt Info",
  [Language.ENGLISH]: "Get My Info",
};

//ABOUT STRINGS
export const btnContactMeString: Record<Language, string> = {
  [Language.DANISH]: "Kontakt Mig",
  [Language.ENGLISH]: "Contact Me",
};

export const taglineString: Record<Language, string> = {
  [Language.DANISH]: "Drevet af passion, fokuseret på fremragenhed.",
  [Language.ENGLISH]: "Driven by passion, focused on excellence.",
};

export const aboutTaglineStringPart1: Record<Language, string> = {
  [Language.DANISH]: "Jeg skaber elegante",
  [Language.ENGLISH]: "I create elegant",
};

export const aboutTaglineStringPart2: Record<Language, string> = {
  [Language.DANISH]: "digitale løsninger",
  [Language.ENGLISH]: "digital solutions",
};

export const aboutTaglineStringPart3: Record<Language, string> = {
  [Language.DANISH]: "Til dit brand.",
  [Language.ENGLISH]: "For your brand.",
};

//SKILLS STRINGS

export const taglineSkillsString: Record<Language, string> = {
  [Language.DANISH]: "Præcision og ekspertise i hvert projekt.",
  [Language.ENGLISH]: "Precision and expertise in every project.",
};

export const devSkillsString: Record<Language, string> = {
  [Language.DANISH]: "Udvikling",
  [Language.ENGLISH]: "Development",
};

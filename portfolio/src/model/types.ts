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

export const languageString: Record<Language, string> = {
  [Language.DANISH]: "Sprog",
  [Language.ENGLISH]: "Language",
};

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
  [Language.DANISH]: "Til dit brand",
  [Language.ENGLISH]: "For your brand",
};

export const aboutKeywordString1: Record<Language, string> = {
  [Language.DANISH]: "Problem",
  [Language.ENGLISH]: "Problem",
};

export const aboutKeywordString2: Record<Language, string> = {
  [Language.DANISH]: "Løser",
  [Language.ENGLISH]: "Solver",
};

export const aboutKeywordString3: Record<Language, string> = {
  [Language.DANISH]: "Detalje",
  [Language.ENGLISH]: "Attention",
};

export const aboutKeywordString4: Record<Language, string> = {
  [Language.DANISH]: "Orienteret",
  [Language.ENGLISH]: "to Detail",
};

export const aboutKeywordString5: Record<Language, string> = {
  [Language.DANISH]: "Team",
  [Language.ENGLISH]: "Team",
};

export const aboutKeywordString6: Record<Language, string> = {
  [Language.DANISH]: "Player",
  [Language.ENGLISH]: "Player",
};

//SKILLS STRINGS

export const taglineSkillsString1: Record<Language, string> = {
  [Language.DANISH]: "Præcision og",
  [Language.ENGLISH]: "Precision and",
};
export const taglineSkillsString2: Record<Language, string> = {
  [Language.DANISH]: "ekspertise",
  [Language.ENGLISH]: "expertise",
};
export const taglineSkillsString3: Record<Language, string> = {
  [Language.DANISH]: "i hvert projekt",
  [Language.ENGLISH]: "in every project",
};

export const devSkillsString: Record<Language, string> = {
  [Language.DANISH]: "Udvikling",
  [Language.ENGLISH]: "Development",
};

export enum Language {
  DANISH = "dk",
  ENGLISH = "en",
}

export interface ComponentProps {
  onIntersectionChange: (sectionName: string) => void;
}

//-------STRINGS-------


//PROJECT STRINGS

interface projectString {
  stringName: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  pictureURL: string;
}

export const projectStrings: projectString[] = [
  {
    stringName: 'Project 1',
    title: {
      [Language.ENGLISH]: "Webshop - TrendThread",
      [Language.DANISH]: "Webshop - TrendThread",
    },
    description: {
      [Language.ENGLISH]: "...",
      [Language.DANISH]: "...",
    },
    pictureURL: 'https://ik.imagekit.io/nvtcacenco/Portfolio/project1/project_1_img_2.webp'
  },
  {
    stringName: 'Project 2',
    title: {
      [Language.ENGLISH]: "Landing Page - Restaurant",
      [Language.DANISH]: "Landing Page - Restaurant",
    },
    description: {
      [Language.ENGLISH]: "...",
      [Language.DANISH]: "...",
    },
    pictureURL: 'https://ik.imagekit.io/nvtcacenco/Portfolio/project2/project_2_img_1.webp'
  },
  {
    stringName: 'Project 3',
    title: {
      [Language.ENGLISH]: "Landing Page - Business",
      [Language.DANISH]: "Landing Page - Business",
    },
    description: {
      [Language.ENGLISH]: "...",
      [Language.DANISH]: "...",
    },
    pictureURL: 'https://ik.imagekit.io/nvtcacenco/Portfolio/project3/project_3_img_1.webp'
  }
]

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
export const aboutMeString: Record<Language, string> = {
  [Language.DANISH]:
    "Som en passioneret softwareudvikler med specialisering i frontend og webudvikling, brænder jeg for at omdanne idéer til engagerende og brugervenlige oplevelser. Med et skarpt øje for design og en god beherskelse af moderne webteknologier som HTML5, CSS3 og JavaScript, skaber jeg responsive websites og webapplikationer, der ikke kun ser fantastiske ud, men også fungerer problemfrit på tværs af forskellige platforme. Mit mål er at skabe intuitive grænseflader, der forbedrer brugerinteraktionen og efterlader et varigt indtryk.",
  [Language.ENGLISH]:
    "As a passionate software developer specializing in frontend and web development, I thrive on transforming ideas into engaging, user-friendly experiences. With a keen eye for design and a strong command of modern web technologies like HTML5, CSS3, and JavaScript, I create responsive websites and web applications that not only look great but also perform seamlessly across various platforms. My goal is to craft intuitive interfaces that enhance user interaction and leave a lasting impression.",
};

export const aboutMeEndingString: Record<Language, string> = {
  [Language.DANISH]: "Lad os skabe noget fantastisk sammen!",
  [Language.ENGLISH]: "Let's build something amazing together!",
};

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

export const devSkillsFrontendString: Record<Language, string> = {
  [Language.DANISH]:
    "Jeg skaber dynamiske brugergrænseflader med JavaScript, TypeScript, React, Next.js, HTML, CSS, Bootstrap og Tailwind. Mit fokus er på at levere responsive, visuelt tiltalende og pixel-perfekte designs, samtidig med at jeg opretholder høje standarder for tilgængelighed og ydeevne.",
  [Language.ENGLISH]:
    "I create dynamic user interfaces with JavaScript, TypeScript, React, Next.js, HTML, CSS, Bootstrap, and Tailwind. My focus is on delivering responsive, visually appealing and pixel-perfect designs while maintaining high standards of accessibility and performance.",
};

export const devSkillsBackendString: Record<Language, string> = {
  [Language.DANISH]:
    "Jeg bygger robuste server-side applikationer ved hjælp af Node.js, Express, MongoDB, SQL, Firebase og Next.js. Jeg sikrer effektiv datastyring og problemfri server-side rendering.",
  [Language.ENGLISH]:
    "I build robust server-side applications using Node.js, Express, MongoDB, SQL, Firebase, and Next.js. I ensure efficient data management and seamless server-side rendering.",
};

export const devSkillsAppString: Record<Language, string> = {
  [Language.DANISH]:
    "Jeg udvikler højtydende mobilapps med React Native, Java og C#. Min ekspertise spænder over cross-platform løsninger og native funktionalitet til både iOS og Android.",
  [Language.ENGLISH]:
    "I develop high-performance mobile apps with React Native, Java, and C#. My expertise spans cross-platform solutions and native functionality for both iOS and Android.",
};

export const otherSkillsAgileString1: Record<Language, string> = {
  [Language.DANISH]: "Agile",
  [Language.ENGLISH]: "Agile",
};

export const otherSkillsAgileString2: Record<Language, string> = {
  [Language.DANISH]: "Erfaring",
  [Language.ENGLISH]: "Experience",
};

export const otherSkillsClientString1: Record<Language, string> = {
  [Language.DANISH]: "Klient",
  [Language.ENGLISH]: "Client",
};

export const otherSkillsClientString2: Record<Language, string> = {
  [Language.DANISH]: "Kommunikation",
  [Language.ENGLISH]: "Communication",
};

export const otherSkillsGitString1: Record<Language, string> = {
  [Language.DANISH]: "Version kontrol",
  [Language.ENGLISH]: "Version control",
};

export const otherSkillsGitString2: Record<Language, string> = {
  [Language.DANISH]: "(Git)",
  [Language.ENGLISH]: "(Git)",
};

export const otherSkillsTeamString1: Record<Language, string> = {
  [Language.DANISH]: "Hold samarbejde",
  [Language.ENGLISH]: "Team collaboration",
};

export const otherSkillsTeamString2: Record<Language, string> = {
  [Language.DANISH]: "(Jira, Trello, Slack)",
  [Language.ENGLISH]: "(Jira, Trello, Slack)",
};
//FOOTER STRINGS

export const footerString1: Record<Language, string> = {
  [Language.DANISH]: "Få Fat på Mig",
  [Language.ENGLISH]: "Get in Touch",
};

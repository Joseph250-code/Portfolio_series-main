
/**
 * Central portfolio data for Joseph Mbugua Wamaitha.
 * Keep personal facts accurate. Add achievements, certifications and further
 * experience only after the supporting details have been provided.
 */

export type Palette = {
  from: string;
  via: string;
  to: string;
  accent: string;
};

export const profile = {
  fullName: 'Joseph Mbugua Wamaitha',
  displayName: 'Joseph Mbugua',
  firstName: 'JOSEPH',
  seriesTag: 'THE SERIES',
  originalLabel: 'A JOSEPH ORIGINAL',
  role: 'Computer Science Student & Developer',
  tagline: ['Software Engineering', 'Cybersecurity', 'Web Development'],
  intro:
    'A Computer Science student at the University of Embu with an interest in software engineering, cybersecurity and building useful digital products. I work with web technologies and Python, and enjoy turning practical problems into clear, functional applications.',
  location: 'Kenya',
  email: 'josembugua794@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/joseph-mbugua-6750262a1/',
    github: 'https://github.com/Joseph250-code',
  },
  resumePdf: '',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet:
      '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Joseph Mbugua',
  },
  interests: [
    'Software Engineering',
    'Cybersecurity',
    'UI/UX Design',
    'Cloud Computing',
  ],
};

export const education = [
  {
    school: 'University of Embu',
    place: 'Embu, Kenya',
    degree: 'Computer Science',
    period: 'Present',
    score: '',
  },
  {
    school: 'Key College',
    place: 'Kenya',
    degree: 'Certificate in Website Development',
    period: 'March 2025 – June 2025',
    score: '',
  },
  {
    school: 'Kiambu High School',
    place: 'Kenya',
    degree: 'Kenya Certificate of Secondary Education (KCSE)',
    period: '2021 – 2024',
    score: '',
  },
  {
    school: 'Kwangethe Primary School',
    place: 'Kenya',
    degree: 'Kenya Certificate of Primary Education (KCPE)',
    period: '2013 – 2021',
    score: '',
  },
];

/**
 * Work experience structure.
 * The array remains empty until verified employment or professional
 * experience details are provided.
 */
export type Experience = {
  company: string;
  role: string;
  period: string;
  points: string[];
};

export const experience: Experience[] = [];

export type Metric = {
  value: string;
  label: string;
};

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'afya-smart',
    title: 'Afya Smart',
    year: '2026',
    genre: 'HealthTech • Full-Stack • Digital Health',
    logline:
      'A digital healthcare platform concept designed to connect patients, healthcare professionals and pharmacy workflows.',
    stack: ['Python', 'FastAPI', 'Supabase', 'HTML', 'CSS', 'JavaScript'],
    build: [
      'Designed a healthcare platform with a backend built around FastAPI and Supabase, with a web interface for patients and healthcare personnel.',
      'Planned connected workflows for appointments, patient medical histories, treatment records, prescriptions, pharmacy stock and notifications.',
      'Structured the system around role-based access for patients, doctors, nurses, pharmacists and hospital administrators.',
    ],
    features: [
      'Patient and healthcare-professional accounts',
      'Appointment requests and status updates',
      'Patient medical histories and treatment records',
      'Prescription and pharmacy workflows',
      'Medication reminders and notifications',
      'Role-based hospital access',
    ],
    metrics: [],
    palette: {
      from: '#04121f',
      via: '#0f4c6e',
      to: '#05080d',
      accent: '#4cc9ff',
    },
    motif: 'shield',
  },
  {
    id: 'joedesigns',
    title: 'JoeDEsigns',
    year: '2026',
    genre: 'Creative Technology • Web Design • Branding',
    logline:
      'A creative design brand focused on building visual identities, websites and digital experiences for people and businesses.',
    stack: ['HTML', 'CSS', 'JavaScript', 'React', 'Framer', 'WordPress'],
    build: [
      'Developed a personal creative brand focused on website design, visual identity and digital branding.',
      'Worked with modern web technologies and no-code tools to create responsive websites and polished user experiences.',
      'Defined service packages for logo design, website design, social media design and branding kits.',
    ],
    features: [
      'Website design and development',
      'Logo and visual identity design',
      'Social media design',
      'Branding kits',
      'Responsive layouts and UI/UX design',
    ],
    metrics: [],
    github: 'https://github.com/Joseph250-code',
    palette: {
      from: '#160b2a',
      via: '#442078',
      to: '#090711',
      accent: '#b98bff',
    },
    motif: 'flow',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [];

export type Certification = {
  issuer: string;
  name: string;
  link: string;
};

export const certifications: Certification[] = [];

export type Skill = {
  name: string;
  mono: string;
  note?: string;
};

export type SkillCategory = {
  id: string;
  title: string;
  subtitle: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Programming Languages',
    subtitle: 'Programming foundations',
    skills: [
      { name: 'Python', mono: 'Py' },
      { name: 'Java', mono: 'Ja' },
      { name: 'JavaScript', mono: 'Js' },
      { name: 'R', mono: 'R' },
      { name: 'PHP', mono: 'Ph' },
      { name: 'C', mono: 'C' },
      { name: 'C++', mono: 'C+' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    subtitle: 'Interfaces & the web platform',
    skills: [
      { name: 'HTML', mono: 'Ht' },
      { name: 'CSS', mono: 'Cs' },
      { name: 'React', mono: 'Re' },
      { name: 'JavaScript', mono: 'Js' },
      { name: 'Responsive Design', mono: 'Rd' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend Development',
    subtitle: 'Server-side development',
    skills: [
      { name: 'FastAPI', mono: 'Fa' },
      { name: 'Python', mono: 'Py' },
      { name: 'PHP', mono: 'Ph' },
      { name: 'API Integration', mono: 'Ap' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    subtitle: 'Data storage & integration',
    skills: [
      { name: 'Database Management', mono: 'Db' },
      { name: 'Supabase', mono: 'Sb' },
      { name: 'MySQL', mono: 'My' },
    ],
  },
  {
    id: 'mobile',
    title: 'Mobile Development',
    subtitle: 'Mobile application development',
    skills: [
      { name: 'Mobile Development', mono: 'Mb' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Platforms',
    subtitle: 'Building, shipping & collaboration',
    skills: [
      { name: 'Git', mono: 'Gt' },
      { name: 'GitHub', mono: 'Gh' },
      { name: 'Framer', mono: 'Fr' },
      { name: 'WordPress', mono: 'Wp' },
    ],
  },
  {
    id: 'design',
    title: 'Design',
    subtitle: 'Digital experiences',
    skills: [
      { name: 'UI/UX', mono: 'Ux' },
      { name: 'Web Design', mono: 'Wd' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped.
 * Keep entries aligned with projects and verified experience.
 */
export const skillEvidence: Record<string, string[]> = {
  Python: ['Afya Smart'],
  FastAPI: ['Afya Smart'],
  Supabase: ['Afya Smart'],
  HTML: ['JoeDEsigns', 'Website Development'],
  CSS: ['JoeDEsigns', 'Website Development'],
  JavaScript: ['JoeDEsigns', 'Web development'],
  React: ['JoeDEsigns'],
  MySQL: ['Web application development'],
  Git: ['GitHub'],
  GitHub: ['Project repositories'],
  Framer: ['JoeDEsigns'],
  WordPress: ['JoeDEsigns'],
  'UI/UX': ['JoeDEsigns'],
  'Responsive Design': ['JoeDEsigns'],
  'Web Design': ['JoeDEsigns'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = {
  from: '#24060b',
  via: '#6e0d1d',
  to: '#09070a',
  accent: '#ff3d5a',
};

const amber: Palette = {
  from: '#1c1003',
  via: '#6b3c06',
  to: '#0a0806',
  accent: '#ffb547',
};

const ocean: Palette = {
  from: '#04121f',
  via: '#0f4c6e',
  to: '#05080d',
  accent: '#4cc9ff',
};

const violet: Palette = {
  from: '#120822',
  via: '#3d1a6e',
  to: '#07060c',
  accent: '#b98bff',
};

const jade: Palette = {
  from: '#03150f',
  via: '#0d5a40',
  to: '#050a08',
  accent: '#46e3a8',
};

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundations',
    period: 'Education',
    synopsis:
      'Building a foundation in computing, programming and web development.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Student',
        description:
          'Studying Computer Science at the University of Embu.',
        tags: ['Computer Science', 'University of Embu'],
        runtime: 'Present',
        palette: violet,
      },
      {
        code: 'S01 E02',
        title: 'The Web Developer',
        description:
          'Completed a Certificate in Website Development at Key College.',
        tags: ['HTML', 'CSS', 'JavaScript'],
        runtime: 'March 2025 – June 2025',
        palette: amber,
      },
    ],
  },
  {
    number: 2,
    title: 'Learning to Build',
    period: 'Projects',
    synopsis:
      'Applying technical and creative skills to practical digital products.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The HealthTech Builder',
        description:
          'Working on Afya Smart, a digital healthcare platform concept with patient, clinical and pharmacy workflows.',
        tags: ['Python', 'FastAPI', 'Supabase'],
        runtime: '2026',
        palette: ocean,
      },
      {
        code: 'S02 E02',
        title: 'The Creative Developer',
        description:
          'Building JoeDEsigns around web design, visual identity and digital branding.',
        tags: ['Web Design', 'UI/UX', 'Framer'],
        runtime: '2026',
        palette: jade,
      },
    ],
  },
  {
    number: 3,
    title: 'The Next Chapter',
    period: 'In progress',
    synopsis:
      'Growing toward a career in software engineering and cybersecurity.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Engineer',
        description:
          'Developing stronger programming, software design and problem-solving skills.',
        tags: ['Software Engineering', 'Programming'],
        runtime: 'In progress',
        palette: crimson,
      },
      {
        code: 'S03 E02',
        title: 'The Security Mindset',
        description:
          'Exploring cybersecurity and the principles behind building safer systems.',
        tags: ['Cybersecurity', 'Secure Systems'],
        runtime: 'In progress',
        palette: violet,
      },
    ],
  },
];

export type TopPick = {
  label: string;
  title: string;
  detail: string;
  palette: Palette;
};

export const topPicks: TopPick[] = [
  {
    label: 'Current study',
    title: 'Computer Science',
    detail: 'University of Embu',
    palette: ocean,
  },
  {
    label: 'HealthTech project',
    title: 'Afya Smart',
    detail: 'Digital healthcare platform',
    palette: crimson,
  },
  {
    label: 'Creative brand',
    title: 'JoeDEsigns',
    detail: 'Web design & digital branding',
    palette: violet,
  },
  {
    label: 'Career direction',
    title: 'Software Engineering',
    detail: 'Building practical software products',
    palette: jade,
  },
  {
    label: 'Growing interest',
    title: 'Cybersecurity',
    detail: 'Learning to build safer digital systems',
    palette: amber,
  },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = {
  kicker: string;
  title: string;
  lines: string[];
  chips?: string[];
};

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'Computer Science',
    lines: ['University of Embu', 'Kenya'],
    chips: ['Software Engineering', 'Cybersecurity'],
  },
  {
    kicker: 'Skills',
    title: 'Building for the web.',
    lines: [
      'Python, R, Java, JavaScript, PHP, C and C++',
      'HTML, CSS, React, FastAPI, Supabase, MySQL, Git and GitHub',
    ],
    chips: ['Python', 'Java', 'React', 'FastAPI', 'Supabase', 'Git'],
  },
  {
    kicker: 'Projects',
    title: 'Ideas into products.',
    lines: [
      'Afya Smart — a digital healthcare platform',
      'JoeDEsigns — web design and digital branding',
    ],
  },
  {
    kicker: 'Current mission',
    title: 'The next chapter',
    lines: [
      'Software Engineering · Cybersecurity · Building useful technology',
    ],
  },
];

export type ProfileId =
  | 'joseph'
  | 'recruiter'
  | 'developer'
  | 'creative';

export type SectionId =
  | 'about'
  | 'journey'
  | 'originals'
  | 'picks'
  | 'skills'
  | 'moments'
  | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'joseph',
    name: 'Joseph',
    blurb: 'The full portfolio, in order',
    color: '#4cc9ff',
    order: [
      'about',
      'journey',
      'originals',
      'picks',
      'skills',
      'moments',
      'story',
    ],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Education, projects & skills first',
    color: '#4cc9ff',
    order: [
      'story',
      'skills',
      'originals',
      'about',
      'journey',
      'picks',
      'moments',
    ],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: [
      'originals',
      'skills',
      'journey',
      'about',
      'picks',
      'story',
      'moments',
    ],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'Design, story & highlights first',
    color: '#ffb547',
    order: [
      'journey',
      'picks',
      'originals',
      'about',
      'skills',
      'story',
      'moments',
    ],
  },
];

export const sectionMeta: Record<
  SectionId,
  { nav: string; card: string; meta: string; palette: Palette }
> = {
  about: {
    nav: 'About',
    card: 'About Me',
    meta: 'The Pilot • Education & interests',
    palette: violet,
  },
  journey: {
    nav: 'Journey',
    card: 'My Journey',
    meta: `${seasons.length} Seasons • ${seasons.reduce(
      (n, s) => n + s.episodes.length,
      0,
    )} Episodes`,
    palette: amber,
  },
  originals: {
    nav: 'Projects',
    card: 'My Projects',
    meta: `${projects.length} Projects`,
    palette: crimson,
  },
  picks: {
    nav: 'Highlights',
    card: 'Highlights',
    meta: 'A few things about my work',
    palette: jade,
  },
  skills: {
    nav: 'Skills',
    card: 'My Skills',
    meta: `${skillCategories.length} Categories`,
    palette: ocean,
  },
  moments: {
    nav: 'Achievements',
    card: 'Achievements & Certifications',
    meta: 'To be updated',
    palette: crimson,
  },
  story: {
    nav: 'Resume',
    card: 'The Full Story',
    meta: 'Resume • View & download',
    palette: violet,
  },
};

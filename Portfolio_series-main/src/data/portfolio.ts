/**
 * Central portfolio data for Joseph Mbugua Wamaitha.
 * Keep personal facts accurate. Project-based experience is presented separately
 * from formal employment. Add achievements and certifications when verified.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Joseph Mbugua Wamaitha',
  displayName: 'Joseph Mbugua',
  firstName: 'JOSEPH',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A JOSEPH ORIGINAL',
  role: 'Software Developer & Computer Science Student',
  tagline: ['Software Engineering', 'Cybersecurity', 'Full-Stack Development'],
  intro:
    'A Computer Science student at the University of Embu with 33 months of hands-on development experience. I build practical web applications, business tools and digital platforms, with a growing focus on software engineering, cybersecurity and secure, reliable systems.',
  location: 'Kenya',
  email: 'josembugua794@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/joseph-mbugua-6750262a1/',
    github: 'https://github.com/Joseph250-code',
  },
  // Add the final resume PDF to /public/assets and update this path when ready.
  resumePdf: '',
  portrait: {
    // Replace these assets with your own portrait files if they still contain the template owner's photo.
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Joseph Mbugua',
  },
  interests: ['Software Engineering', 'Cybersecurity', 'UI/UX Design', 'Cloud Computing'],
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

export type Experience = {
  company: string;
  role: string;
  place: string;
  period: string;
  points: string[];
};

// Project-based experience, not a claim of 33 months in formal employment.
export const experience: Experience[] = [
  {
    company: 'Independent Projects & Development',
    role: 'Software Developer',
    place: 'Kenya',
    period: '33 months of hands-on experience',
    points: [
      'Built and developed web-based projects spanning healthcare, point-of-sale operations, business compliance information and creative web experiences.',
      'Worked across frontend development, application logic, API integration, database-backed features and responsive interface design.',
      'Currently developing Net Guard, a network-security project, while continuing to improve software engineering and cybersecurity skills.',
    ],
  },
];

export type Metric = { value: string; label: string };

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
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
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
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
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
    palette: { from: '#160b2a', via: '#442078', to: '#090711', accent: '#b98bff' },
    motif: 'flow',
  },
  {
    id: 'duka-manager',
    title: 'Duka Manager',
    year: '2026',
    genre: 'Business Technology • POS • Small Business',
    logline:
      'A point-of-sale web application designed to help small businesses manage everyday sales and shop operations.',
    stack: ['Web Application', 'Point of Sale', 'Business Management'],
    build: [
      'Developed a web-based POS concept focused on the practical needs of small business owners.',
      'Designed the experience around making day-to-day shop operations easier to manage through a digital interface.',
    ],
    features: [
      'Point-of-sale workflow',
      'Small-business sales management',
      'Digital shop operations',
    ],
    metrics: [],
    palette: { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' },
    motif: 'tenants',
  },
  {
    id: 'net-guard',
    title: 'Net Guard',
    year: '2026',
    genre: 'Cybersecurity • Network Security • In Progress',
    logline:
      'A network-security project in development, exploring network scanning and the identification of potential security issues.',
    stack: ['Network Security', 'Port Scanning', 'Web Application'],
    build: [
      'Developing a security-focused tool to explore network scanning and surface information about exposed network ports.',
      'Working through scanning reliability and firewall-related challenges as part of the development process.',
    ],
    features: [
      'Network scanning concepts',
      'Port discovery',
      'Security-focused reporting',
      'Active development',
    ],
    metrics: [],
    palette: { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' },
    motif: 'shield',
  },
  {
    id: 'biashara-compliances',
    title: 'Biashara Compliances',
    year: '2026',
    genre: 'Civic Tech • Business Information • Kenya',
    logline:
      'A web-based guide designed to help people understand the documents, permits and compliance requirements involved in starting a business in Kenya.',
    stack: ['Web Application', 'Business Information', 'Kenyan Compliance'],
    build: [
      'Designed an information-focused platform to make business-startup requirements easier to discover and understand.',
      'Organised the concept around helping users identify relevant documents and compliance steps for starting a business in Kenya.',
    ],
    features: [
      'Business startup document guidance',
      'Kenya-focused compliance information',
      'Requirements discovery',
      'Practical information for aspiring entrepreneurs',
    ],
    metrics: [],
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'flow',
  },
  {
    id: 'pop-culture-websites',
    title: 'Pop Culture Web Experiences',
    year: '2026',
    genre: 'Creative Development • Fan Websites • UI Experiments',
    logline:
      'A collection of just-for-fun themed websites inspired by favourite film, television and anime universes.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    build: [
      'Created themed web experiences as creative experiments in interface design, visual storytelling and frontend development.',
      'Used familiar fictional universes as inspiration for layouts, interactions and distinctive visual directions.',
    ],
    features: [
      'Attack on Titan themed website',
      'Avengers themed website',
      'Spider-Man themed website',
      'Stranger Things themed website',
      'Batman themed website',
    ],
    metrics: [],
    palette: { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' },
    motif: 'tenants',
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

// Add verified achievements when they are provided.
export const achievements: Achievement[] = [];

export type Certification = { issuer: string; name: string; link: string };

// Add verified certifications when they are provided.
export const certifications: Certification[] = [];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Programming Languages',
    subtitle: 'Core programming foundations',
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
      { name: 'JavaScript', mono: 'Js' },
      { name: 'React', mono: 'Re' },
      { name: 'Responsive Design', mono: 'Rd' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend Development',
    subtitle: 'Application logic & integrations',
    skills: [
      { name: 'Python', mono: 'Py' },
      { name: 'FastAPI', mono: 'Fa' },
      { name: 'PHP', mono: 'Ph' },
      { name: 'API Integration', mono: 'Ap' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    subtitle: 'Data storage & application integration',
    skills: [
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
    title: 'Design & Security',
    subtitle: 'Digital experiences and secure systems',
    skills: [
      { name: 'UI/UX', mono: 'Ux' },
      { name: 'Web Design', mono: 'Wd' },
      { name: 'Cybersecurity', mono: 'Cy' },
      { name: 'Network Security', mono: 'Ns' },
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
  HTML: ['JoeDEsigns', 'Pop Culture Web Experiences'],
  CSS: ['JoeDEsigns', 'Pop Culture Web Experiences'],
  JavaScript: ['JoeDEsigns', 'Pop Culture Web Experiences'],
  React: ['JoeDEsigns'],
  Git: ['Project repositories'],
  GitHub: ['Project repositories'],
  Framer: ['JoeDEsigns'],
  WordPress: ['JoeDEsigns'],
  'UI/UX': ['JoeDEsigns', 'Pop Culture Web Experiences'],
  'Responsive Design': ['JoeDEsigns', 'Pop Culture Web Experiences'],
  'Web Design': ['JoeDEsigns', 'Pop Culture Web Experiences'],
  Cybersecurity: ['Net Guard'],
  'Network Security': ['Net Guard'],
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

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundations',
    period: 'Education',
    synopsis: 'Building a foundation in computing, programming and web development.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Student',
        description: 'Studying Computer Science at the University of Embu.',
        tags: ['Computer Science', 'University of Embu'],
        runtime: 'Present',
        palette: violet,
      },
      {
        code: 'S01 E02',
        title: 'The Web Developer',
        description: 'Completed a Certificate in Website Development at Key College.',
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
    synopsis: 'Applying technical and creative skills to practical digital products.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The HealthTech Builder',
        description: 'Working on Afya Smart, a digital healthcare platform concept with patient, clinical and pharmacy workflows.',
        tags: ['Python', 'FastAPI', 'Supabase'],
        runtime: '2026',
        palette: ocean,
      },
      {
        code: 'S02 E02',
        title: 'The Business Builder',
        description: 'Developing Duka Manager and Biashara Compliances to address practical business needs.',
        tags: ['Point of Sale', 'Business Tools', 'Kenya'],
        runtime: '2026',
        palette: jade,
      },
      {
        code: 'S02 E03',
        title: 'The Security Explorer',
        description: 'Building Net Guard, a network-security project currently in progress.',
        tags: ['Cybersecurity', 'Network Security', 'In Progress'],
        runtime: 'In progress',
        palette: crimson,
      },
      {
        code: 'S02 E04',
        title: 'The Creative Developer',
        description: 'Creating themed websites inspired by anime, films and television, alongside JoeDEsigns.',
        tags: ['Frontend', 'UI/UX', 'Creative Development'],
        runtime: '2026',
        palette: violet,
      },
    ],
  },
  {
    number: 3,
    title: 'The Next Chapter',
    period: 'In progress',
    synopsis: 'Growing toward a career in software engineering and cybersecurity.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Engineer',
        description: 'Developing stronger programming, software design and problem-solving skills.',
        tags: ['Software Engineering', 'Programming'],
        runtime: 'In progress',
        palette: crimson,
      },
      {
        code: 'S03 E02',
        title: 'The Security Mindset',
        description: 'Exploring cybersecurity and the principles behind building safer systems.',
        tags: ['Cybersecurity', 'Secure Systems'],
        runtime: 'In progress',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Current study', title: 'Computer Science', detail: 'University of Embu', palette: ocean },
  { label: 'HealthTech project', title: 'Afya Smart', detail: 'Digital healthcare platform', palette: crimson },
  { label: 'Business technology', title: 'Duka Manager', detail: 'POS for small businesses', palette: amber },
  { label: 'Civic technology', title: 'Biashara Compliances', detail: 'Kenyan business requirements guide', palette: jade },
  { label: 'In development', title: 'Net Guard', detail: 'Network security project', palette: ocean },
  { label: 'Creative work', title: 'Pop Culture Websites', detail: 'Five themed web experiences', palette: violet },
];

 /** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'Computer Science',
    lines: ['University of Embu', 'Kenya'],
    chips: ['Software Engineering', 'Cybersecurity'],
  },
  {
    kicker: 'Skills',
    title: 'Building useful software.',
    lines: ['Python, Java, JavaScript, R, PHP, C and C++', 'HTML, CSS, React, FastAPI, Supabase, MySQL and Git'],
    chips: ['Python', 'Java', 'JavaScript', 'React', 'FastAPI', 'Git'],
  },
  {
    kicker: 'Projects',
    title: 'Ideas into products.',
    lines: ['Afya Smart — digital healthcare', 'Duka Manager — POS for small businesses', 'Biashara Compliances — Kenyan business requirements', 'Net Guard — network security (in progress)'],
  },
  {
    kicker: 'Current mission',
    title: 'The next chapter',
    lines: ['Software Engineering · Cybersecurity · Building useful technology'],
  },
];

export type ProfileId = 'joseph' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

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
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Education, projects & skills first',
    color: '#4cc9ff',
    order: ['story', 'skills', 'originals', 'about', 'journey', 'picks', 'moments'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'about', 'picks', 'story', 'moments'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'Design, story & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'about', 'skills', 'story', 'moments'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & interests', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Projects', card: 'My Projects', meta: `${projects.length} Projects`, palette: crimson },
  picks: { nav: 'Highlights', card: 'Highlights', meta: 'Selected projects, interests & focus', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Achievements', card: 'Achievements & Certifications', meta: 'To be updated', palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};

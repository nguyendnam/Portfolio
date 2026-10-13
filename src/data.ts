import type { ExperienceItem, Project, SkillCategory } from "./types";

export const PROFILE = {
  name: "Nguyen Dinh Nam",
  vietnameseName: "Nguyễn Đình Nam",
  email: "dinhnam.tech@gmail.com",
  github: "https://github.com/nguyendnam",
  location: "Ho Chi Minh City, Vietnam",
  graduation: "Expected April 2027",
  gpa: "3.0 / 4.0",
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "Go", "SQL", "HTML/CSS"],
  },
  {
    title: "Frontend & Mobile",
    skills: ["React", "Next.js", "React Native", "Expo", "Tailwind CSS", "Responsive UI"],
  },
  {
    title: "Backend & Data",
    skills: ["FastAPI", "Django REST", "Gin", "PostgreSQL", "MongoDB", "REST APIs"],
  },
  {
    title: "Delivery & Tools",
    skills: ["Git/GitHub", "Docker", "GitHub Actions", "Sentry", "Supabase", "Clerk"],
  },
];

export const PROJECTS: Project[] = [
  {
    "id": "jev-caro",
    "title": "Jev Caro",
    "category": "Web apps",
    "eyebrow": "Web apps · Personal project",
    "featured": true,
    "status": "Live demo",
    "description": "A 15 × 15 Caro game pairing a tactical search engine with AI-assisted move selection.",
    "longDescription": "Built to explore how a game can combine deterministic rules with model-driven decisions. The local engine handles tactical wins and blocks; Jev evaluates strategic candidates. The game remains playable when the model is unavailable, with clear feedback about which engine chose the move.",
    "tags": [
      "Next.js",
      "TypeScript",
      "React",
      "Jev API"
    ],
    "highlights": [
      "Implemented negamax search with alpha-beta pruning, iterative deepening and a transposition table.",
      "Validated board state, turn order and AI responses on the server; kept provider credentials off the client.",
      "Added browser autosave, undo, decision analysis and a local fallback for timeouts or invalid model responses."
    ],
    "delivery": "Deployed on Vercel. Public demo reachable when reviewed on 13 October 2026.",
    "role": "Personal project",
    "github": "https://github.com/nguyendnam/Jev-Caro",
    "live": "https://jev-caro.vercel.app",
    "liveLabel": "Play demo"
  },
  {
    "id": "radar",
    "title": "AI Tech Radar",
    "category": "Developer tools",
    "eyebrow": "Developer tools · Personal project",
    "featured": true,
    "status": "Automation running",
    "description": "A personal technology digest that finds relevant updates and delivers Vietnamese summaries to Telegram.",
    "longDescription": "Built to reduce the time spent following scattered technology sources. A Python pipeline collects articles, papers, repositories and releases, uses Gemini to rank and summarize them, stores results in Supabase and prepares a concise Telegram digest.",
    "tags": [
      "Python",
      "Gemini API",
      "Supabase",
      "GitHub Actions",
      "Cloudflare"
    ],
    "highlights": [
      "Combined RSS, arXiv feeds, Hacker News, GitHub, Hugging Face and PyPI in one collection pipeline.",
      "Normalized URLs, filtered candidates and bounded AI requests and retries to control repeated work.",
      "Separated collection, digest delivery and retention into scheduled jobs with a Cloudflare Worker triggering GitHub Actions."
    ],
    "delivery": "Collection and digest workflows completed successfully on 13 October 2026. This is a personal automation service, not a public web app.",
    "role": "Personal project",
    "github": "https://github.com/nguyendnam/AI-Tech-Radar"
  },
  {
    "id": "oplang",
    "title": "OPLang Compiler Lite",
    "category": "Developer tools",
    "eyebrow": "Developer tools · Personal project",
    "featured": true,
    "status": "Implemented · local setup",
    "description": "A compiler playground for inspecting source code, syntax trees, semantic errors and JVM assembly.",
    "longDescription": "Turned an academic compiler into a browser-based development tool. OPLang source passes through lexing, parsing, AST construction and semantic analysis before producing Jasmin assembly. The React client makes each stage accessible through a FastAPI service.",
    "tags": [
      "React",
      "TypeScript",
      "FastAPI",
      "ANTLR",
      "Docker"
    ],
    "highlights": [
      "Connected a Monaco editor to a typed compile API with examples, browser persistence and request cancellation.",
      "Isolated compilation output in temporary directories and enforced a 100 KiB source limit; the API does not execute submitted programs.",
      "Added compiler and API regression suites, Docker Compose and a GitHub Actions validation workflow."
    ],
    "delivery": "Full-stack local setup is documented with Docker Compose. Render configuration is included; a public compiler URL has not been verified.",
    "role": "Personal project",
    "github": "https://github.com/nguyendnam/OPLang-Compiler-Lite"
  },
  {
    "id": "frontend-lab",
    "title": "Frontend Deep Lab",
    "category": "Web apps",
    "eyebrow": "Web apps · Personal project",
    "featured": false,
    "status": "Implemented · local setup",
    "description": "A focused reading workspace for official frontend documentation, Vietnamese translations and contextual AI help.",
    "longDescription": "Built around a personal learning workflow: read the source documentation, understand its terminology and ask questions without leaving the article. A sync script prepares MDN, React, TypeScript and Next.js content for local reading and search.",
    "tags": [
      "Next.js",
      "TypeScript",
      "Groq API",
      "MiniSearch",
      "Tailwind CSS"
    ],
    "highlights": [
      "Built document navigation, local search and reading-progress tracking.",
      "Added Vietnamese translation while preserving code, links and English technical terms for comparison.",
      "Cached translations and connected article-aware AI questions through server-side API routes."
    ],
    "delivery": "Runs locally after documentation sync. Translation and AI help require a Groq API key.",
    "role": "Personal project",
    "github": "https://github.com/nguyendnam/Frontend-Deep-Lab"
  },
  {
    "id": "xlay",
    "title": "xLay",
    "category": "Developer tools",
    "eyebrow": "Developer tools · Personal project",
    "featured": false,
    "status": "Implemented · CLI",
    "description": "An interactive terminal workspace for switching between Claude Code and Codex with a shared decision layer.",
    "longDescription": "xLay coordinates a coding session through one terminal interface. Jev helps decide when to dispatch a request or ask for clarification, which context hints to include and when compaction is appropriate. Each coding agent keeps its own resumable session.",
    "tags": [
      "TypeScript",
      "Node.js",
      "CLI",
      "Jev API"
    ],
    "highlights": [
      "Built agent switching, session resumption and setup/doctor commands.",
      "Added policy-guided context selection, validation requests and a local fallback when Jev is unavailable.",
      "Preserved the underlying agents’ approval settings and covered context, transport and turn policy with tests."
    ],
    "delivery": "Install from source with npm link. Requires an installed coding agent; Jev integration is optional.",
    "role": "Personal project",
    "github": "https://github.com/nguyendnam/xLay"
  },
  {
    "id": "lostfound",
    "title": "HCMUT LostFound",
    "category": "Mobile",
    "eyebrow": "Mobile · Team project",
    "featured": false,
    "status": "User-tested prototype",
    "description": "A team-built campus app for reporting lost items, finding matches and contacting their owners.",
    "longDescription": "A mobile proof of concept for the HCMUT community, combining an Expo/React Native client with a Go/Gin API and PostgreSQL. The project brings authenticated posts, image uploads, search and direct contact into a single campus workflow.",
    "tags": [
      "React Native",
      "Expo",
      "Go",
      "PostgreSQL",
      "Supabase"
    ],
    "highlights": [
      "Worked on a mobile/backend product with authentication, media storage and error monitoring.",
      "Participated in APK testing and feedback collection to assess usability and trust.",
      "Documented follow-up work around campus SSO, push notifications and reputation."
    ],
    "delivery": "Team prototype distributed for testing. The public link is a project poster; it is not a live mobile application.",
    "role": "Team project",
    "live": "https://hcmut-lostfound.github.io/landing-page/",
    "liveLabel": "Project poster"
  },
  {
    "id": "weather",
    "title": "Weather App",
    "category": "Web apps",
    "eyebrow": "Web apps · Personal project",
    "featured": false,
    "status": "Implemented · local setup",
    "description": "A city-based weather dashboard with current conditions and a seven-day forecast.",
    "longDescription": "A frontend project focused on the details of asynchronous UI: validate the search, resolve a city to coordinates, fetch the forecast and present loading, error and empty states clearly.",
    "tags": [
      "React",
      "TypeScript",
      "TanStack Query",
      "Vite",
      "Vitest"
    ],
    "highlights": [
      "Separated location lookup and forecast requests with typed API functions and dependent queries.",
      "Cached location and weather data with distinct query keys and freshness windows.",
      "Organized the UI by feature and added a search-form component test."
    ],
    "delivery": "Source code and local development setup available. No public demo URL has been verified.",
    "role": "Personal project",
    "github": "https://github.com/nguyendnam/Weather-App"
  },
  {
    "id": "remotion",
    "title": "Visual Learning Studio",
    "category": "Developer tools",
    "eyebrow": "Developer tools · Personal project",
    "featured": false,
    "status": "Implemented · local studio",
    "description": "Code-driven animations that explain Docker, client–server communication and the journey of a web request.",
    "longDescription": "Created short educational compositions with React and Remotion. Stable dashboard layouts combine animated connections, terminals and step-by-step captions so viewers can follow how a system changes over time.",
    "tags": [
      "React",
      "TypeScript",
      "Remotion"
    ],
    "highlights": [
      "Created reusable scene components and shared design tokens for multiple technical topics.",
      "Separated step and narration data from frame-based presentation.",
      "Added timeline-data tests and a documented MP4 rendering workflow."
    ],
    "delivery": "Preview compositions in Remotion Studio or render videos locally. No hosted video gallery is linked.",
    "role": "Personal project",
    "github": "https://github.com/nguyendnam/remotion-videos"
  },
  {
    "id": "matavi",
    "title": "Matavi",
    "category": "Web apps",
    "eyebrow": "Web apps · Personal project",
    "featured": false,
    "status": "In development",
    "description": "A mathematics exam-practice prototype with exam screens, results and progress views.",
    "longDescription": "An ongoing EdTech project for Vietnamese high-school mathematics practice. The current repository contains a React interface for browsing exams, taking a test and reviewing progress, plus a Go/Fiber backend scaffold. Persistent question banks, scoring and authenticated attempts remain implementation work.",
    "tags": [
      "React",
      "TypeScript",
      "Go",
      "Fiber",
      "Tailwind CSS"
    ],
    "highlights": [
      "Prototyped exam-library, exam-taking, result, history and ability-statistics screens.",
      "Set up frontend routing and a Go service with a health endpoint.",
      "Defined a product direction around multiple-choice, true/false and short-answer practice."
    ],
    "delivery": "Frontend prototype and backend scaffold. Not presented as a completed or deployed examination platform.",
    "role": "Personal project",
    "github": "https://github.com/nguyendnam/Matavi"
  }
];

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    id: "eyecode",
    role: "Frontend Developer Intern",
    company: "EyeCode Technology Solutions",
    duration: "8 weeks · Summer 2025",
    description:
      "Contributed to the administration module for an IELTS Listening Test system using Next.js, TypeScript, Tailwind CSS, and existing backend APIs.",
    highlights: [
      "Built reusable multi-step forms for full-test and per-section authoring, including audio upload and validation.",
      "Integrated create, load, detail, and edit flows with backend APIs and synchronized complex UI state.",
      "Tested the end-to-end author → view → edit workflow, improved loading/error feedback and prepared admin documentation.",
    ],
  },
  {
    id: "hcmut",
    role: "B.S. Computer Science Student",
    company: "Ho Chi Minh City University of Technology (HCMUT)",
    duration: "2022 — Expected Apr 2027",
    description:
      "Building a practical foundation across software engineering, databases, computer networks, operating systems, computer architecture, mobile development and compiler construction.",
    highlights: [
      "Current GPA: 3.0 / 4.0.",
      "Hands-on work spans web, mobile, backend services, deployment, testing and system design.",
    ],
  },
];

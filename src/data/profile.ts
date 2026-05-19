export const profile = {
  name: 'Mritunjai Chauhan',
  firstName: 'Mritunjai',
  lastName: 'Chauhan',
  monogram: 'MC',
  role: 'Engineer · Hiring AI, Voice AI & SaaS',
  status: 'Hirecentive · Feb 2025 →',
  availability: 'Available · Open to new roles',
  city: 'India',
  timezone: 'Asia/Kolkata',
  cityShort: 'IN',
  location: 'India · open to remote',
  practiceSince: '2024',
  bio: [
    "I'm an engineer at Hirecentive, where I ship production AI products end-to-end: schema and real-time backend, real-time voice (Gemini Live, Amazon Nova Sonic), payments, RBAC, audit trails, and edge deploy on Cloudflare Workers.",
    'My work sits at the seam between <em>systems</em> and <em>interface</em> — the parts where data, latency, and the feel of a thing all decide whether software is good. Four production SaaS in 13 months: a multi-tenant placement platform, an AI resume optimizer, a real-time voice interview simulator, and an enterprise interview-prep rewrite.',
    'Outside of work: B.Tech CSE at Bennett University, long walks, and a stubborn devotion to type that earns its place.',
  ],
  email: 'chauhanmritunjai@gmail.com',
  phone: '+91 9816384043',
  github: 'https://github.com/mritunjaichauhan',
  linkedin: 'https://linkedin.com/in/mritunjai-chauhan-903607251',
  domain: 'mritunjai.dev',
  resumePdf: '/Mritunjai-Chauhan-Resume.pdf',
} as const;

// Hero stat row — 4 cells, serif values with italic accent words
export const heroStats = [
  { k: 'Discipline', v: 'Full-stack <em>eng.</em>' },
  { k: 'Practice since', v: '2024' },
  { k: 'Currently', v: 'Engineer, <em>Hirecentive</em>' },
  { k: 'Open to', v: 'Select <em>roles</em>' },
];

// Marquee — italic skill keywords ✦-separated
export const marqueeItems = [
  'TypeScript',
  'Convex',
  'React 19',
  'Gemini Live',
  'Amazon Nova Sonic',
  'Cloudflare Workers',
  'WorkOS',
  'Drizzle',
  'Razorpay',
  'Edge runtime',
  'Real-time systems',
  'Multi-tenant SaaS',
];

// "Now" card — keep fresh, what you're actively doing this month
export const nowCard = {
  updated: 'Updated weekly',
  rows: [
    { k: 'Building', v: 'PrepCV — Convex billing + Vertex Live voice' },
    { k: 'Shipping', v: 'PMS placement workflows, <em>this week</em>' },
    { k: 'Learning', v: 'OCC patterns, sharded counters, Convex perf' },
    { k: 'Reading', v: '<em>Designing Data-Intensive Applications</em>' },
  ],
};

export const experiences = [
  {
    period: 'Feb 2025 — present',
    org: 'Hirecentive',
    title: 'Software Developer Intern',
    body: 'Engineering across four production AI SaaS products — placement management, AI resume optimization, real-time voice interview prep, and enterprise interview prep. Schema design, real-time backend, AI integration, payment idempotency, edge deployment.',
  },
  {
    period: 'Jun — Jul 2024',
    org: 'Dept. of Digital Tech, Shimla',
    title: 'Machine Learning Intern',
    body: 'Built NLP tools for document processing and an AI-powered chatbot for information retrieval.',
  },
  {
    period: '2022 — present',
    org: 'Bennett University',
    title: 'B.Tech, Computer Science Engineering',
    body: 'Focus on AI systems, full-stack product development, and cloud-native applications.',
  },
];

export const stack = [
  {
    category: 'Frontend',
    items: ['Next.js 16', 'React 19', 'React Compiler', 'TypeScript', 'Tailwind v4', 'Zustand', 'TanStack Query'],
  },
  {
    category: 'Backend',
    items: ['Convex', 'Hono', 'oRPC', 'Drizzle', 'D1', 'Neon Postgres', 'AWS SES'],
  },
  {
    category: 'Real-time & AI',
    items: ['Gemini Live', 'Amazon Nova Sonic', 'Vertex AI BidiGenerateContent', 'Vercel AI SDK', 'Cloudflare AI Gateway', 'WebSocket', 'Socket.IO'],
  },
  {
    category: 'Infra & deploy',
    items: ['Cloudflare Workers', 'OpenNext', 'R2', 'KV', 'Turborepo', 'pnpm', 'Expo'],
  },
  {
    category: 'Auth & payments',
    items: ['WorkOS AuthKit', 'Lucia', 'Arctic', 'WebAuthn / passkeys', 'Razorpay', 'Stripe', 'Autumn', 'Zoho Books'],
  },
];

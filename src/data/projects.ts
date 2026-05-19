import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'placement-management-system',
    title: 'Placement Management System',
    description: 'Multi-tenant university hiring platform for placement cells, recruiters, students, and interview teams.',
    type: 'SAAS - AI HIRING - MULTI-TENANT',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&q=80',
    details: {
      role: 'Full-stack product engineering at Hirecentive',
      overview: 'Built a multi-tenant placement-management platform that connects universities, recruiters, students, interviewers, and internal teams through realtime workflows, RBAC, AI interviews, coding assessments, audit trails, and compliance reporting.',
      impact: [
        'Modeled a large Convex hiring domain with 30+ product tables and 100+ query indexes.',
        'Backed reliability and abuse prevention with audit logs, sharded counters, rate limits, HMAC-signed model proxying, and Playwright coverage.',
        'Connected web, mobile, API, and control-plane surfaces through shared schemas and contract-first APIs.'
      ],
      features: [
        'WorkOS-powered organizations, roles, permissions, and tenant switching',
        'Realtime job drives, application tracking, interview scheduling, and notifications',
        'AI interview and coding-assessment primitives with attempt tracking and credit accounting',
        'Student profile, resume, offer, placement-statistics, and compliance-reporting modules',
        'In-browser practice and assessment sandboxes across coding, system design, frontend, and VLSI tracks',
        'Expo mobile app plus web control plane sharing schemas, auth, and APIs'
      ],
      architecture: [
        'Convex realtime backend for tenant-scoped hiring data and event-driven workflows',
        'Cloudflare Workers and Hono API layer with oRPC, OpenAPI contracts, and two-layer rate limiting',
        'Shared package architecture across web, mobile, backend, and admin surfaces'
      ],
      technologies: ['React', 'Next.js', 'TypeScript', 'Convex', 'Cloudflare Workers', 'Hono', 'oRPC', 'WorkOS', 'Expo', 'Tailwind CSS'],
      caseStudy: 'https://github.com/mritunjaichauhan/engineering-case-studies/blob/main/case-studies/campus-placement-management-system.md'
    }
  },
  {
    id: 'rebuildcv',
    title: 'RebuildCV',
    description: 'AI resume SaaS with ATS optimization, payments, invoices, credits, and university cohorts.',
    type: 'AI SAAS - PAYMENTS - EDGE',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&q=80',
    details: {
      role: 'Full-stack SaaS and monetization engineering',
      overview: 'Built a monetized resume platform that helps job seekers tailor resumes to job descriptions, generate ATS-friendly versions, export polished PDFs, and get guidance through a CareerGPT assistant.',
      impact: [
        'Turned a resume builder into a revenue-ready SaaS with subscriptions, credit packs, promo campaigns, and invoices.',
        'Supported multiple acquisition channels including individuals, influencers, universities, and cohort-based programs.',
        'Unified resume versioning, JD optimization, six-mode CareerGPT, billing, analytics, and campaign attribution in one product system.'
      ],
      features: [
        'AI resume analysis, ATS scoring, job-description matching, and versioned resume history',
        'Template-driven PDF export and profile workflows for job seekers',
        'CareerGPT modes for career plans, resume reviews, interview prep, job search, skill gaps, and salary offers',
        'Razorpay subscriptions, credit packs, checkout flows, and transaction tracking',
        'Zoho invoice sync, influencer promo ledger, university cohorts, regional pricing, and admin analytics'
      ],
      architecture: [
        'Cloudflare OpenNext deployment with Workers, D1, KV, and Cloudflare AI Gateway',
        'Vercel AI SDK plus @ai-sdk/google routed through AI Gateway with 3600-second cache headers',
        'Fourteen-table D1/SQLite schema with 20 migrations for resumes, versions, payments, promo codes, cohorts, and conversations',
        'Payment and invoice lifecycle integrated with Razorpay and Zoho Books'
      ],
      technologies: ['Next.js', 'TypeScript', 'Cloudflare Workers', 'OpenNext', 'D1', 'KV', 'Cloudflare AI Gateway', 'Vercel AI SDK', '@ai-sdk/google', 'Razorpay', 'Zoho Books', 'Drizzle', 'Tailwind CSS'],
      caseStudy: 'https://github.com/mritunjaichauhan/engineering-case-studies/blob/main/case-studies/rebuildcv-ai-resume-saas.md'
    }
  },
  {
    id: 'prepviva',
    title: 'PrepViva',
    description: 'UK-focused AI interview simulator for Medical MMI, NHS, postgraduate, and admissions prep.',
    type: 'REALTIME VOICE AI - EDTECH',
    image: 'https://images.unsplash.com/photo-1573497491208-6b1acb260507?w=600&h=400&q=80',
    details: {
      role: 'Realtime AI interview and product engineering',
      overview: 'Built a voice-first interview-prep product that simulates high-stakes UK interview formats with realtime speech, station circuits, structured scoring, and final reports for learners.',
      impact: [
        'Created a domain-specific interview experience for Medical MMI, NHS, postgraduate, and admissions scenarios.',
        'Solved Amazon Nova Sonic session limits with proactive hot-swap reconnects before provider limits.',
        'Connected authentication, billing, session storage, analytics, and report generation into the learner journey.'
      ],
      features: [
        'Realtime AI interviewer with speech relay, turn-taking, and session state management',
        'Station-based interview circuits and final performance reports',
        'Conversation-history replay and continuation prompts that prevent repeated introductions after reconnects',
        'Medical MMI, NHS, postgraduate, and admissions preparation workflows',
        'Passkeys, Google sign-in, KV-backed sessions, and gated paid access',
        'PostHog analytics for activation, interview completion, and learner behavior'
      ],
      architecture: [
        'Browser client connected to a relay server for Amazon Nova Sonic realtime speech sessions',
        'History-aware reconnect path with token refresh, silence-aware swapping, forced-swap fallback, and watchdog logging',
        'Session and billing boundaries designed for paid interview practice flows',
        'Analytics events mapped to product funnels and interview outcomes'
      ],
      technologies: ['Next.js', 'TypeScript', 'Amazon Nova Sonic', 'WebSocket', 'Passkeys', 'Google OAuth', 'KV Sessions', 'Autumn', 'PostHog', 'Tailwind CSS'],
      caseStudy: 'https://github.com/mritunjaichauhan/engineering-case-studies/blob/main/case-studies/prepviva-realtime-voice-interviews.md'
    }
  },
  {
    id: 'prepcv2',
    title: 'PrepCV2',
    description: 'AI interview-prep SaaS with Gemini Live voice interviews, coding sandboxes, proctoring, and reports.',
    type: 'VOICE AI - INTERVIEW PREP - PROCTORING',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&q=80',
    details: {
      role: 'Full-stack AI interview product engineering',
      overview: 'Built an AI interview-prep platform that combines resume-aware realtime voice interviews, technical coding tracks, proctoring signals, report generation, storage, and usage-based monetization.',
      impact: [
        'Expanded interview prep beyond chat into realtime Gemini Live voice sessions and assessment-style reports.',
        'Supported technical tracks across DSA, React, VLSI, SQL, and machine-learning interview practice.',
        'Tied attempts, credits, file storage, deterministic payment reconciliation, and billing into a cohesive SaaS workflow.'
      ],
      features: [
        'Gemini Live realtime interview client with resume-aware prompts and session handling',
        'Coding practice flows across DSA, frontend, VLSI, SQL, and ML categories',
        'VLSI Verilog workflow with Monaco editor support, Yosys WASM synthesis, DigitalJS circuits, and simulation checks',
        'Proctoring-oriented signals and structured post-interview performance reports',
        'Razorpay credit purchases and usage accounting for interview attempts',
        'R2-backed file storage and Convex-powered realtime product data'
      ],
      architecture: [
        'Realtime voice layer built on Gemini Live and Vertex-style session orchestration',
        'Razorpay webhook pipeline with multi-secret validation, authoritative purchase selection, status priority, and a 2-hour self-healing cron',
        'Convex backend for attempts, reports, billing state, and user-linked interview data',
        'React Compiler enabled in production and object storage for resumes and artifacts used by the interview pipeline'
      ],
      technologies: ['Next.js', 'React', 'TypeScript', 'Gemini Live', 'Vertex AI', 'Convex', 'Razorpay', 'Cloudflare R2', 'Yosys WASM', 'DigitalJS', 'React Compiler', 'WebSockets', 'Tailwind CSS'],
      caseStudy: 'https://github.com/mritunjaichauhan/engineering-case-studies/blob/main/case-studies/prepcv2-gemini-live-interview-prep.md'
    }
  }
];

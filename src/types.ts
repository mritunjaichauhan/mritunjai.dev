export interface Metric {
  label: string;
  value: string;
}

export interface CaseStudySection {
  title: string;
  body: string;
}

export interface StackGroup {
  category: string;
  items: string[];
}

export interface Project {
  id: string;
  title: string;
  /** Short subtitle shown in italic after the title ("Halcyon — trading desk, redesigned") */
  variant?: string;
  description: string;
  type: string;
  /** Two-digit numeric prefix in the work list ("01") */
  n?: string;
  /** Mono caption shown in the work-list row, e.g. "Multi-tenant SaaS · Lead Eng" */
  tag?: string;
  /** Year string shown in the work-list row, e.g. "2025 — now" */
  year?: string;
  /** oklch() background for the hover-preview tile */
  color?: string;
  /** Short label shown inside the floating preview tile, e.g. "Multi-tenant SaaS" */
  kind?: string;
  image: string;
  details: {
    role?: string;
    period?: string;
    overview: string;
    metrics?: Metric[];
    impact?: string[];
    features: string[];
    architecture?: string[];
    caseStudy?: CaseStudySection[];
    stack?: StackGroup[];
    technologies: string[];
    github?: string;
    demo?: string;
  };
}

export interface Project {
  id: string;
  title: string;
  description: string;
  type: string;
  image: string;
  details: {
    role?: string;
    overview: string;
    impact?: string[];
    features: string[];
    architecture?: string[];
    technologies: string[];
    github?: string;
    demo?: string;
    caseStudy?: string;
  };
}

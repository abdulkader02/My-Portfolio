export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  liveUrl: string | null;
  githubUrl: string | null;
  thumbnail: string;
  features: string[];
  overview?: string;
  isPendingVerification?: boolean;
}

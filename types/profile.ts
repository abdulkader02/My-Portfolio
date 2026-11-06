export interface Education {
  degree: string;
  field: string;
  institution: string;
  location: string;
  expectedCompletion: string;
  status: string;
  cgpa?: string | null;
  certifications?: string[];
}

export interface CareerGoals {
  shortTerm: string;
  longTerm: string;
}

export interface Profile {
  name: string;
  title: string;
  role: string;
  location: string;
  portrait: string;
  avatarUrl?: string;
  experienceStatus: string;
  shortBio: string;
  fullBio: string;
  developmentInterests: string[];
  careerGoals: CareerGoals;
  currentLearning: string[];
  education: Education;
}

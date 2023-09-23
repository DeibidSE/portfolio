interface LangData {
  [locale: string]: {
    [section: string]: any;
  };
}

export interface Language {
  value: string;
  label: string;
  icon: string;
}

export interface Introduction {
  whoAmI: string;
  job: string;
  scrDown: string;
}

export interface Presentation {
  command: string;
  title: string;
  content: string[];
  profileCard: ProfileCard;
  cv: CV[];
}

export interface ProfileCard {
  imagePath: string;
  socials: Social[];
}

export interface Social {
  name: string;
  icon: string;
  url: string;
}

export interface CV {
  url: string;
  fileName: string;
  label: string;
}

export interface Projects {
  [job: string]: Project;
}

export interface JobsAndStudies {
  [category: string]: JobOrStudy[];
}

export interface JobOrStudy {
  title: string;
  startDate: string;
  endDate: string;
  where: string;
  details: string;
  website?: string;
}

export interface Skills {
  [skill: string]: Skill[];
}

export interface Skill {
  name: string;
  image: string;
  progress: number;
}

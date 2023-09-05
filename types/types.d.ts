interface LangData {
  [locale: string]: {
    [section: string]: any;
  };
}

export interface Language {
  value: string
  label: string;
  icon: string;
}

export interface Skill {
  name: string;
  image: string;
  description?: string;
  progress: number;
}
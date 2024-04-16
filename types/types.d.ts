export interface LanguageData {
  [locale: string]: {
    [section: string]: any
  }
}

export interface Language {
  value: string
}

/* -------------------------------------------------------- */

export interface PersonalIntroduction {
  whoAmI: string
  job: string
  scrollDown: string
}

/* -------------------------------------------------------- */

export interface PresentationInfo {
  command: string
  title: string
  availability: string
  content: string[]
  profileCard: UserProfileCard
  cv: Curriculum
}

export interface UserProfileCard {
  imagePath: string
  socialLinks: SocialLink[]
}

export interface SocialLink {
  name: string
  icon: string
  url: string
}

export interface Curriculum {
  label: string
  message: string
  closeMsg: string
}

/* -------------------------------------------------------- */

export interface ProjectData {
  [job: string]: Project
}

export interface Project {
  text?: string
  image?: string
  url?: string
  description: string
  technologies: Technology[]
}

export interface Technology {
  name: string
  url: string
}

/* -------------------------------------------------------- */

export interface JobsAndStudiesData {
  [category: string]: JobOrStudy[]
}

export interface JobOrStudy {
  title: string
  startDate: string
  endDate: string
  location: string
  details: string
  website?: string
}

/* -------------------------------------------------------- */

export interface SkillData {
  [skill: string]: Skill[]
}

export interface Skill {
  name: string
  image: string
  progress: number
}

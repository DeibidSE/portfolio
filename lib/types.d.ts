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

export interface JobOrStudy {
  title: string
  startDate: string
  endDate: string
  location: string
  description: string,
  details?: string[],
  website?: string
}

/* -------------------------------------------------------- */

export interface Skill {
  name: string
  image: string
  progress: number
}

/* -------------------------------------------------------- */

export interface Alert {
  message: string
  link?: AlertLink
}

export interface AlertLink {
  label: string
  url: string
}
export interface Project {
	image?: string
	year?: string
	role?: string
	description: string
	highlights?: string[]
	technologies: Technology[]
	url?: string
}

export interface Technology {
	name: string
	url: string
	icon: string
}

export interface WorkExperience {
	title: string
	startDate: string
	endDate: string
	location: string
	description: string
	details?: string[]
	website?: string
	branch?: boolean
	tag?: string
}

export const FRONTEND_TYPE = 'frontend' as const
export const BACKEND_TYPE = 'backend' as const
export const TOOLS_TYPE = 'tools' as const

export type SkillType = typeof FRONTEND_TYPE | typeof BACKEND_TYPE | typeof TOOLS_TYPE

export interface Skill {
	name: string
	image: string
	type: SkillType
}

export interface Link {
	name: string
	icon: string
	url: string
}

export interface Project {
	image?: string
	description: string
	technologies: Technology[]
	tags: ProjectTag[]
}

export interface Technology {
	name: string
	url: string
	icon: string
}

export interface ProjectTag {
	text: string
	url?: string
	color?: string
	icon?: string
}

export interface WorkExperience {
	title: string
	startDate: string
	endDate: string
	location: string
	description: string
	details?: string[]
	website?: string
}

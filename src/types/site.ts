export const sectionIds = [
  "home",
  "about",
  "experience",
  "skills",
  "research",
  "products",
  "work",
  "contact",
] as const

export type SectionId = (typeof sectionIds)[number]
export type Language = "zh-TW" | "en"

export interface NavItem {
  id: SectionId
  label: string
}

export interface FactItem {
  label: string
  value: string
}

export interface OntologyNode {
  detail: string
  id: string
  index: string
  title: string
}

export interface PrincipleItem {
  index: string
  title: string
  description: string
}

export interface SkillGroup {
  index: string
  title: string
  description: string
  items: string[]
}

export interface CredentialItem {
  date: string
  title: string
  issuer: string
}

export interface ExperienceItem {
  company: string
  current?: boolean
  department: string
  description: string
  id: string
  period: string
  role: string
}

export interface EducationItem {
  degree: string
  detail?: string
  id: string
  institution: string
  period: string
}

export interface ProjectItem {
  category: string
  date: string
  description: string
  id: string
  image?: string
  imageAlt?: string
  tags: string[]
  title: string
}

export interface ProductItem {
  id: string
  name: string
  category: string
  version: string
  description: string
  features: string[]
  videoSrc: string
  poster: string
  videoLabel: string
  videoDescription: string
}

export interface SiteContent {
  accessibility: {
    closeMenu: string
    language: string
    menu: string
    skipToContent: string
  }
  nav: NavItem[]
  hero: {
    availability: string
    contactAction: string
    eyebrow: string
    facts: FactItem[]
    greeting: string
    name: string
    ontology: {
      ariaLabel: string
      coreDescription: string
      coreEyebrow: string
      coreTitle: string
      legend: string[]
      nodes: OntologyNode[]
      status: string
    }
    primaryAction: string
    summary: string
    title: string
  }
  about: {
    eyebrow: string
    imageAlt: string
    paragraphs: string[]
    principles: PrincipleItem[]
    profileCaption: string
    profileLabel: string
    title: string
  }
  experience: {
    currentLabel: string
    education: EducationItem[]
    educationTitle: string
    eyebrow: string
    intro: string
    roles: ExperienceItem[]
    rolesTitle: string
    title: string
  }
  skills: {
    credentials: CredentialItem[]
    credentialsTitle: string
    eyebrow: string
    groups: SkillGroup[]
    patent: {
      date: string
      label: string
      title: string
    }
    title: string
  }
  research: {
    currentDescription: string
    currentItems: string[]
    currentTitle: string
    eyebrow: string
    horizonDescription: string
    horizonItems: string[]
    horizonTitle: string
    image: string
    imageAlt: string
    intro: string
    projectDescription: string
    projectLabel: string
    projectTitle: string
    secondaryProject: {
      description: string
      items: string[]
      label: string
      title: string
    }
    statement: string
    title: string
  }
  products: {
    eyebrow: string
    title: string
    intro: string
    videoFallback: string
    items: ProductItem[]
  }
  work: {
    eyebrow: string
    intro: string
    projects: ProjectItem[]
    title: string
  }
  contact: {
    availability: string
    description: string
    emailLabel: string
    eyebrow: string
    githubLabel: string
    linkedInLabel: string
    title: string
  }
  footer: {
    backToTop: string
    lastUpdated: string
    lastUpdatedIso: string
  }
}

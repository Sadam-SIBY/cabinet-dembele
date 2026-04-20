export interface Service {
  id: number
  icon: string
  title: string
  description: string
  details: string[]
}

export interface TeamMember {
  id: number
  name: string
  role: string
  bio: string
  image?: string
}

export interface Testimonial {
  id: number
  quote: string
  author: string
  country: string
  flag: string
}

export interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  subject: string
  message: string
}

export interface NavItem {
  label: string
  href: string
}

export interface Stat {
  value: string
  label: string
}

export interface Article {
  id: number
  slug: string
  category: 'Actualité' | 'Publication' | 'Distinction' | 'Formation'
  date: string
  title: string
  excerpt: string
  content: string
  image?: string
}

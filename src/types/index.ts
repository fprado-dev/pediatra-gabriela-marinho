export interface Service {
  id: string
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  features: string[]
}

export interface Testimonial {
  id: number
  name: string
  role: string
  content: string
  rating: number
}

export interface FAQ {
  id: number
  question: string
  answer: string
}

export interface ContactFormData {
  name: string
  email: string
  phone: string
  message: string
  preferredContact: 'whatsapp' | 'phone' | 'email'
  urgency: 'low' | 'medium' | 'high'
}

export interface ContactFormResponse {
  success: boolean
  message: string
  timestamp: string
}

export interface DoctorInfo {
  name: string
  credentials: string[]
  biography: string
  imageUrl: string
  phone: string
  email: string
  address: string
  workingHours: string
}

export interface SectionProps {
  id?: string
  className?: string
}
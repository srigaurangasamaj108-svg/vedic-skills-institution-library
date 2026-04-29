// Core Types for Vedic Knowledge System

export type TreeNode = {
  id: string
  name: string
  sanskrit?: string
  hindi?: string
  bengali?: string
  marathi?: string
  gujarati?: string
  odia?: string
  kannada?: string
  telugu?: string
  type: 'corpus' | 'text_group' | 'section' | 'work' | 'chapter' | 'verse'
  children?: TreeNode[]
  verseCount?: number
}

export type Verse = {
  id: string
  chapter: number
  verse: number
  summary?: Record<string, string>
  sanskrit: string
  transliteration: string
  synonyms: Synonym[]
  translations: {
    en: string
    hi?: string
    sa?: string
  }
  commentaries: Commentary[]
  relations?: Relations
}

export type Synonym = {
  word: string
  meaning: string
}

export type Commentary = {
  sampradaya: 'gaudiya' | 'madhva' | 'sri_vaishnava' | 'advaita' | 'general'
  author: string
  content: {
    en: string
    hi?: string
    sa?: string
  }
}

export type Relations = {
  related_verses: string[]
  courses: Course[]
  guidance: GuidanceTopic[]
  seva_domains: SevaDomain[]
}

export interface Course {
  id: string
  title: Record<string, string>
  description: Record<string, string>
  level: 'beginner' | 'intermediate' | 'advanced'
  ageGroups: AgeGroup[]
  verseCount: number
}

export interface GuidanceTopic {
  id: string
  title: Record<string, string>
  category: string
  description: Record<string, string>
}

export interface SevaDomain {
  id: string
  sanskrit: string
  hindi?: string
  bengali?: string
  english: string
  description: Record<string, string>
  icon?: string
}

export type AgeGroup = 'kids' | 'students' | 'professionals' | 'elders'
export type Category = 'dharma' | 'vedanta' | 'yoga' | 'ayurveda' | 'jyotish' | 'nyaya'
export type Language = 'en' | 'hi' | 'sa' | 'bn' | 'mr' | 'te' | 'gu' | 'or' | 'kn'

export type Filters = {
  ageGroup?: AgeGroup
  category?: Category
  sevaDomain?: string
}

export type ContentTab = 'shloka' | 'transliteration' | 'synonyms' | 'translation' | 'commentary'

export type ComplexityLevel = 'simple' | 'moderate' | 'advanced' | 'scholarly'
export type AudienceType = 'general' | 'devotee' | 'non-devotee' | 'brahmachari' | 'scholar' | 'researcher'


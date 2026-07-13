// ============================================================
// Phoenix Academy — site content (single source of truth)
// Visa-interview preparation for business migration.
// ============================================================
import { MessageSquare, Users, Briefcase, Globe, Mic, Presentation, FileCheck, MapPin } from 'lucide-react'

// Decorative initials shown in the hero trust row
export const avatars = [
  { i: 'R', bg: '#1a3060' }, { i: 'M', bg: '#3a1a60' },
  { i: 'A', bg: '#601a1a' }, { i: 'S', bg: '#1a6040' },
  { i: 'K', bg: '#60401a' }, { i: 'P', bg: '#1a4060' },
]

// Eight focus areas — shown as tags in the "What We Offer" section
export const focusTags = [
  'Visa Interview Coaching',
  'Embassy Mock Interviews',
  'Business Case Presentation',
  'Document Review',
]

// "Why Choose Us" cards
export const features = [
  { Icon: MessageSquare, title: 'Real Interview Simulation', desc: 'Mock interviews based on actual consular, embassy, and immigration interviews, so that you know exactly what to expect at your visa interview.' },
  { Icon: Users, title: 'Mentors Who Understand the Process', desc: 'Work with experienced business migration specialists who know how immigration officers interview business owners, investors, and executive officers.' },
  { Icon: Briefcase, title: 'Your Business Explained Perfectly', desc: 'Learn how to explain your company, business model, investment plans and expansion strategy confidently, clearly and consistently.' },
  { Icon: Globe, title: 'Country-Specific Preparation', desc: 'Customized coaching for the USA, Australia, New Zealand, and the European Union business migration interviews according to each country’s requirements.' },
]

// Testimonials. NOTE: names & roles are placeholders — replace with real clients.
export const testimonials = [
  { quote: "I've run my manufacturing business for fifteen years, but the US consular interview terrified me. The mock sessions made the real thing feel routine — approved on the first attempt.", name: 'Rajesh Patel', initials: 'RP', role: 'Manufacturing Business Owner', program: '🇺🇸 USA · L-1 Visa' },
  { quote: 'They knew exactly what the officer would ask. By interview day I could present my business, my investment, and my plans without a moment of hesitation.', name: 'Mei Lin Chen', initials: 'MC', role: 'Trading Company Director', program: '🇦🇺 Australia · National Innovation Visa' },
  { quote: 'Phoenix prepared my whole family for the interview and made sure our documents told one clear story. Their guidance was the difference.', name: 'Andrei Popescu', initials: 'AP', role: 'Technology Founder & Investor', program: '🇪🇺 European Union · Citizenship' },
]

// "About Phoenix Academy" supporting bullet points
export const aboutPoints = [
  'Developed specially for business owners, directors & investors',
  'Mock interviews based on real embassy and consular interviews',
  'Country-specific preparation for the USA L-1 visa, Australia, UK, New Zealand, Singapore and more',
  'Improve English communication without changing your personality',
  'Complete business presentation & documentation coaching',
]

// The four core training programs (rendered in the Programs section)
export const programs = [
  {
    Icon: Mic,
    titleA: 'Visa Interview', titleB: 'Mastery',
    tagline: 'The Essential Mock Interview Program',
    desc: 'Practice every aspect of your embassy interview through a series of realistic simulations, expert feedback, and confidence-building exercises until your answers are natural and convincing.',
    keyAreas: ['Realistic Mock Interviews', 'Officer Q&A Drills', 'Answering With Confidence', 'Handling Tough Questions', 'Delivery & Body Language', 'Business Case Presentation'],
    cta: 'Begin Preparation',
    artClass: 'visa-art--usa', region: 'Mock interviews · Q&A · Confidence',
    stat: '98%', statLabel: 'Interview Success Rate',
  },
  {
    Icon: Presentation,
    titleA: 'Business Case', titleB: 'Presentation',
    tagline: 'Present Your Business Convincingly',
    desc: 'Learn how to present your company, investment strategy, business expansion plans and genuine intention such that immigration officer clearly understands your application.',
    keyAreas: ['Telling Your Business Story', 'Investment & Financials Narrative', 'Proving Genuine Intent', 'Source-of-Funds Clarity', 'Avoiding Red Flags', 'Documentation Readiness'],
    cta: 'Begin Preparation',
    artClass: 'visa-art--au', region: 'Story · Investment · Intent',
    stat: '1000+', statLabel: 'Owners Coached',
  },
  {
    Icon: FileCheck,
    titleA: 'Documentation', titleB: 'Readiness',
    tagline: 'Know Your File Inside Out',
    desc: 'Your interview is only as strong as the documents behind it. At Phoenix Interview Academy, we help you understand every single document in your file so your answers match your paperwork in the embassy interview.',
    keyAreas: ['Full Document Walkthrough', 'Petition & Application Familiarity', 'Consistency Checks', 'Evidence Mapping', 'Common Documentation Pitfalls'],
    cta: 'Learn More',
    artClass: 'visa-art--nz', region: 'Documents · Evidence · Consistency',
    stat: 'Zero', statLabel: 'Surprises on the Day',
  },
  {
    Icon: MapPin,
    titleA: 'Country-Specific', titleB: 'Briefing',
    tagline: 'USA · Australia · New Zealand · European Union',
    desc: 'Every immigration system is unique. Our Visa Interview Coaching is tailored to the style of interview, document requirements, and expectations of immigration officers in every destination country, ensuring you’re prepared for every question.',
    keyAreas: ['USA L-1 Consular Interview', 'Australia Business Visa Preparation', 'New Zealand Investor Interview', 'European Union Due Diligence', 'Officer Expectations by Country'],
    cta: 'Begin Preparation',
    artClass: 'visa-art--eu', region: 'USA · Australia · NZ · EU',
    stat: '4', statLabel: 'Destination Markets',
  },
]

// "How It Works" — the interview-preparation journey (5 steps)
export const processSteps = [
  { num: '1', title: 'Eligibility assessment', desc: 'We will review your company profile, visa route, eligibility and interview requirements to analyse key areas that need further preparation.' },
  { num: '2', title: 'Personalized Coaching Program', desc: 'Get a personalized plan tailored to your destination, business experience, language skills & application profile.' },
  { num: '3', title: 'Coaching and Interview Simulation Practice', desc: 'Practice answering interview questions, building your business case, improving your communication skills and learning how to answer under pressure.' },
  { num: '4', title: 'Embassy Interview Simulation', desc: 'Experience real-life mock embassy interview simulations and receive professional coaching feedback until your answers become structured and convincing.' },
  { num: '5', title: 'Interview Day Ready', desc: 'Go into your actual interview confident and prepared, having all your paperwork, business story, and answers well-rehearsed.' },
]

// "Trusted by business owners" — success metrics
export const metrics = [
  { num: '1000+', label: 'Business Owners Coached' },
  { num: '98%', label: 'Interview Success Readiness' },
  { num: '2500+', label: 'Mock Interviews Conducted' },
  { num: '4', label: 'Business Migration Destinations Covered' },
]

// Parent practice (Phoenix Business Advisory) — credibility stats
export const parentStats = [
  { num: '$170M+', label: 'Investment capital facilitated' },
  { num: '700+', label: 'Business owners & investors supported' },
  { num: '300+', label: 'Businesses expanded globally' },
]

// Media outlets that have featured Phoenix
export const mediaOutlets = ['Forbes', 'Bloomberg', 'CNBC', 'Times of India', 'Yahoo', 'Khaleej Times']

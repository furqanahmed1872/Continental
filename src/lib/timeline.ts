export type EntryStatus = 'deployed' | 'active' | 'upcoming' | 'classified'

export interface TimelineEntry {
  id: string
  date: string
  year: string
  name: string
  body: string
  status: EntryStatus
}

export const timeline: TimelineEntry[] = [
  {
    id: 'neuropath-backend',
    date: 'Apr 2026',
    year: 'MMXXVI · 2026',
    name: 'NeuroPath — Backend & Diagnostic Engine',
    body: 'Full backend architecture, Whisper transcription pipeline, OpenAI study pack generation, Supabase RLS migrations, end-to-end bug resolution. Active development with client Neil.',
    status: 'active',
  },
  {
    id: 'lead-agent',
    date: 'Mar 2026',
    year: 'MMXXVI · 2026',
    name: 'Lead Intelligence Agent — GoHighLevel',
    body: 'AI lead scoring pipeline with Gmail + Google Sheets integration. Automated qualification and follow-up sequencing. Calendly/Hyros deduplication fix for client Leo.',
    status: 'active',
  },
  {
    id: 'graphy',
    date: 'Dec 2025',
    year: 'MMXXV · 2025',
    name: 'Graphy — AI Chart Editing Suite',
    body: 'React/TypeScript AI-powered charting application. Natural language chart control, color overrides, history persistence, toolbar + template propagation. Full bug resolution cycle.',
    status: 'deployed',
  },
  {
    id: 'airhandler',
    date: 'Nov 2025',
    year: 'MMXXV · 2025',
    name: 'AirHandler Pro — HVAC CRM',
    body: 'Full-stack HVAC CRM with neobrutalism design system. Authentication, admin panels, estimate workflows, custom Tailwind config. Next.js + TypeScript + Supabase.',
    status: 'deployed',
  },
  {
    id: 'sentinel',
    date: 'Oct 2025',
    year: 'MMXXV · 2025',
    name: 'Sentinel Intelligence — AI Slack Bot',
    body: 'Market research pricing bot for client Maddie. Real-time incidence rate calculations via OpenAI. Deployed to production Slack workspace.',
    status: 'deployed',
  },
  {
    id: 'vesper',
    date: 'Sep 2025',
    year: 'MMXXV · 2025',
    name: 'Vesper Content Pipeline',
    body: 'YouTube-to-short-form automation. Klap.app AI clipping + Blotato publishing + HeyGen video overlays with location targeting. Full n8n orchestration.',
    status: 'deployed',
  },
  {
    id: 'woocommerce',
    date: 'Aug 2025',
    year: 'MMXXV · 2025',
    name: 'WooCommerce Order Management System',
    body: 'Full n8n automation with WhatsApp Business API + PayPal integration. Order tracking, customer notifications, payment verification pipeline for SLUV Labels.',
    status: 'deployed',
  },
  {
    id: 'moviemate',
    date: 'Jul 2025',
    year: 'MMXXV · 2025',
    name: 'MovieMate Codebase Audit',
    body: 'Full security and architecture audit. 23 critical issues identified across security, backend, and frontend. Delivered as professional PDF audit report for client pitch.',
    status: 'deployed',
  },
  {
    id: 'saas-platform',
    date: 'Q3 2026',
    year: 'Upcoming Operations',
    name: 'Multi-Tenant SaaS Automation Platform',
    body: 'White-label automation platform for service businesses. n8n + Supabase multi-tenant architecture. Full client portal, billing, and workflow management.',
    status: 'upcoming',
  },
  {
    id: 'classified-op',
    date: 'Q4 2026',
    year: 'Upcoming Operations',
    name: 'Project: Classified',
    body: 'Details sealed pending Continental clearance. Contact System Access for inquiry.',
    status: 'classified',
  },
]

export const years = [...new Set(timeline.map(e => e.year))]

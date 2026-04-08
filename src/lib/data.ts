export type EntryStatus = "deployed" | "active" | "upcoming" | "classified";

export interface TimelineEntry {
  id: string;
  date: string;
  year: string;
  name: string;
  body: string;
  status: EntryStatus;
}

export const timeline: TimelineEntry[] = [
  {
    id: "np-backend",
    date: "Apr 2026",
    year: "MMXXVI · 2026",
    name: "NeuroPath — Backend & Diagnostic Engine",
    body: "Full backend, Whisper transcription, OpenAI study packs, Supabase RLS migrations, end-to-end debug. Active with client Neil.",
    status: "active",
  },
  {
    id: "lead-agent",
    date: "Mar 2026",
    year: "MMXXVI · 2026",
    name: "Lead Intelligence Agent — GoHighLevel",
    body: "AI lead scoring pipeline. Gmail + Google Sheets integration. Calendly/Hyros deduplication for client Leo.",
    status: "active",
  },
  {
    id: "graphy",
    date: "Dec 2025",
    year: "MMXXV · 2025",
    name: "Graphy — AI Chart Editing Suite",
    body: "Natural language chart control, color overrides, history persistence. Full bug resolution cycle.",
    status: "deployed",
  },
  {
    id: "airhandler",
    date: "Nov 2025",
    year: "MMXXV · 2025",
    name: "AirHandler Pro — HVAC CRM",
    body: "Neobrutalism design system. Auth, admin panels, estimate workflows. Next.js + TypeScript + Supabase.",
    status: "deployed",
  },
  {
    id: "sentinel",
    date: "Oct 2025",
    year: "MMXXV · 2025",
    name: "Sentinel Intelligence — AI Slack Bot",
    body: "Real-time incidence rate calculations via OpenAI. Deployed to production Slack workspace.",
    status: "deployed",
  },
  {
    id: "vesper",
    date: "Sep 2025",
    year: "MMXXV · 2025",
    name: "Vesper Content Pipeline",
    body: "Klap.app + Blotato + HeyGen AI video overlays with location targeting. Full n8n orchestration.",
    status: "deployed",
  },
  {
    id: "woo",
    date: "Aug 2025",
    year: "MMXXV · 2025",
    name: "WooCommerce Order Management System",
    body: "WhatsApp Business API + PayPal. Order tracking, customer notifications, payment verification.",
    status: "deployed",
  },
  {
    id: "moviemate",
    date: "Jul 2025",
    year: "MMXXV · 2025",
    name: "MovieMate Codebase Audit",
    body: "23 critical issues identified. Delivered as professional PDF audit report + remediation roadmap.",
    status: "deployed",
  },
  {
    id: "saas",
    date: "Q3 2026",
    year: "Upcoming Operations",
    name: "Multi-Tenant SaaS Automation Platform",
    body: "White-label automation for service businesses. n8n + Supabase multi-tenant. Full client portal, billing, workflow management.",
    status: "upcoming",
  },
  {
    id: "classified-op",
    date: "Q4 2026",
    year: "Upcoming Operations",
    name: "Project: Classified",
    body: "Details sealed pending Continental clearance. Contact System Access.",
    status: "classified",
  },
];

export const years = [...new Set(timeline.map((e) => e.year))];

// ── Council ──────────────────────────────────────────
export interface CouncilMember {
  id: string;
  initial: string;
  name: string;
  role: string;
  bio: string;
  classified?: boolean;
}

export const council: CouncilMember[] = [
  {
    id: "ali",
    initial: "A",
    name: "Ali",
    role: "Founder · Lead Architect",
    bio: "Full-stack engineer and automation specialist. Upwork Top Rated, 100% JSS. Architect of NeuroPath, AirHandler Pro, and the Continental's core infrastructure. Builds systems that think, scale, and endure.",
  },
  {
    id: "neil",
    initial: "N",
    name: "Neil",
    role: "Strategic Partner · Product Vision",
    bio: "Visionary product strategist and the mind behind NeuroPath. Brings the client perspective into the heart of the build — ensuring every system solves a real problem at scale.",
  },
  {
    id: "leo",
    initial: "L",
    name: "Leo",
    role: "Operations Partner",
    bio: "Automation and operations specialist. Oversees integration workflows, client pipelines, and the invisible infrastructure that keeps the Continental running at full capacity.",
  },
  {
    id: "classified",
    initial: "?",
    name: "Classified",
    role: "Undisclosed · The System",
    bio: "Every great organization has a silent council member. This seat is occupied. Its occupant prefers anonymity. Their work speaks loudly enough.",
    classified: true,
  },
];

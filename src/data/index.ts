// ============================================================
// CONTINENTAL — Central Data Layer
// All page data is sourced from here
// ============================================================

export type ProjectStatus = 'completed' | 'in-progress' | 'upcoming'

export interface Product {
  id: string
  title: string
  description: string
  longDescription: string
  status: ProjectStatus
  category: string
  tags: string[]
  link?: string
  year: number
  featured?: boolean
}

export interface TimelineEntry {
  id: string
  title: string
  description: string
  date: string
  year: number
  status: ProjectStatus
  category: string
  milestone?: boolean
}

export interface Founder {
  id: string
  name: string
  role: string
  bio: string
  image: string
  social: {
    twitter?: string
    linkedin?: string
    github?: string
  }
  specialties: string[]
}

export interface Stat {
  label: string
  value: string
}

// ── Products ────────────────────────────────────────────────
export const products: Product[] = [
  {
    id: 'nexus-crm',
    title: 'Nexus CRM',
    description: 'An enterprise-grade CRM system built for high-volume sales operations.',
    longDescription: 'Nexus CRM reimagines client relationship management with a sleek dark interface, real-time analytics, and AI-assisted lead scoring. Built for teams that demand speed and precision.',
    status: 'completed',
    category: 'SaaS',
    tags: ['React', 'Node.js', 'PostgreSQL', 'AI'],
    link: 'https://nexuscrm.example.com',
    year: 2023,
    featured: true,
  },
  {
    id: 'vault-finance',
    title: 'Vault Finance',
    description: 'Personal finance dashboard with encrypted data vaults and predictive budgeting.',
    longDescription: 'Vault Finance provides bank-level security with consumer-grade UX. Features multi-account aggregation, spending forecasts, and encrypted document storage.',
    status: 'completed',
    category: 'FinTech',
    tags: ['Next.js', 'Prisma', 'Stripe', 'Plaid'],
    link: 'https://vault.example.com',
    year: 2023,
    featured: true,
  },
  {
    id: 'specter-analytics',
    title: 'Specter Analytics',
    description: 'Real-time behavioral analytics platform for growth-focused product teams.',
    longDescription: 'Specter captures, processes, and visualizes user behavior at scale. With funnel analysis, session replay, and cohort tracking — all in one minimal interface.',
    status: 'in-progress',
    category: 'Analytics',
    tags: ['TypeScript', 'ClickHouse', 'WebSockets', 'D3.js'],
    year: 2024,
    featured: true,
  },
  {
    id: 'obsidian-os',
    title: 'Obsidian OS',
    description: 'A lightweight browser-based operating system for remote teams.',
    longDescription: 'Obsidian OS delivers a full desktop environment in the browser. File management, app launcher, collaboration tools — zero install required.',
    status: 'in-progress',
    category: 'Platform',
    tags: ['React', 'WebRTC', 'IndexedDB', 'PWA'],
    year: 2024,
  },
  {
    id: 'cipher-auth',
    title: 'Cipher Auth',
    description: 'Zero-trust authentication SDK with biometric and passkey support.',
    longDescription: 'Cipher Auth is a drop-in authentication layer supporting FIDO2, passkeys, biometrics, and adaptive MFA. Enterprise-ready with a developer-first API.',
    status: 'completed',
    category: 'Security',
    tags: ['Go', 'WebAuthn', 'OAuth2', 'SDK'],
    link: 'https://cipherauth.example.com',
    year: 2022,
  },
  {
    id: 'phantom-deploy',
    title: 'Phantom Deploy',
    description: 'GitOps-native deployment orchestration for Kubernetes clusters.',
    longDescription: 'Phantom Deploy eliminates deployment anxiety with preview environments, automated rollbacks, and Slack-native approvals. Designed for fast-moving engineering teams.',
    status: 'upcoming',
    category: 'DevOps',
    tags: ['Kubernetes', 'Go', 'Terraform', 'GitOps'],
    year: 2025,
  },
  {
    id: 'meridian-maps',
    title: 'Meridian Maps',
    description: 'Custom map rendering engine for logistics and geospatial data visualization.',
    longDescription: 'Meridian Maps powers route optimization, asset tracking, and geofencing at scale. White-label ready with a flexible tile-rendering pipeline.',
    status: 'upcoming',
    category: 'GeoTech',
    tags: ['WebGL', 'Mapbox', 'Rust', 'PostGIS'],
    year: 2025,
  },
  {
    id: 'echo-comms',
    title: 'Echo Comms',
    description: 'End-to-end encrypted team communication with voice, video, and chat.',
    longDescription: 'Echo Comms is built for organizations where privacy is non-negotiable. Military-grade encryption, ephemeral messages, and self-hosted deployment options.',
    status: 'upcoming',
    category: 'Communication',
    tags: ['Signal Protocol', 'WebRTC', 'React Native', 'Rust'],
    year: 2025,
  },
]

// ── Timeline ─────────────────────────────────────────────────
export const timelineEntries: TimelineEntry[] = [
  {
    id: 'tl-1',
    title: 'Continental Founded',
    description: 'Organization established with a mission to build elite digital systems.',
    date: 'January 2022',
    year: 2022,
    status: 'completed',
    category: 'Organization',
    milestone: true,
  },
  {
    id: 'tl-2',
    title: 'Cipher Auth v1.0 Launched',
    description: 'First product shipped — a zero-trust authentication SDK adopted by 50+ teams.',
    date: 'June 2022',
    year: 2022,
    status: 'completed',
    category: 'Product',
  },
  {
    id: 'tl-3',
    title: 'Seed Round Closed',
    description: '$3.2M raised to accelerate product development and team expansion.',
    date: 'October 2022',
    year: 2022,
    status: 'completed',
    category: 'Business',
    milestone: true,
  },
  {
    id: 'tl-4',
    title: 'Nexus CRM Released',
    description: 'Enterprise CRM launched with AI-powered lead scoring and pipeline management.',
    date: 'March 2023',
    year: 2023,
    status: 'completed',
    category: 'Product',
  },
  {
    id: 'tl-5',
    title: 'Vault Finance Goes Live',
    description: 'Personal finance platform launched with 10,000 users in the first month.',
    date: 'September 2023',
    year: 2023,
    status: 'completed',
    category: 'Product',
    milestone: true,
  },
  {
    id: 'tl-6',
    title: 'Team Expands to 25',
    description: 'Engineering, design, and product teams scaled across three time zones.',
    date: 'December 2023',
    year: 2023,
    status: 'completed',
    category: 'Organization',
  },
  {
    id: 'tl-7',
    title: 'Specter Analytics Beta',
    description: 'Closed beta launched with select enterprise clients for behavioral analytics.',
    date: 'April 2024',
    year: 2024,
    status: 'in-progress',
    category: 'Product',
  },
  {
    id: 'tl-8',
    title: 'Obsidian OS Development Begins',
    description: 'Browser-native OS project enters active development phase.',
    date: 'July 2024',
    year: 2024,
    status: 'in-progress',
    category: 'Product',
  },
  {
    id: 'tl-9',
    title: 'Series A Target',
    description: 'Targeting $12M Series A to fund three new product launches.',
    date: 'Q1 2025',
    year: 2025,
    status: 'upcoming',
    category: 'Business',
    milestone: true,
  },
  {
    id: 'tl-10',
    title: 'Phantom Deploy Launch',
    description: 'GitOps deployment platform scheduled for public release.',
    date: 'Q2 2025',
    year: 2025,
    status: 'upcoming',
    category: 'Product',
  },
  {
    id: 'tl-11',
    title: 'Meridian Maps & Echo Comms',
    description: 'Dual product launch — geospatial platform and encrypted comms system.',
    date: 'Q3 2025',
    year: 2025,
    status: 'upcoming',
    category: 'Product',
    milestone: true,
  },
]

// ── Founders ─────────────────────────────────────────────────
export const founders: Founder[] = [
  {
    id: 'f-1',
    name: 'Marcus Rein',
    role: 'Chief Executive Officer',
    bio: 'Former principal engineer at a Fortune 100 security firm. Marcus built his first distributed system at 19 and has since led teams shipping products used by millions. He founded Continental to prove that software can be both powerful and elegant.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    social: {
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
    },
    specialties: ['Systems Architecture', 'Product Strategy', 'Team Building'],
  },
  {
    id: 'f-2',
    name: 'Selene Vance',
    role: 'Chief Technology Officer',
    bio: 'PhD in Computer Science from MIT. Selene specializes in distributed systems and cryptographic protocols. She leads Continental\'s technical vision and is the architect behind Cipher Auth and the Obsidian OS kernel.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face',
    social: {
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
    },
    specialties: ['Cryptography', 'Distributed Systems', 'Rust & Go'],
  },
  {
    id: 'f-3',
    name: 'Dorian Ash',
    role: 'Chief Design Officer',
    bio: 'Former lead designer at Vercel and Linear. Dorian is obsessed with the intersection of function and beauty. Every interface Continental ships passes through his principle: "If it feels like work, we failed."',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
    social: {
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
    },
    specialties: ['UX Systems', 'Motion Design', 'Design Tokens'],
  },
  {
    id: 'f-4',
    name: 'Nadia Cross',
    role: 'Chief Product Officer',
    bio: 'Built and scaled two SaaS products to $10M ARR before 30. Nadia drives Continental\'s product roadmap with an obsessive focus on user outcomes over feature lists. She keeps the team honest and the backlog ruthless.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
    specialties: ['Product-Led Growth', 'User Research', 'Revenue Strategy'],
  },
]

// ── About / Org ───────────────────────────────────────────────
export const orgData = {
  name: 'Continental',
  tagline: 'Every system has rules.',
  subTagline: 'Ours are just better.',
  description: 'Continental is an elite software organization building the next generation of digital infrastructure. We don\'t chase trends — we engineer systems that last.',
  vision: 'A world where every business runs on software so well-crafted, it feels invisible.',
  mission: 'To build products that combine military-grade reliability with luxury-grade experience — systems that the world\'s most demanding teams trust without question.',
  founded: '2022',
  location: 'Distributed — New York, London, Singapore',
  values: [
    {
      title: 'Precision',
      description: 'We obsess over every detail. Sloppy code and lazy design are not tolerated. Excellence is the minimum acceptable standard.',
    },
    {
      title: 'Discretion',
      description: 'Our clients trust us with their most critical systems. We honor that trust with absolute confidentiality and operational security.',
    },
    {
      title: 'Craft',
      description: 'We are artisans, not assembly workers. Every product is built with intention, tested with rigor, and shipped with pride.',
    },
    {
      title: 'Loyalty',
      description: 'To our users, our clients, and our team. Long-term relationships outweigh short-term wins, every time.',
    },
  ],
  stats: [
    { label: 'Products Shipped', value: '8+' },
    { label: 'Active Users', value: '100K+' },
    { label: 'Team Members', value: '25+' },
    { label: 'Years Operating', value: '3+' },
  ] as Stat[],
}

// ── Navigation ────────────────────────────────────────────────
export const navLinks = [
  { label: 'Products', href: '/products' },
  { label: 'Timeline', href: '/timeline' },
  { label: 'About', href: '/about' },
  { label: 'Founders', href: '/founders' },
  { label: 'Contact', href: '/contact' },
]

// ── Status Config ─────────────────────────────────────────────
export const statusConfig: Record<ProjectStatus, { label: string; color: string; glow: string; dot: string }> = {
  completed: {
    label: 'Completed',
    color: 'text-emerald-400',
    glow: 'shadow-emerald-500/20',
    dot: 'bg-emerald-400',
  },
  'in-progress': {
    label: 'In Progress',
    color: 'text-gold-400',
    glow: 'shadow-gold-500/20',
    dot: 'bg-gold-400',
  },
  upcoming: {
    label: 'Upcoming',
    color: 'text-slate-400',
    glow: 'shadow-slate-500/10',
    dot: 'bg-slate-500',
  },
}

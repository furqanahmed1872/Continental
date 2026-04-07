export interface CouncilMember {
  id: string
  initial: string
  name: string
  role: string
  bio: string
  classified?: boolean
}

export const council: CouncilMember[] = [
  {
    id: 'ali',
    initial: 'A',
    name: 'Ali',
    role: 'Founder · Lead Architect',
    bio: 'Full-stack engineer and automation specialist. Upwork Top Rated, 100% JSS. Architect of NeuroPath, AirHandler Pro, and the Continental\'s core infrastructure. Builds systems that think, scale, and endure.',
  },
  {
    id: 'neil',
    initial: 'N',
    name: 'Neil',
    role: 'Strategic Partner · Product Vision',
    bio: 'Visionary product strategist and the mind behind NeuroPath. Brings the client perspective into the heart of the build — ensuring every system solves a real problem at scale.',
  },
  {
    id: 'leo',
    initial: 'L',
    name: 'Leo',
    role: 'Operations Partner',
    bio: 'Automation and operations specialist. Oversees integration workflows, client pipelines, and the invisible infrastructure that keeps the Continental running at full operational capacity.',
  },
  {
    id: 'classified',
    initial: '?',
    name: 'Classified',
    role: 'Undisclosed · The System',
    bio: 'Every great organization has a silent council member. This seat is occupied. Its occupant prefers anonymity. Their work speaks loudly enough.',
    classified: true,
  },
]

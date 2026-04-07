'use client'
import Link from 'next/link'

interface FooterProps {
  links?: { href: string; label: string }[]
}

export default function Footer({ links = [
  { href:'/registry', label:'The Registry'  },
  { href:'/ledger',   label:'The Ledger'    },
  { href:'/access',   label:'System Access' },
]}: FooterProps) {
  return (
    <footer style={{
      borderTop:'.5px solid rgba(201,166,107,0.1)',
      padding:'2.8rem 5rem',
      display:'flex', alignItems:'center', justifyContent:'space-between',
      flexWrap:'wrap', gap:'1.5rem',
      background:'rgba(5,4,3,0.8)',
      backdropFilter:'blur(8px)',
      marginTop:'5rem',
      position:'relative',
    }}>
      {/* Gold top glow */}
      <div style={{ position:'absolute', top:0, left:'50%', transform:'translateX(-50%)', width:'200px', height:'1px', background:'linear-gradient(to right,transparent,rgba(201,166,107,0.3),transparent)' }}/>

      <div style={{ fontFamily:'Cinzel,serif', fontSize:'.9rem', letterSpacing:'.38em', color:'var(--gold-dim)' }}>
        The Continental
      </div>

      <div style={{ display:'flex', gap:'2rem' }}>
        {links.map(({ href, label }) => (
          <Link key={href} href={href} style={{
            fontFamily:'Montserrat,sans-serif', fontSize:'.5rem',
            letterSpacing:'.22em', color:'#3a3a3a', textDecoration:'none',
            textTransform:'uppercase', transition:'color .3s',
          }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold-dim)')}
            onMouseLeave={e => (e.currentTarget.style.color = '#3a3a3a')}
          >
            {label}
          </Link>
        ))}
      </div>

      <div style={{ fontFamily:'Montserrat,sans-serif', fontSize:'.48rem', letterSpacing:'.2em', color:'#2a2a2a', textTransform:'uppercase' }}>
        © MMXXVI · Continental Digital Systems
      </div>

      <style>{`@media(max-width:768px){footer{padding:2rem 1.5rem!important;}}`}</style>
    </footer>
  )
}

'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const links = [
  { href: '/',         label: 'Sanctuary'        },
  { href: '/registry', label: 'The Registry'      },
  { href: '/ledger',   label: 'The Ledger'        },
  { href: '/about',    label: 'The Organization'  },
  { href: '/council',  label: 'The Council'       },
  { href: '/access',   label: 'System Access'     },
]

export default function Navigation() {
  const pathname   = usePathname()
  const [vis, setVis]   = useState(false)
  const [menu, setMenu] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setVis(true)
    window.addEventListener('continental:enter', handler)
    if (pathname !== '/') setVis(true)
    return () => window.removeEventListener('continental:enter', handler)
  }, [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!vis) return null

  return (
    <>
      <nav style={{
        position:'fixed', top:0, left:0, right:0, zIndex:400,
        padding: scrolled ? '1rem 4rem' : '1.5rem 4rem',
        display:'flex', alignItems:'center', justifyContent:'space-between',
        borderBottom: scrolled ? '0.5px solid rgba(201,166,107,0.12)' : '0.5px solid rgba(201,166,107,0.05)',
        background: scrolled
          ? 'rgba(8,7,5,0.92)'
          : 'linear-gradient(to bottom, rgba(0,0,0,0.85), transparent)',
        backdropFilter: scrolled ? 'blur(12px)' : 'blur(4px)',
        transition: 'all .4s cubic-bezier(0.4,0,0.2,1)',
        animation: 'fadeIn .8s ease forwards',
      }}>
        {/* Logo */}
        <Link href="/" style={{
          fontFamily:'Cinzel,serif', fontSize:'1rem', letterSpacing:'.38em',
          color:'var(--gold)', textDecoration:'none', fontWeight:600,
          transition:'text-shadow .3s',
        }}
          onMouseEnter={e => (e.currentTarget.style.textShadow = '0 0 20px rgba(201,166,107,0.5)')}
          onMouseLeave={e => (e.currentTarget.style.textShadow = 'none')}
        >
          The Continental
        </Link>

        {/* Desktop */}
        <ul style={{ display:'flex', gap:'2.2rem', listStyle:'none' }} className="nav-links-desktop">
          {links.map(({ href, label }) => {
            const active = pathname === href
            return (
              <li key={href}>
                <Link href={href} style={{
                  fontFamily:'Montserrat,sans-serif', fontSize:'.6rem',
                  letterSpacing:'.22em', textDecoration:'none', textTransform:'uppercase',
                  color: active ? 'var(--gold)' : 'var(--white-dim)',
                  transition:'color .3s',
                  position:'relative',
                  paddingBottom:'4px',
                }}>
                  {label}
                  {/* Active underline */}
                  <span style={{
                    position:'absolute', bottom:0, left:0, right:0, height:'.5px',
                    background:'var(--gold-dim)',
                    transform: active ? 'scaleX(1)' : 'scaleX(0)',
                    transition:'transform .3s',
                    transformOrigin:'left',
                  }}/>
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Status indicator */}
        <div style={{ display:'flex', alignItems:'center', gap:'.6rem', fontFamily:'Montserrat,sans-serif', fontSize:'.5rem', letterSpacing:'.2em', color:'var(--white-dim)' }} className="nav-status">
          <span style={{ width:5, height:5, borderRadius:'50%', background:'var(--red)', animation:'blink 2s infinite', display:'inline-block', boxShadow:'0 0 6px rgba(200,16,46,0.8)' }}/>
          System Active
        </div>

        {/* Mobile burger */}
        <button onClick={() => setMenu(o => !o)} className="nav-burger"
          style={{ background:'none', border:'none', color:'var(--gold)', fontSize:'1.3rem', cursor:'none', display:'none' }}
        >
          {menu ? '✕' : '≡'}
        </button>
      </nav>

      {/* Mobile menu */}
      {menu && (
        <div style={{
          position:'fixed', top:60, left:0, right:0, bottom:0,
          background:'rgba(5,4,3,0.98)', backdropFilter:'blur(16px)',
          zIndex:399, display:'flex', flexDirection:'column',
          alignItems:'center', justifyContent:'center', gap:'2.5rem',
          animation:'fadeIn .3s ease forwards',
        }}>
          {links.map(({ href, label }) => (
            <Link key={href} href={href} onClick={() => setMenu(false)} style={{
              fontFamily:'Cinzel,serif', fontSize:'1.2rem', letterSpacing:'.2em',
              color: pathname===href ? 'var(--gold)' : 'var(--white-dim)',
              textDecoration:'none', textTransform:'uppercase',
              transition:'color .3s',
            }}>
              {label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media(max-width:900px){
          .nav-links-desktop,.nav-status{display:none!important;}
          .nav-burger{display:flex!important;}
          nav{padding-left:1.5rem!important;padding-right:1.5rem!important;}
        }
      `}</style>
    </>
  )
}

'use client'
import { useState, useEffect } from 'react'

export default function EntryGate() {
  const [exiting, setExiting] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  const enter = () => {
    setExiting(true)
    window.dispatchEvent(new Event('continental:enter'))
  }

  if (exiting) return null
  if (!mounted) return null

  return (
    <div style={{
      position:'fixed', inset:0, background:'#000',
      display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',
      zIndex:800,
    }}>
      {/* Radial gradient bg */}
      <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse at center, rgba(201,166,107,0.04) 0%, transparent 70%)', pointerEvents:'none' }}/>

      {/* Floating particles */}
      {mounted && Array.from({length:20}).map((_,i)=>(
        <div key={i} style={{
          position:'absolute',
          left: `${10 + (i*4.7)%80}%`,
          top:  `${5  + (i*7.3)%90}%`,
          width:  i%3===0 ? 2 : 1,
          height: i%3===0 ? 2 : 1,
          borderRadius:'50%',
          background: i%5===0 ? 'var(--red)' : 'var(--gold-dim)',
          opacity: 0.3 + (i%4)*0.1,
          animation:`float ${4+i%3}s ease-in-out ${i*0.3}s infinite`,
        }}/>
      ))}

      {/* Coin */}
      <div style={{
        width:76, height:76, borderRadius:'50%',
        border:'1px solid var(--gold-dim)',
        display:'flex', alignItems:'center', justifyContent:'center',
        marginBottom:'2.2rem',
        animation:'coinPulse 2.5s ease infinite',
        position:'relative',
      }}>
        {/* Inner ring */}
        <div style={{ position:'absolute', inset:8, border:'.5px solid rgba(201,166,107,0.25)', borderRadius:'50%' }}/>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <text x="16" y="22" textAnchor="middle" fontFamily="Cinzel,serif" fontSize="16" fill="#C9A66B" fontWeight="700">C</text>
        </svg>
      </div>

      {/* Title */}
      <div style={{
        fontFamily:'Cinzel,serif', fontSize:'clamp(1.8rem,5vw,3.8rem)',
        color:'var(--gold)', letterSpacing:'.5em', fontWeight:700,
        animation:'riseIn 1.8s ease forwards',
        textShadow:'0 0 40px rgba(201,166,107,0.3)',
      }}>
        THE CONTINENTAL
      </div>

      {/* Sub rule */}
      <div style={{ display:'flex', alignItems:'center', gap:'1rem', margin:'1rem 0' }}>
        <div style={{ width:60, height:.5, background:'linear-gradient(to right,transparent,var(--gold-dim))' }}/>
        <div style={{ width:5, height:5, border:'.5px solid var(--gold-dim)', transform:'rotate(45deg)' }}/>
        <div style={{ width:60, height:.5, background:'linear-gradient(to left,transparent,var(--gold-dim))' }}/>
      </div>

      {/* Tagline */}
      <div style={{
        fontFamily:'Montserrat,sans-serif', fontSize:'.6rem', letterSpacing:'.42em',
        color:'var(--white-dim)', textTransform:'uppercase', marginBottom:'3rem',
        animation:'riseIn 1.8s ease .5s both',
      }}>
        Sanctuary for Digital Excellence
      </div>

      {/* CTA */}
      <button onClick={enter} style={{
        fontFamily:'Cinzel,serif', fontSize:'.72rem', letterSpacing:'.45em',
        color:'var(--gold)', border:'.5px solid rgba(201,166,107,0.4)',
        background:'transparent', padding:'1.1rem 3.5rem', cursor:'none',
        textTransform:'uppercase', transition:'all .5s cubic-bezier(0.4,0,0.2,1)',
        animation:'riseIn 1.8s ease .9s both',
        position:'relative', overflow:'hidden',
      }}
        onMouseEnter={e => {
          const b = e.currentTarget
          b.style.background = 'rgba(201,166,107,0.06)'
          b.style.letterSpacing = '.55em'
          b.style.boxShadow = '0 0 40px rgba(201,166,107,0.18), inset 0 0 20px rgba(201,166,107,0.04)'
          b.style.borderColor = 'rgba(201,166,107,0.7)'
        }}
        onMouseLeave={e => {
          const b = e.currentTarget
          b.style.background = 'transparent'
          b.style.letterSpacing = '.45em'
          b.style.boxShadow = 'none'
          b.style.borderColor = 'rgba(201,166,107,0.4)'
        }}
      >
        Enter the System
      </button>

      {/* Bottom marker */}
      <div style={{ marginTop:'2.5rem', display:'flex', flexDirection:'column', alignItems:'center', gap:'.4rem', animation:'riseIn 1.8s ease 1.4s both' }}>
        <div style={{ fontFamily:'Montserrat,sans-serif', fontSize:'.45rem', letterSpacing:'.4em', color:'rgba(201,166,107,0.25)', textTransform:'uppercase' }}>
          Est. MMXXIII
        </div>
        <div style={{ width:.5, height:40, background:'linear-gradient(to bottom,var(--gold-dim),transparent)' }}/>
      </div>
    </div>
  )
}

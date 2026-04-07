'use client'
import { useState } from 'react'
import { council }  from '@/lib/data'
import GSAPReveal   from '@/components/GSAPReveal'
import Footer       from '@/components/Footer'

export default function CouncilPage() {
  const [hovered, setHovered] = useState<string|null>(null)

  return (
    <div style={{ background:'var(--black)', minHeight:'100vh', animation:'pageIn .6s ease forwards' }}>

      {/* Hero */}
      <div style={{ textAlign:'center', padding:'6rem 2rem 4rem', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse at 50% 80%, rgba(201,166,107,0.05) 0%, transparent 65%)', pointerEvents:'none' }}/>
        <GSAPReveal><div className="s-label-center" style={{ marginBottom:'1.2rem' }}>Leadership</div></GSAPReveal>
        <GSAPReveal delay={0.1}>
          <h1 className="heading-xl" style={{ fontSize:'clamp(2rem,7vw,5.5rem)', color:'var(--white)', marginBottom:'1rem' }}>
            The <span style={{ color:'var(--gold)', textShadow:'0 0 40px rgba(201,166,107,0.25)' }}>Council</span>
          </h1>
        </GSAPReveal>
        <GSAPReveal delay={0.15}>
          <p className="body-serif" style={{ fontSize:'1.2rem', color:'var(--white-dim)', fontStyle:'italic' }}>
            The minds behind the machine. The architects of the system.
          </p>
        </GSAPReveal>
      </div>

      {/* Council grid */}
      <div style={{
        display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))',
        gap:'1.5px', background:'rgba(201,166,107,0.06)',
        maxWidth:1200, margin:'0 auto', padding:'0 5rem',
      }}>
        {council.map((m, i) => {
          const isHov = hovered === m.id
          return (
            <GSAPReveal key={m.id} delay={i * 0.1}>
              <div
                onMouseEnter={() => setHovered(m.id)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  background: isHov ? (m.classified ? '#0d0d0d' : '#110d08') : 'var(--black)',
                  padding:'3rem 2.5rem', textAlign:'center',
                  position:'relative', overflow:'hidden',
                  transition:'all .45s cubic-bezier(0.25,0.46,0.45,0.94)',
                  cursor:'default', height:'100%',
                }}
              >
                {/* Top glow line */}
                <div style={{
                  position:'absolute', top:0, left:0, right:0, height:1,
                  background: m.classified
                    ? 'linear-gradient(to right,transparent,rgba(80,80,80,0.3),transparent)'
                    : 'linear-gradient(to right,transparent,rgba(201,166,107,0.6),transparent)',
                  transform: isHov ? 'scaleX(1)' : 'scaleX(0)',
                  transition:'transform .6s',
                }}/>

                {/* Background glow */}
                <div style={{
                  position:'absolute', top:-60, left:'50%', transform:'translateX(-50%)',
                  width:200, height:200,
                  background: m.classified
                    ? 'radial-gradient(circle,rgba(50,50,50,0.06),transparent 70%)'
                    : 'radial-gradient(circle,rgba(201,166,107,0.08),transparent 70%)',
                  opacity: isHov ? 1 : 0, transition:'opacity .4s', pointerEvents:'none',
                }}/>

                {/* Avatar */}
                <div style={{
                  width:96, height:96, borderRadius:'50%',
                  border: `.5px solid ${isHov
                    ? (m.classified ? '#3a3a3a' : 'var(--gold)')
                    : (m.classified ? '#1e1e1e' : 'rgba(201,166,107,0.25)')}`,
                  display:'flex', alignItems:'center', justifyContent:'center',
                  margin:'0 auto 1.8rem',
                  background: m.classified
                    ? 'linear-gradient(135deg,rgba(30,30,30,0.4),rgba(20,20,20,0.4))'
                    : 'linear-gradient(135deg,rgba(201,166,107,0.09),rgba(200,16,46,0.05))',
                  fontFamily:'Cinzel,serif', fontSize:'2rem',
                  color: m.classified ? '#2a2a2a' : (isHov ? 'var(--gold)' : 'var(--gold-dim)'),
                  boxShadow: isHov && !m.classified ? '0 0 30px rgba(201,166,107,0.2), inset 0 0 20px rgba(201,166,107,0.05)' : 'none',
                  transition:'all .4s',
                }}>
                  {m.initial}
                </div>

                <div className="heading-md" style={{
                  fontSize:'1.2rem',
                  color: m.classified ? '#444' : (isHov ? 'var(--gold)' : 'var(--white)'),
                  marginBottom:'.4rem', transition:'color .35s',
                }}>
                  {m.name}
                </div>
                <div className="label-mono" style={{
                  fontSize:'.56rem', color: m.classified ? '#333' : 'var(--gold-dim)',
                  marginBottom:'1.3rem',
                }}>
                  {m.role}
                </div>

                <div style={{ height:.5, background: m.classified ? 'rgba(255,255,255,0.03)' : 'rgba(201,166,107,0.1)', margin:'0 0 1.3rem' }}/>

                <p className="body-serif" style={{
                  fontSize:'.98rem',
                  color: m.classified ? '#383838' : 'var(--white-dim)',
                  lineHeight:1.85, fontStyle: m.classified ? 'italic' : 'normal',
                }}>
                  {m.bio}
                </p>
              </div>
            </GSAPReveal>
          )
        })}
      </div>

      {/* Closing quote */}
      <GSAPReveal>
        <div style={{ textAlign:'center', padding:'6rem 2rem 4rem', maxWidth:740, margin:'0 auto' }}>
          <div className="gold-rule" style={{ marginBottom:'3rem' }}/>
          <p className="body-serif" style={{ fontSize:'clamp(1.1rem,2.5vw,1.6rem)', color:'var(--white-dim)', fontStyle:'italic', lineHeight:1.75 }}>
            "The strength of the Continental lies not in any single member of the council, but in the system they collectively protect."
          </p>
          <div className="label-mono" style={{ color:'var(--gold-dim)', marginTop:'1.5rem', fontSize:'.52rem' }}>
            Continental Code — Article VII
          </div>
        </div>
      </GSAPReveal>

      <Footer links={[
        { href:'/about',    label:'The Organization' },
        { href:'/registry', label:'The Registry'      },
        { href:'/access',   label:'System Access'     },
      ]}/>

      <style>{`
        @media(max-width:768px){
          div[style*="auto-fill,minmax(280px"]{
            grid-template-columns:1fr!important;
            padding:0 1.5rem!important;
          }
        }
      `}</style>
    </div>
  )
}

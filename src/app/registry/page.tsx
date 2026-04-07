'use client'
import { useState } from 'react'
import { products, type ProductStatus } from '@/lib/products'
import StatusBadge from '@/components/StatusBadge'
import GSAPReveal  from '@/components/GSAPReveal'
import Footer      from '@/components/Footer'

type Filter = 'all' | ProductStatus

const filters: { id: Filter; label: string }[] = [
  { id:'all',        label:'All Files'  },
  { id:'deployed',   label:'Deployed'   },
  { id:'active',     label:'Active'     },
  { id:'classified', label:'Classified' },
]

export default function RegistryPage() {
  const [filter, setFilter] = useState<Filter>('all')
  const [hovered, setHovered] = useState<string|null>(null)

  const filtered = filter === 'all' ? products : products.filter(p => p.status === filter)

  return (
    <div style={{ background:'var(--black)', minHeight:'100vh', animation:'pageIn .6s ease forwards' }}>

      {/* ── Hero ── */}
      <div style={{ textAlign:'center', padding:'6rem 2rem 4rem', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse at 50% 80%, rgba(201,166,107,0.05) 0%, transparent 70%)', pointerEvents:'none' }}/>
        <GSAPReveal><div className="s-label-center" style={{ marginBottom:'1.2rem' }}>Case Files</div></GSAPReveal>
        <GSAPReveal delay={0.1}>
          <h1 className="heading-xl" style={{ fontSize:'clamp(2rem,7vw,5.5rem)', color:'var(--white)', marginBottom:'1rem' }}>
            The <span style={{ color:'var(--gold)', textShadow:'0 0 40px rgba(201,166,107,0.25)' }}>Registry</span>
          </h1>
        </GSAPReveal>
        <GSAPReveal delay={0.15}>
          <p className="body-serif" style={{ fontSize:'1.2rem', color:'var(--white-dim)', fontStyle:'italic' }}>
            Every product. Every deployment. Every operation.
          </p>
        </GSAPReveal>

        {/* Filters */}
        <GSAPReveal delay={0.2}>
          <div style={{ display:'flex', justifyContent:'center', gap:'.8rem', margin:'3rem 0 0', flexWrap:'wrap' }}>
            {filters.map(({ id, label }) => (
              <button key={id} onClick={() => setFilter(id)} style={{
                fontFamily:'Montserrat,sans-serif', fontSize:'.56rem', letterSpacing:'.28em',
                color: filter === id ? 'var(--gold)' : 'var(--white-dim)',
                background: filter === id ? 'rgba(201,166,107,0.06)' : 'none',
                border: `.5px solid ${filter === id ? 'var(--gold)' : 'rgba(201,166,107,0.15)'}`,
                padding:'.65rem 1.8rem', cursor:'none', textTransform:'uppercase', transition:'all .35s',
                boxShadow: filter === id ? '0 0 20px rgba(201,166,107,0.1)' : 'none',
              }}>
                {label}
              </button>
            ))}
          </div>
        </GSAPReveal>
      </div>

      {/* ── Grid ── */}
      <div style={{
        display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(360px,1fr))',
        gap:'1.5px', background:'rgba(201,166,107,0.06)',
        maxWidth:1240, margin:'0 auto',
      }}>
        {filtered.map((p, i) => {
          const isHov = hovered === p.id
          const isCls = p.status === 'classified'

          return (
            <GSAPReveal key={p.id} delay={i * 0.06}>
              <div
                onMouseEnter={() => setHovered(p.id)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  background: isHov
                    ? (isCls ? '#0d0d0d' : '#121008')
                    : (p.accentColor
                      ? `linear-gradient(150deg,${p.accentColor},rgba(10,10,10,0.98))`
                      : 'var(--black)'),
                  padding:'2.6rem',
                  position:'relative', overflow:'hidden', cursor:'default',
                  transition:'all .45s cubic-bezier(0.25,0.46,0.45,0.94)',
                  transform: isHov ? 'translateY(-2px)' : 'none',
                  borderBottom:'.5px solid rgba(201,166,107,0.04)',
                  minHeight:300,
                }}
              >
                {/* Top reveal line */}
                <div style={{
                  position:'absolute', top:0, left:0, right:0, height:1.5,
                  background:'linear-gradient(to right,transparent,var(--gold),transparent)',
                  transform: isHov ? 'scaleX(1)' : 'scaleX(0)',
                  transition:'transform .55s cubic-bezier(0.25,0.46,0.45,0.94)',
                }}/>
                {/* Corner glow */}
                <div style={{
                  position:'absolute', top:-30, right:-30, width:100, height:100,
                  background:`radial-gradient(circle,${isCls?'rgba(80,80,80,0.06)':'rgba(201,166,107,0.1)'},transparent 70%)`,
                  opacity: isHov ? 1 : 0, transition:'opacity .4s',
                }}/>

                {/* Card header */}
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:'1.6rem' }}>
                  <div style={{
                    width:46, height:46,
                    border: `.5px solid ${isCls ? '#1e1e1e' : 'rgba(201,166,107,0.2)'}`,
                    display:'flex', alignItems:'center', justifyContent:'center',
                    fontFamily:'Cinzel,serif', fontSize:'1.1rem',
                    color: isCls ? '#2a2a2a' : (isHov ? 'var(--gold)' : 'var(--gold-dim)'),
                    transition:'all .4s',
                    background: isHov && !isCls ? 'rgba(201,166,107,0.06)' : 'transparent',
                  }}>
                    {p.icon}
                  </div>
                  <StatusBadge status={p.status}/>
                </div>

                {/* File number */}
                <div className="label-mono" style={{ color: isCls ? '#1e1e1e' : 'rgba(201,166,107,0.22)', marginBottom:'.4rem', fontSize:'.52rem' }}>
                  File / {p.num}
                </div>

                {/* Name */}
                <div className="heading-md" style={{
                  fontSize:'1.28rem',
                  color: isHov ? (isCls ? '#444' : 'var(--gold)') : (isCls ? '#333' : 'var(--white)'),
                  marginBottom:'.75rem', transition:'color .35s',
                }}>
                  {p.name}
                </div>

                {/* Description */}
                <p className="body-serif" style={{ fontSize:'1rem', color: isCls ? '#2e2e2e' : 'var(--white-dim)', lineHeight:1.85, marginBottom:'1.5rem' }}>
                  {p.fullDesc}
                </p>

                {/* Tags */}
                <div style={{ display:'flex', gap:'.5rem', flexWrap:'wrap' }}>
                  {p.tags.map(tag => (
                    <span key={tag} className="label-mono" style={{
                      fontSize:'.48rem',
                      color: isCls ? '#222' : (isHov ? 'var(--gold-dim)' : 'rgba(201,166,107,0.35)'),
                      border: `.5px solid ${isCls ? '#1a1a1a' : (isHov ? 'rgba(201,166,107,0.3)' : 'rgba(201,166,107,0.12)')}`,
                      padding:'.28rem .75rem', transition:'all .35s',
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Hover CTA */}
                <div style={{
                  position:'absolute', bottom:'2.2rem', right:'2.2rem',
                  fontFamily:'Montserrat,sans-serif', fontSize:'.52rem', letterSpacing:'.2em',
                  color: isCls ? '#333' : 'var(--gold)',
                  textTransform:'uppercase',
                  opacity: isHov ? 1 : 0, transform: isHov ? 'none' : 'translateX(10px)',
                  transition:'all .35s',
                }}>
                  {isCls ? 'Restricted →' : 'Open File →'}
                </div>
              </div>
            </GSAPReveal>
          )
        })}
      </div>

      <Footer links={[
        { href:'/',        label:'Sanctuary'    },
        { href:'/ledger',  label:'The Ledger'   },
        { href:'/access',  label:'System Access'},
      ]}/>

      <style>{`@media(max-width:700px){div[style*="auto-fill,minmax(360px"]{grid-template-columns:1fr!important;}}`}</style>
    </div>
  )
}

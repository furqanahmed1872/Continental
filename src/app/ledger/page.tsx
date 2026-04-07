'use client'
import { timeline, years } from '@/lib/data'
import GSAPReveal from '@/components/GSAPReveal'
import Footer     from '@/components/Footer'

const dotCfg = {
  deployed:   { bg:'var(--gold)',  shadow:'0 0 10px rgba(201,166,107,0.7)', pulse:false },
  active:     { bg:'var(--red)',   shadow:'0 0 10px rgba(200,16,46,0.7)',   pulse:true  },
  upcoming:   { bg:'#282828',      shadow:'none',                            pulse:false },
  classified: { bg:'#1e1e1e',      shadow:'none',                            pulse:false },
}

const badgeCfg = {
  deployed:   { color:'var(--gold)', border:'rgba(201,166,107,0.3)' },
  active:     { color:'var(--red)',  border:'rgba(200,16,46,0.3)'   },
  upcoming:   { color:'#555',        border:'#2a2a2a'                },
  classified: { color:'#444',        border:'#222'                   },
}

export default function LedgerPage() {
  return (
    <div style={{ background:'var(--black)', minHeight:'100vh', animation:'pageIn .6s ease forwards' }}>

      {/* Hero */}
      <div style={{ textAlign:'center', padding:'6rem 2rem 4rem', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse at 50% 90%, rgba(201,166,107,0.04) 0%, transparent 70%)', pointerEvents:'none' }}/>
        <GSAPReveal><div className="s-label-center" style={{ marginBottom:'1.2rem' }}>Project Timeline</div></GSAPReveal>
        <GSAPReveal delay={0.1}>
          <h1 className="heading-xl" style={{ fontSize:'clamp(2rem,7vw,5.5rem)', color:'var(--white)', marginBottom:'1rem' }}>
            The <span style={{ color:'var(--gold)', textShadow:'0 0 40px rgba(201,166,107,0.25)' }}>Ledger</span>
          </h1>
        </GSAPReveal>
        <GSAPReveal delay={0.15}>
          <p className="body-serif" style={{ fontSize:'1.2rem', color:'var(--white-dim)', fontStyle:'italic' }}>
            A record of every operation. Every victory. Every ongoing mission.
          </p>
        </GSAPReveal>

        {/* Legend */}
        <GSAPReveal delay={0.2}>
          <div style={{ display:'flex', justifyContent:'center', gap:'2.5rem', marginTop:'2.5rem', flexWrap:'wrap' }}>
            {([
              { label:'Deployed', color:'var(--gold)', dot:'var(--gold)',  glow:'rgba(201,166,107,0.7)' },
              { label:'Active',   color:'var(--red)',  dot:'var(--red)',   glow:'rgba(200,16,46,0.7)'   },
              { label:'Upcoming', color:'#555',        dot:'#2a2a2a',     glow:'none'                  },
            ] as const).map(({ label, color, dot }) => (
              <div key={label} style={{ display:'flex', alignItems:'center', gap:'.55rem' }}>
                <span style={{ width:7, height:7, borderRadius:'50%', background:dot, display:'inline-block', border: label==='Upcoming'?'.5px solid #444':'none' }}/>
                <span className="label-mono" style={{ color, fontSize:'.52rem' }}>{label}</span>
              </div>
            ))}
          </div>
        </GSAPReveal>
      </div>

      {/* Timeline */}
      <div style={{ maxWidth:880, margin:'0 auto', padding:'0 3rem 3rem' }}>
        {years.map(year => {
          const entries = timeline.filter(e => e.year === year)
          return (
            <div key={year}>
              {/* Year heading */}
              <GSAPReveal>
                <div style={{
                  fontFamily:'Cinzel,serif', fontSize:'1.3rem', color:'var(--gold)',
                  letterSpacing:'.2em', margin:'4rem 0 2.2rem',
                  borderBottom:'.5px solid rgba(201,166,107,0.12)', paddingBottom:'1rem',
                  display:'flex', alignItems:'center', gap:'1rem',
                }}>
                  <div style={{ width:6, height:6, border:'.5px solid var(--gold)', transform:'rotate(45deg)' }}/>
                  {year}
                </div>
              </GSAPReveal>

              {entries.map((entry, idx) => {
                const ds = dotCfg[entry.status]
                const bs = badgeCfg[entry.status]
                return (
                  <GSAPReveal key={entry.id} delay={idx * 0.07}>
                    <div style={{
                      display:'grid', gridTemplateColumns:'110px 1fr', gap:'2.5rem',
                      marginBottom:'2rem', paddingBottom:'2rem',
                      borderBottom: idx < entries.length-1 ? '.5px solid rgba(201,166,107,0.05)' : 'none',
                      transition:'all .3s',
                    }}
                      className="tl-item"
                    >
                      {/* Left */}
                      <div style={{ textAlign:'right', paddingTop:'.3rem' }}>
                        <div className="label-mono" style={{ color:'var(--white-dim)', fontSize:'.52rem', letterSpacing:'.12em' }}>
                          {entry.date}
                        </div>
                        <div style={{ display:'flex', justifyContent:'flex-end', alignItems:'center', gap:'.7rem', marginTop:'.9rem' }}>
                          <div style={{ flex:1, height:.5, background:'linear-gradient(to left,var(--gold-dim),transparent)' }}/>
                          <div style={{
                            width:10, height:10, borderRadius:'50%', flexShrink:0,
                            background:ds.bg, boxShadow:ds.shadow,
                            animation: ds.pulse ? 'blink 1.5s infinite' : undefined,
                          }}/>
                        </div>
                      </div>

                      {/* Right */}
                      <div className="tl-right">
                        <div className="heading-md tl-name" style={{
                          fontSize:'1.15rem', color:'var(--white)',
                          marginBottom:'.55rem', cursor:'default',
                          transition:'color .3s',
                        }}>
                          {entry.name}
                        </div>
                        <p className="body-serif" style={{ fontSize:'1rem', color:'var(--white-dim)', lineHeight:1.85, marginBottom:'.85rem' }}>
                          {entry.body}
                        </p>
                        <span style={{
                          display:'inline-flex', alignItems:'center',
                          fontFamily:'Montserrat,sans-serif', fontSize:'.48rem', letterSpacing:'.15em',
                          textTransform:'uppercase', border:'.5px solid',
                          padding:'.28rem .75rem',
                          color:bs.color, borderColor:bs.border,
                        }}>
                          {entry.status.charAt(0).toUpperCase()+entry.status.slice(1)}
                        </span>
                      </div>
                    </div>
                  </GSAPReveal>
                )
              })}
            </div>
          )
        })}
      </div>

      <Footer links={[
        { href:'/',         label:'Sanctuary'    },
        { href:'/registry', label:'The Registry'  },
        { href:'/access',   label:'System Access' },
      ]}/>

      <style>{`
        .tl-item:hover .tl-name { color: var(--gold) !important; }
        @media(max-width:600px){
          div[style*="110px 1fr"]{grid-template-columns:75px 1fr!important;gap:1.2rem!important;}
          div[style*="0 3rem"]{padding:0 1.5rem 2rem!important;}
        }
      `}</style>
    </div>
  )
}

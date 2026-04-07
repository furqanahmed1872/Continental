'use client'
import GSAPReveal from '@/components/GSAPReveal'
import Footer from '@/components/Footer'

const values = [
  { num:'I',   title:'Precision',  body:'Every line of code is deliberate. Every pixel placed with intent. We do not ship work we would not stake our reputation on.' },
  { num:'II',  title:'Power',      body:'We build for scale, for resilience, for the long game. Our systems are not fragile. They are fortresses.' },
  { num:'III', title:'Permanence', body:'We do not build for trends. We build for time. Every product is designed to outlast the moment of its making.' },
]

const techStack = [
  'Next.js 15','React 19','TypeScript','Tailwind CSS','Supabase','PostgreSQL',
  'Node.js','Express','OpenAI API','Whisper','n8n','Make.com',
  'GoHighLevel','WhatsApp Business API','Slack API','HeyGen','Vercel','GitHub',
]

export default function AboutPage() {
  return (
    <div style={{ background:'var(--black)', minHeight:'100vh', animation:'pageIn .6s ease forwards' }}>

      {/* Hero */}
      <div style={{ textAlign:'center', padding:'6rem 2rem 5rem', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse at 50% 100%, rgba(201,166,107,0.06) 0%, transparent 65%)', pointerEvents:'none' }}/>
        {/* Corner decorations */}
        {[['top:5rem','left:3rem','borderTop','borderLeft'],['top:5rem','right:3rem','borderTop','borderRight'],
          ['bottom:3rem','left:3rem','borderBottom','borderLeft'],['bottom:3rem','right:3rem','borderBottom','borderRight']
        ].map((d,i)=>(
          <div key={i} style={{ position:'absolute', [d[0].split(':')[0]]:d[0].split(':')[1], [d[1].split(':')[0]]:d[1].split(':')[1], width:35, height:35, [d[2]]:'.5px solid rgba(201,166,107,0.15)', [d[3]]:'.5px solid rgba(201,166,107,0.15)' } as React.CSSProperties}/>
        ))}

        <GSAPReveal><div className="s-label-center" style={{ marginBottom:'1.2rem' }}>Who We Are</div></GSAPReveal>
        <GSAPReveal delay={0.1}>
          <h1 className="heading-xl" style={{ fontSize:'clamp(2rem,7vw,5.5rem)', color:'var(--white)', marginBottom:'1.2rem' }}>
            The <span style={{ color:'var(--gold)', textShadow:'0 0 40px rgba(201,166,107,0.25)' }}>Organization</span>
          </h1>
        </GSAPReveal>
        <GSAPReveal delay={0.15}>
          <p className="body-serif" style={{ fontSize:'1.3rem', color:'var(--white-dim)', fontStyle:'italic', maxWidth:620, margin:'0 auto' }}>
            "We do not build websites. We build systems of power, precision, and permanence."
          </p>
        </GSAPReveal>
      </div>

      {/* Body */}
      <div style={{ maxWidth:860, margin:'0 auto', padding:'0 2.5rem 5rem' }}>

        {/* Origin */}
        <GSAPReveal>
          <div style={{ marginBottom:'4.5rem' }}>
            <h2 className="heading-md" style={{ fontSize:'1.45rem', color:'var(--gold)', marginBottom:'1.3rem', letterSpacing:'.06em' }}>Origin</h2>
            <p className="body-serif" style={{ fontSize:'1.12rem', color:'var(--white-dim)', marginBottom:'1rem' }}>
              The Continental was not founded. It was forged — in late nights, broken builds, and the stubborn belief that digital excellence is not a luxury but a standard.
            </p>
            <p className="body-serif" style={{ fontSize:'1.12rem', color:'var(--white-dim)' }}>
              We began as a small collective of engineers and designers who were tired of ordinary. Tired of cookie-cutter solutions, hollow promises, and systems built to be mediocre. So we wrote our own code of conduct — and we have lived by it ever since.
            </p>
          </div>
        </GSAPReveal>

        <GSAPReveal><div className="gold-rule" style={{ margin:'0 0 4.5rem' }}/></GSAPReveal>

        {/* Mission */}
        <GSAPReveal>
          <div style={{ marginBottom:'4.5rem' }}>
            <h2 className="heading-md" style={{ fontSize:'1.45rem', color:'var(--gold)', marginBottom:'1.3rem', letterSpacing:'.06em' }}>The Mission</h2>
            <p className="body-serif" style={{ fontSize:'1.12rem', color:'var(--white-dim)' }}>
              To engineer digital products that operate by their own rules — products with integrity, intelligence, and identity. Every system we build is a sanctuary: a place where precision meets power, and where mediocrity is simply not admitted through the door.
            </p>
          </div>
        </GSAPReveal>

        <GSAPReveal><div className="gold-rule" style={{ margin:'0 0 4.5rem' }}/></GSAPReveal>

        {/* Vision */}
        <GSAPReveal>
          <div style={{ marginBottom:'4.5rem' }}>
            <h2 className="heading-md" style={{ fontSize:'1.45rem', color:'var(--gold)', marginBottom:'1.3rem', letterSpacing:'.06em' }}>The Vision</h2>
            <p className="body-serif" style={{ fontSize:'1.12rem', color:'var(--white-dim)' }}>
              A world where every serious organization has access to the kind of digital infrastructure that was once reserved only for the elite. We democratize excellence — without ever diluting it. The standard does not move. The work rises to meet it.
            </p>
          </div>
        </GSAPReveal>

        <GSAPReveal><div className="gold-rule" style={{ margin:'0 0 4.5rem' }}/></GSAPReveal>

        {/* The Code / Values */}
        <GSAPReveal>
          <h2 className="heading-md" style={{ fontSize:'1.45rem', color:'var(--gold)', marginBottom:'2rem', letterSpacing:'.06em' }}>The Code</h2>
        </GSAPReveal>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'1.5px', background:'rgba(201,166,107,0.07)', marginBottom:'4.5rem' }}>
          {values.map(({ num, title, body }, i) => (
            <GSAPReveal key={num} delay={i * 0.1}>
              <div className="glass glass-hover" style={{ padding:'2.2rem', cursor:'default', height:'100%' }}>
                <span style={{ fontFamily:'Cinzel,serif', fontSize:'3rem', color:'rgba(201,166,107,0.1)', fontWeight:700, display:'block', lineHeight:1 }}>{num}</span>
                <div className="heading-md" style={{ fontSize:'1rem', color:'var(--gold)', margin:'.5rem 0 .9rem', letterSpacing:'.05em' }}>{title}</div>
                <p className="body-serif" style={{ fontSize:'.98rem', color:'var(--white-dim)', lineHeight:1.82 }}>{body}</p>
              </div>
            </GSAPReveal>
          ))}
        </div>

        <GSAPReveal><div className="gold-rule" style={{ margin:'0 0 4.5rem' }}/></GSAPReveal>

        {/* Arsenal */}
        <GSAPReveal>
          <h2 className="heading-md" style={{ fontSize:'1.45rem', color:'var(--gold)', marginBottom:'1.8rem', letterSpacing:'.06em' }}>Our Arsenal</h2>
          <div style={{ display:'flex', flexWrap:'wrap', gap:'.6rem' }}>
            {techStack.map(tech => (
              <span key={tech} className="label-mono" style={{
                fontSize:'.52rem', color:'var(--gold-dim)',
                border:'.5px solid rgba(201,166,107,0.16)',
                padding:'.32rem .85rem', background:'rgba(201,166,107,0.04)',
                transition:'all .3s', cursor:'default',
              }}
                onMouseEnter={e=>{ e.currentTarget.style.borderColor='rgba(201,166,107,0.4)'; e.currentTarget.style.color='var(--gold)'; e.currentTarget.style.background='rgba(201,166,107,0.08)' }}
                onMouseLeave={e=>{ e.currentTarget.style.borderColor='rgba(201,166,107,0.16)'; e.currentTarget.style.color='var(--gold-dim)'; e.currentTarget.style.background='rgba(201,166,107,0.04)' }}
              >
                {tech}
              </span>
            ))}
          </div>
        </GSAPReveal>
      </div>

      <Footer links={[
        { href:'/council',  label:'The Council'   },
        { href:'/registry', label:'The Registry'   },
        { href:'/access',   label:'System Access'  },
      ]}/>

      <style>{`
        @media(max-width:600px){
          div[style*="repeat(3,1fr)"]{grid-template-columns:1fr!important;}
          div[style*="0 2.5rem"]{padding:0 1.5rem 3rem!important;}
        }
      `}</style>
    </div>
  )
}

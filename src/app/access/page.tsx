'use client'
import { useState } from 'react'
import GSAPReveal from '@/components/GSAPReveal'
import Footer     from '@/components/Footer'

const serviceOptions = [
  'Full-Stack Web Application',
  'n8n Workflow Automation',
  'AI Integration & Agents',
  'WhatsApp / CRM System',
  'Codebase Audit & Review',
  'Strategy & Consultation',
  'Other',
]

const infoItems = [
  { label:'Response Time',      value:'Within 24 hours'       },
  { label:'Availability',       value:'New projects: Q3 2026' },
  { label:'Min. Engagement',    value:'Discovery Sprint'       },
  { label:'Clearance',          value:'Open to All'           },
]

interface FormState { name:string; email:string; service:string; message:string }

export default function AccessPage() {
  const [form, setForm]         = useState<FormState>({ name:'', email:'', service:'', message:'' })
  const [errors, setErrors]     = useState<string[]>([])
  const [submitted, setSubmitted] = useState(false)

  const update = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) => {
    setForm(f => ({ ...f, [field]: e.target.value }))
    setErrors(ev => ev.filter(x => x !== field))
  }

  const submit = () => {
    const errs = (['name','email','service','message'] as (keyof FormState)[]).filter(k => !form[k].trim())
    setErrors(errs)
    if (errs.length) return
    setSubmitted(true)
  }

  const inputBase: React.CSSProperties = {
    width:'100%', background:'rgba(201,166,107,0.03)',
    color:'var(--white)', fontFamily:'Cormorant Garamond,serif', fontSize:'1.05rem',
    padding:'.95rem 1.15rem', outline:'none', transition:'border-color .35s, box-shadow .35s',
    appearance:'none',
  }

  const inputStyle = (field: string): React.CSSProperties => ({
    ...inputBase,
    border: `.5px solid ${errors.includes(field) ? 'rgba(200,16,46,0.55)' : 'rgba(201,166,107,0.2)'}`,
  })

  const onFocus = (e: React.FocusEvent<any>) => {
    e.target.style.borderColor = 'rgba(201,166,107,0.55)'
    e.target.style.boxShadow   = '0 0 20px rgba(201,166,107,0.07)'
  }
  const onBlur = (field: string) => (e: React.FocusEvent<any>) => {
    e.target.style.borderColor = errors.includes(field) ? 'rgba(200,16,46,0.55)' : 'rgba(201,166,107,0.2)'
    e.target.style.boxShadow   = 'none'
  }

  return (
    <div style={{ background:'var(--black)', minHeight:'100vh', animation:'pageIn .6s ease forwards' }}>

      {/* Hero */}
      <div style={{ textAlign:'center', padding:'6rem 2rem 4rem', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse at 50% 80%, rgba(201,166,107,0.05) 0%, transparent 65%)', pointerEvents:'none' }}/>
        <GSAPReveal><div className="s-label-center" style={{ marginBottom:'1.2rem' }}>Clearance Request</div></GSAPReveal>
        <GSAPReveal delay={0.1}>
          <h1 className="heading-xl" style={{ fontSize:'clamp(2rem,7vw,5.5rem)', color:'var(--white)', marginBottom:'1rem' }}>
            System <span style={{ color:'var(--gold)', textShadow:'0 0 40px rgba(201,166,107,0.25)' }}>Access</span>
          </h1>
        </GSAPReveal>
        <GSAPReveal delay={0.15}>
          <p className="body-serif" style={{ fontSize:'1.2rem', color:'var(--white-dim)', fontStyle:'italic' }}>
            Submit your credentials. The front desk will be in touch.
          </p>
        </GSAPReveal>
      </div>

      {/* Info grid */}
      <GSAPReveal>
        <div style={{
          display:'grid', gridTemplateColumns:'repeat(4,1fr)',
          gap:'1.5px', background:'rgba(201,166,107,0.06)',
          maxWidth:860, margin:'0 auto', padding:'0 4rem',
        }}>
          {infoItems.map(({ label, value }) => (
            <div key={label} className="glass" style={{ padding:'1.6rem 1.8rem' }}>
              <div className="label-mono" style={{ fontSize:'.5rem', color:'var(--gold-dim)', marginBottom:'.5rem' }}>{label}</div>
              <div className="body-serif" style={{ fontSize:'1rem', color:'var(--white-dim)' }}>{value}</div>
            </div>
          ))}
        </div>
      </GSAPReveal>

      {/* Form */}
      <div style={{ maxWidth:640, margin:'3.5rem auto 0', padding:'0 2rem 5rem' }}>
        {!submitted ? (
          <GSAPReveal delay={0.1}>
            <div style={{ display:'flex', flexDirection:'column', gap:'1.8rem' }}>

              {/* Name */}
              <div>
                <label className="label-mono" style={{ fontSize:'.56rem', color: errors.includes('name') ? 'var(--red)' : 'var(--gold-dim)', display:'block', marginBottom:'.6rem' }}>
                  Full Name {errors.includes('name') && '— Required'}
                </label>
                <input style={inputStyle('name')} type="text" placeholder="Your name"
                  value={form.name} onChange={update('name')} onFocus={onFocus} onBlur={onBlur('name')}/>
              </div>

              {/* Email */}
              <div>
                <label className="label-mono" style={{ fontSize:'.56rem', color: errors.includes('email') ? 'var(--red)' : 'var(--gold-dim)', display:'block', marginBottom:'.6rem' }}>
                  Contact Channel {errors.includes('email') && '— Required'}
                </label>
                <input style={inputStyle('email')} type="email" placeholder="Email address"
                  value={form.email} onChange={update('email')} onFocus={onFocus} onBlur={onBlur('email')}/>
              </div>

              {/* Service */}
              <div>
                <label className="label-mono" style={{ fontSize:'.56rem', color: errors.includes('service') ? 'var(--red)' : 'var(--gold-dim)', display:'block', marginBottom:'.6rem' }}>
                  Operation Type {errors.includes('service') && '— Required'}
                </label>
                <select style={{ ...inputStyle('service'), cursor:'none' }}
                  value={form.service} onChange={update('service')} onFocus={onFocus} onBlur={onBlur('service')}>
                  <option value="" style={{ background:'#111' }}>Select a service</option>
                  {serviceOptions.map(o => <option key={o} value={o} style={{ background:'#111' }}>{o}</option>)}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="label-mono" style={{ fontSize:'.56rem', color: errors.includes('message') ? 'var(--red)' : 'var(--gold-dim)', display:'block', marginBottom:'.6rem' }}>
                  Mission Brief {errors.includes('message') && '— Required'}
                </label>
                <textarea style={{ ...inputStyle('message'), minHeight:145, resize:'vertical' }}
                  placeholder="Describe your operation. What are you building? What problem needs solving?"
                  value={form.message} onChange={update('message')} onFocus={onFocus} onBlur={onBlur('message')}/>
              </div>

              {/* Submit */}
              <button onClick={submit} className="btn-gold" style={{ width:'100%', justifyContent:'center', fontSize:'.72rem', letterSpacing:'.42em', padding:'1.15rem' }}>
                Submit Request
              </button>
            </div>
          </GSAPReveal>
        ) : (
          <div style={{ textAlign:'center', padding:'4rem 2rem', animation:'riseIn .8s ease forwards' }}>
            <div className="animate-coin-pulse" style={{
              width:64, height:64, border:'1px solid var(--gold)', borderRadius:'50%',
              display:'flex', alignItems:'center', justifyContent:'center',
              margin:'0 auto 1.8rem', animation:'coinPulse 2s infinite',
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9A66B" strokeWidth="1.5" strokeLinecap="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>
            <div className="heading-md" style={{ fontSize:'1.5rem', color:'var(--gold)', letterSpacing:'.1em', marginBottom:'.9rem' }}>
              Request Received
            </div>
            <p className="body-serif" style={{ fontSize:'1.1rem', color:'var(--white-dim)', fontStyle:'italic', lineHeight:1.75 }}>
              "Your credentials have been logged. The front desk will contact you within 24 hours. Welcome to the Continental, {form.name}."
            </p>
            <button onClick={() => { setSubmitted(false); setForm({ name:'', email:'', service:'', message:'' }) }}
              className="btn-outline" style={{ marginTop:'2.5rem', fontSize:'.62rem' }}>
              Submit Another Request
            </button>
          </div>
        )}
      </div>

      <Footer links={[
        { href:'/',         label:'Sanctuary'    },
        { href:'/registry', label:'The Registry'  },
        { href:'/council',  label:'The Council'   },
      ]}/>

      <style>{`
        @media(max-width:768px){
          div[style*="repeat(4,1fr)"]{grid-template-columns:1fr 1fr!important;padding:0 1.5rem!important;}
          div[style*="0 4rem"]{padding:0 1.5rem!important;}
        }
        @media(max-width:480px){
          div[style*="repeat(4,1fr)"]{grid-template-columns:1fr!important;}
        }
        input::placeholder,textarea::placeholder{color:#444;font-family:'Cormorant Garamond',serif;font-size:1rem;}
        select option{background:#0d0d0d;color:var(--white);}
      `}</style>
    </div>
  )
}

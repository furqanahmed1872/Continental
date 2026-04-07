import Link from 'next/link'

export default function NotFound() {
  return (
    <div style={{
      background:'var(--black)', minHeight:'100vh',
      display:'flex', flexDirection:'column',
      alignItems:'center', justifyContent:'center',
      textAlign:'center', padding:'2rem',
      animation:'pageIn .6s ease forwards',
    }}>
      <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse at center,rgba(200,16,46,0.04) 0%,transparent 65%)', pointerEvents:'none' }}/>

      {/* Coin */}
      <div style={{
        width:72, height:72, border:'1px solid rgba(201,166,107,0.3)', borderRadius:'50%',
        display:'flex', alignItems:'center', justifyContent:'center',
        marginBottom:'2rem', animation:'coinPulse 3s ease infinite', position:'relative',
      }}>
        <div style={{ position:'absolute', inset:10, border:'.5px solid rgba(201,166,107,0.12)', borderRadius:'50%' }}/>
        <span style={{ fontFamily:'Cinzel,serif', fontSize:'1.8rem', color:'var(--gold-dim)', fontWeight:700 }}>?</span>
      </div>

      <div className="heading-xl" style={{ fontSize:'clamp(5rem,18vw,11rem)', color:'rgba(201,166,107,0.06)', lineHeight:.9, marginBottom:'1rem', userSelect:'none' }}>
        404
      </div>

      <h1 className="heading-lg" style={{ fontSize:'clamp(1.4rem,4vw,2.5rem)', color:'var(--white)', marginBottom:'1rem' }}>
        Access <span style={{ color:'var(--red)' }}>Denied</span>
      </h1>

      <p className="body-serif" style={{ fontSize:'1.15rem', color:'var(--white-dim)', fontStyle:'italic', maxWidth:460, lineHeight:1.75, marginBottom:'3rem', position:'relative' }}>
        This file does not exist in the Registry, or your clearance level is insufficient. The front desk has been notified.
      </p>

      <Link href="/" className="btn-gold" style={{ textDecoration:'none' }}>
        Return to Sanctuary
      </Link>
    </div>
  )
}

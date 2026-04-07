'use client'
import { useEffect, useRef, useState, useCallback } from 'react'

export default function SoundButton() {
  const [playing, setPlaying] = useState(false)
  const [ready,   setReady  ] = useState(false)
  const ctx    = useRef<AudioContext | null>(null)
  const master = useRef<GainNode | null>(null)
  const built  = useRef(false)

  const buildAmbience = useCallback((c: AudioContext, m: GainNode) => {
    if (built.current) return
    built.current = true

    const osc = (freq: number, type: OscillatorType, gain: number) => {
      const o = c.createOscillator()
      const g = c.createGain()
      o.type = type; o.frequency.value = freq; g.gain.value = gain
      o.connect(g); g.connect(m); o.start()
      return { o, g }
    }

    // Deep sub drone
    osc(40, 'sine', 0.22)

    // Fundamental
    const { o: fund } = osc(55, 'sine', 0.26)
    // Slow detune for movement
    const dLfo = c.createOscillator(); dLfo.frequency.value = 0.03
    const dG   = c.createGain();       dG.gain.value = 0.8
    dLfo.connect(dG); dG.connect(fund.detune); dLfo.start()

    // 5th
    osc(82.5, 'sine', 0.1)

    // Octave
    osc(110, 'triangle', 0.055)

    // Shimmer 220 + LFO
    const { o: sh } = osc(220, 'sine', 0.038)
    const sLfo = c.createOscillator(); sLfo.frequency.value = 0.07
    const sG   = c.createGain();       sG.gain.value = 14
    sLfo.connect(sG); sG.connect(sh.frequency); sLfo.start()

    // High shimmer 440
    const { o: hi } = osc(440, 'sine', 0.012)
    const hLfo = c.createOscillator(); hLfo.frequency.value = 0.035
    const hG   = c.createGain();       hG.gain.value = 9
    hLfo.connect(hG); hG.connect(hi.frequency); hLfo.start()

    // Very high bell shimmer 880
    const { o: bell } = osc(880, 'sine', 0.006)
    const bLfo = c.createOscillator(); bLfo.frequency.value = 0.055
    const bG   = c.createGain();       bG.gain.value = 6
    bLfo.connect(bG); bG.connect(bell.frequency); bLfo.start()

    // Low noise pad
    const sr = c.sampleRate; const buf = c.createBuffer(1, sr*4, sr)
    const data = buf.getChannelData(0)
    for (let i = 0; i < data.length; i++) data[i] = (Math.random()*2-1)*.01
    const noise = c.createBufferSource(); noise.buffer = buf; noise.loop = true
    const filt = c.createBiquadFilter(); filt.type = 'lowpass'; filt.frequency.value = 140
    const nG = c.createGain(); nG.gain.value = 0.5
    noise.connect(filt); filt.connect(nG); nG.connect(m); noise.start()

    // Mid noise breathe
    const buf2 = c.createBuffer(1, sr*3, sr)
    const d2 = buf2.getChannelData(0)
    for (let i=0;i<d2.length;i++) d2[i]=(Math.random()*2-1)*.008
    const noise2=c.createBufferSource();noise2.buffer=buf2;noise2.loop=true
    const f2=c.createBiquadFilter();f2.type='bandpass';f2.frequency.value=300;f2.Q.value=0.5
    const n2G=c.createGain();n2G.gain.value=0.2
    // Amplitude LFO on noise2
    const aLfo=c.createOscillator();aLfo.frequency.value=0.06
    const aG=c.createGain();aG.gain.value=0.15
    aLfo.connect(aG);aG.connect(n2G.gain);aLfo.start()
    noise2.connect(f2);f2.connect(n2G);n2G.connect(m);noise2.start()
  }, [])

  useEffect(() => {
    const handler = () => {
      if (ctx.current) return
      const c = new (window.AudioContext || (window as any).webkitAudioContext)()
      const m = c.createGain()
      m.gain.setValueAtTime(0, c.currentTime)
      m.gain.linearRampToValueAtTime(0.14, c.currentTime + 5)
      m.connect(c.destination)
      ctx.current = ctx.current || c
      master.current = m
      buildAmbience(c, m)
      setPlaying(true)
      setReady(true)
    }
    window.addEventListener('continental:enter', handler)
    return () => window.removeEventListener('continental:enter', handler)
  }, [buildAmbience])

  const toggle = () => {
    if (!ctx.current || !master.current) return
    const now = ctx.current.currentTime
    if (playing) {
      master.current.gain.linearRampToValueAtTime(0, now + 1.5)
      setPlaying(false)
    } else {
      master.current.gain.linearRampToValueAtTime(0.14, now + 1.5)
      setPlaying(true)
    }
  }

  if (!ready) return null

  return (
    <button id="sound-btn" onClick={toggle} aria-label="Toggle ambient sound"
      style={{ borderColor: playing ? 'rgba(201,166,107,0.5)' : 'rgba(200,16,46,0.4)' }}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={playing ? '#C9A66B' : '#555'} strokeWidth="1.5" strokeLinecap="round">
        {playing ? (
          <>
            <path d="M9 18V5l12-2v13"/>
            <circle cx="6" cy="18" r="3"/>
            <circle cx="18" cy="16" r="3"/>
          </>
        ) : (
          <>
            <path d="M9 18V5l12-2v13"/>
            <circle cx="6" cy="18" r="3"/>
            <circle cx="18" cy="16" r="3"/>
            <line x1="3" y1="3" x2="21" y2="21" stroke="var(--red)"/>
          </>
        )}
      </svg>
    </button>
  )
}

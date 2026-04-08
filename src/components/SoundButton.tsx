'use client'
import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'

const TRACKS = [
  '/audio/track1.mp3',
  '/audio/track2.mp3',
  '/audio/track3.mp3',
]

const DEFAULT_VOLUME = 0.5
const FADE_DURATION  = 1200

function fadeVolume(
  audio: HTMLAudioElement,
  from: number,
  to: number,
  duration: number,
  onDone?: () => void
) {
  audio.volume  = Math.max(0, Math.min(1, from))
  const steps   = 40
  const interval = duration / steps
  const delta   = (to - from) / steps
  let count     = 0
  const timer   = setInterval(() => {
    count++
    audio.volume = Math.min(1, Math.max(0, audio.volume + delta))
    if (count >= steps) { clearInterval(timer); onDone?.() }
  }, interval)
  return timer
}

export default function SoundButton() {
  const pathname               = usePathname()
  const [visible,  setVisible] = useState(false)
  const [playing,  setPlaying] = useState(false)
  const [volume,   setVolume ] = useState(DEFAULT_VOLUME)
  const [showSlider, setShowSlider] = useState(false)
  const audioRef               = useRef<HTMLAudioElement | null>(null)
  const trackIdxRef            = useRef(0)
  const initializedRef         = useRef(false)
  const fadeTimerRef           = useRef<ReturnType<typeof setInterval> | null>(null)
  const hideSliderTimer        = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Init audio once
  useEffect(() => {
    const audio      = new Audio(TRACKS[0])
    audio.volume     = 0
    audio.preload    = 'auto'
    audioRef.current = audio

    audio.addEventListener('ended', () => {
      trackIdxRef.current = (trackIdxRef.current + 1) % TRACKS.length
      audio.src    = TRACKS[trackIdxRef.current]
      audio.volume = volume
      audio.play().catch(() => {})
    })

    audio.addEventListener('error', (e) => console.error('Audio error:', e))

    return () => { audio.pause(); audio.src = '' }
  }, [])

  // Visibility — mirrors Navigation.tsx
  useEffect(() => {
    if (pathname !== '/') { setVisible(true); return }

    const handler = () => {
      setVisible(true)
      if (!initializedRef.current && audioRef.current) {
        initializedRef.current = true
        audioRef.current.play()
          .then(() => {
            fadeVolume(audioRef.current!, 0, DEFAULT_VOLUME, 3000)
            setPlaying(true)
          })
          .catch(() => {})
      }
    }

    window.addEventListener('continental:enter', handler)
    return () => window.removeEventListener('continental:enter', handler)
  }, [pathname])

  const toggle = () => {
    const audio = audioRef.current
    if (!audio) return

    if (fadeTimerRef.current) clearInterval(fadeTimerRef.current)

    if (playing) {
      fadeTimerRef.current = fadeVolume(audio, audio.volume, 0, FADE_DURATION, () => audio.pause())
      setPlaying(false)
    } else {
      audio.play()
        .then(() => {
          fadeTimerRef.current = fadeVolume(audio, 0, volume, FADE_DURATION)
          setPlaying(true)
        })
        .catch((err) => console.error('Playback failed:', err))
    }
  }

  const onVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value)
    setVolume(val)
    if (audioRef.current && playing) {
      audioRef.current.volume = val
    }
  }

  const onMouseEnter = () => {
    if (hideSliderTimer.current) clearTimeout(hideSliderTimer.current)
    setShowSlider(true)
  }

  const onMouseLeave = () => {
    hideSliderTimer.current = setTimeout(() => setShowSlider(false), 600)
  }

  if (!visible) return null

  return (
    <div
      style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 500, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Volume slider — appears on hover */}
      <div style={{
        display:        'flex',
        flexDirection:  'column',
        alignItems:     'center',
        gap:            '0.4rem',
        opacity:         showSlider ? 1 : 0,
        transform:       showSlider ? 'translateY(0) scale(1)' : 'translateY(8px) scale(0.95)',
        transition:     'opacity 0.3s ease, transform 0.3s ease',
        pointerEvents:   showSlider ? 'auto' : 'none',
      }}>
        {/* Volume % label */}
        <span style={{
          fontFamily:     'Montserrat, sans-serif',
          fontSize:       '0.45rem',
          letterSpacing:  '0.2em',
          color:          'var(--gold-dim)',
          textTransform:  'uppercase',
        }}>
          {Math.round(volume * 100)}
        </span>

        {/* Vertical slider */}
        <div style={{ position: 'relative', height: 80, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={onVolumeChange}
            aria-label="Volume"
            style={{
              writingMode:    'vertical-lr' as any,
              direction:      'rtl',
              appearance:     'slider-vertical' as any,
              WebkitAppearance: 'slider-vertical' as any,
              width:          4,
              height:         80,
              cursor:         'none',
              accentColor:    'var(--gold)',
              background:     'transparent',
            }}
          />
        </div>

        {/* Divider */}
        <div style={{ width: 0.5, height: 12, background: 'linear-gradient(to bottom, var(--gold-dim), transparent)' }} />
      </div>

      {/* Main button */}
      <button
        id="sound-btn"
        onClick={toggle}
        aria-label="Toggle ambient sound"
        title={playing ? 'Pause music' : 'Play ambient music'}
        style={{ borderColor: playing ? 'rgba(201,166,107,0.5)' : 'rgba(200,16,46,0.4)' }}
      >
        <svg
          width="16" height="16" viewBox="0 0 24 24"
          fill="none"
          stroke={playing ? '#C9A66B' : '#555'}
          strokeWidth="1.5"
          strokeLinecap="round"
        >
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
    </div>
  )
}
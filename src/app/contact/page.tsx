'use client'

import { useState, useRef } from 'react'
import { Send, User, Mail, MessageSquare, ChevronDown, Zap } from 'lucide-react'
import { clsx } from 'clsx'

type FormData = {
  name: string
  email: string
  type: string
  message: string
}

type Status = 'idle' | 'sending' | 'sent' | 'error'

const queryTypes = [
  'General Inquiry',
  'Partnership Proposal',
  'System Access Request',
  'Technical Feedback',
  'Business Opportunity',
  'Press & Media',
  'Other',
]

function GlitchText({ text }: { text: string }) {
  return (
    <span className="relative inline-block group">
      <span className="relative z-10">{text}</span>
      <span
        className="absolute inset-0 text-crimson-400 opacity-0 group-hover:opacity-60 transition-opacity duration-100"
        style={{ textShadow: '2px 0 #ff2a2a', transform: 'translate(-2px, 0)', clipPath: 'inset(20% 0 60% 0)' }}
        aria-hidden
      >{text}</span>
      <span
        className="absolute inset-0 text-gold-400 opacity-0 group-hover:opacity-40 transition-opacity duration-100"
        style={{ textShadow: '-2px 0 #c8860a', transform: 'translate(2px, 0)', clipPath: 'inset(60% 0 20% 0)' }}
        aria-hidden
      >{text}</span>
    </span>
  )
}

function FloatingInput({
  label, icon: Icon, value, onChange, type = 'text', required,
}: {
  label: string; icon: any; value: string;
  onChange: (v: string) => void; type?: string; required?: boolean
}) {
  const [focused, setFocused] = useState(false)
  const active = focused || value.length > 0

  return (
    <div className="relative group">
      <div className={clsx(
        'absolute inset-0 border transition-all duration-400 pointer-events-none',
        active || focused
          ? 'border-crimson-700/60 shadow-[0_0_20px_rgba(139,26,26,0.15)]'
          : 'border-stone-800/60 group-hover:border-stone-700/80'
      )} />
      <div className="relative flex items-center">
        <div className={clsx(
          'absolute left-4 transition-colors duration-300',
          active ? 'text-crimson-500' : 'text-stone-600'
        )}>
          <Icon size={14} />
        </div>
        <input
          type={type}
          value={value}
          required={required}
          onChange={e => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={label}
          className="w-full bg-transparent pl-10 pr-4 py-4 text-sm text-stone-200 placeholder-stone-700 outline-none font-body tracking-wide"
        />
      </div>
    </div>
  )
}

function SelectInput({
  label, value, onChange, options
}: {
  label: string; value: string; onChange: (v: string) => void; options: string[]
}) {
  const [open, setOpen] = useState(false)
  return (
    <div className="relative">
      <div className={clsx(
        'border transition-all duration-400',
        open ? 'border-crimson-700/60 shadow-[0_0_20px_rgba(139,26,26,0.15)]' : 'border-stone-800/60 hover:border-stone-700/80'
      )}>
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between px-4 py-4 text-sm text-left outline-none"
        >
          <div className="flex items-center gap-3">
            <Zap size={14} className={open ? 'text-crimson-500' : 'text-stone-600'} />
            <span className={value ? 'text-stone-200' : 'text-stone-700'}>
              {value || label}
            </span>
          </div>
          <ChevronDown
            size={14}
            className={clsx('text-stone-600 transition-transform duration-300', open && 'rotate-180')}
          />
        </button>
      </div>
      {open && (
        <div className="absolute top-full left-0 right-0 z-50 border border-crimson-900/40 bg-obsidian-700/95 backdrop-blur-xl overflow-hidden">
          {options.map(opt => (
            <button
              key={opt}
              type="button"
              onClick={() => { onChange(opt); setOpen(false) }}
              className={clsx(
                'w-full text-left px-4 py-3 text-sm tracking-wide transition-all duration-200',
                'hover:bg-crimson-950/60 hover:text-crimson-300',
                value === opt ? 'text-gold-400 bg-gold-950/30' : 'text-stone-400'
              )}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({ name: '', email: '', type: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')
  const [focused, setFocused] = useState(false)

  const set = (k: keyof FormData) => (v: string) => setForm(p => ({ ...p, [k]: v }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    await new Promise(r => setTimeout(r, 2200))
    setStatus('sent')
  }

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 relative overflow-hidden">

      {/* Background atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-crimson-950/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-950/15 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <p className="font-mono text-xs tracking-[0.4em] uppercase text-crimson-600 mb-4">
            — System Entry Protocol —
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-light text-stone-100 leading-none mb-6">
            <GlitchText text="Request" />{' '}
            <span className="text-gradient-red italic">Access</span>
          </h1>
          <p className="text-stone-500 text-lg max-w-lg mx-auto leading-relaxed">
            All transmissions are encrypted. State your intent. We respond to those worth responding to.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* Left panel — info */}
          <div className="lg:col-span-2 space-y-6">

            {/* Status terminal */}
            <div className="glass-card p-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-crimson-600 to-transparent" />
              <p className="font-mono text-[10px] tracking-[0.3em] text-crimson-700 uppercase mb-4">
                Terminal Status
              </p>
              <div className="space-y-2 font-mono text-xs">
                {[
                  { label: 'Network',    val: 'SECURE',   color: 'text-emerald-400' },
                  { label: 'Encryption', val: 'AES-256',  color: 'text-gold-500' },
                  { label: 'Protocol',   val: 'v2.4.1',   color: 'text-stone-400' },
                  { label: 'Access',     val: 'OPEN',     color: 'text-crimson-400' },
                ].map(r => (
                  <div key={r.label} className="flex justify-between">
                    <span className="text-stone-700">{r.label}</span>
                    <span className={r.color}>{r.val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Info blocks */}
            {[
              {
                title: 'Response Time',
                body: 'All requests reviewed within 48 hours. Priority cases escalated within 6 hours.',
              },
              {
                title: 'Confidentiality',
                body: 'Every submission is treated with absolute discretion. Continental does not disclose inquiries.',
              },
              {
                title: 'Direct Access',
                body: 'For urgent matters, encoded communications are accepted through secured channels only.',
              },
            ].map(item => (
              <div key={item.title} className="glass-card glass-card-hover p-5 relative">
                <div className="absolute top-0 right-0 w-4 h-4">
                  <div className="absolute top-0 right-0 w-full h-px bg-crimson-700/40" />
                  <div className="absolute top-0 right-0 h-full w-px bg-crimson-700/40" />
                </div>
                <h4 className="font-display text-base font-semibold text-stone-200 mb-2">{item.title}</h4>
                <p className="text-stone-500 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          {/* Right — form */}
          <div className="lg:col-span-3">
            {status === 'sent' ? (
              <div className="glass-card p-16 text-center h-full flex flex-col items-center justify-center gap-6">
                <div className="w-16 h-16 border-2 border-emerald-600/60 flex items-center justify-center rotate-45 mb-4">
                  <div className="-rotate-45 text-emerald-400 text-2xl">✓</div>
                </div>
                <div>
                  <h3 className="font-display text-3xl font-light text-stone-100 mb-3">
                    Transmission Received
                  </h3>
                  <p className="text-stone-500 text-sm leading-relaxed max-w-xs mx-auto">
                    Your message has entered the system. Continental will respond through secured channels.
                  </p>
                </div>
                <p className="font-mono text-xs text-gold-700 tracking-wider">
                  REF: {Math.random().toString(36).slice(2, 10).toUpperCase()}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card p-8 space-y-4 relative">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-crimson-700/40 to-transparent" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FloatingInput label="Full Name" icon={User} value={form.name} onChange={set('name')} required />
                  <FloatingInput label="Email Address" icon={Mail} value={form.email} onChange={set('email')} type="email" required />
                </div>

                <SelectInput
                  label="Nature of Inquiry"
                  value={form.type}
                  onChange={set('type')}
                  options={queryTypes}
                />

                {/* Textarea */}
                <div className="relative group">
                  <div className={clsx(
                    'absolute inset-0 border transition-all duration-400 pointer-events-none',
                    focused
                      ? 'border-crimson-700/60 shadow-[0_0_20px_rgba(139,26,26,0.15)]'
                      : 'border-stone-800/60 group-hover:border-stone-700/80'
                  )} />
                  <div className="relative flex items-start pt-1">
                    <div className="absolute left-4 top-4 text-stone-600">
                      <MessageSquare size={14} />
                    </div>
                    <textarea
                      value={form.message}
                      onChange={e => set('message')(e.target.value)}
                      onFocus={() => setFocused(true)}
                      onBlur={() => setFocused(false)}
                      placeholder="State your message..."
                      required
                      rows={7}
                      className="w-full bg-transparent pl-10 pr-4 py-4 text-sm text-stone-200 placeholder-stone-700 outline-none resize-none font-body tracking-wide leading-relaxed"
                    />
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className={clsx(
                    'btn-primary w-full justify-center mt-2',
                    status === 'sending' && 'opacity-70 cursor-not-allowed'
                  )}
                >
                  {status === 'sending' ? (
                    <>
                      <span className="inline-block w-3 h-3 border border-current border-t-transparent rounded-full animate-spin" />
                      Transmitting...
                    </>
                  ) : (
                    <>
                      <Send size={13} />
                      Transmit Message
                    </>
                  )}
                </button>

                <p className="text-stone-700 text-[11px] text-center font-mono tracking-wider pt-2">
                  ENCRYPTED · CONFIDENTIAL · CONTINENTAL PROTOCOL
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

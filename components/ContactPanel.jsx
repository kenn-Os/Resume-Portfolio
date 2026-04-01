'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { profile } from '../lib/data'

function MailIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
}
function GlobeIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
}
function PhoneIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
}
function GithubIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
}
function MapPinIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
}
function ClockIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
}
function CopyIcon() {
  return <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
}
function CheckIcon() {
  return <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
}
function SendIcon() {
  return <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
}
function UserCheckIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><polyline points="17 11 19 13 23 9"/></svg>
}

const contacts = [
  { label: 'Email', value: profile.email, icon: MailIcon, href: `mailto:${profile.email}`, copyable: true, color: 'blue' },
  { label: 'Phone', value: profile.phone, icon: PhoneIcon, href: `tel:${profile.phone}`, copyable: true, color: 'emerald' },
  { label: 'Portfolio', value: 'View my web development works', icon: GlobeIcon, href: `https://${profile.portfolio}`, copyable: false, color: 'blue' },
  { label: 'GitHub', value: profile.github, icon: GithubIcon, href: `https://${profile.github}`, copyable: false, color: 'violet' },
  { label: 'Location', value: profile.location, icon: MapPinIcon, href: null, copyable: false, color: 'amber' },
  { label: 'References', value: 'Available on request', icon: UserCheckIcon, href: null, copyable: false, color: 'emerald' },
]

const colorMap = {
  blue: { bg: 'bg-accent-light', text: 'text-accent', border: 'border-[#BAE6FD]' },
  emerald: { bg: 'bg-success-light', text: 'text-[#16A34A]', border: 'border-[#BBF7D0]' },
  violet: { bg: 'bg-violet-50', text: 'text-violet-600', border: 'border-violet-200' },
  amber: { bg: 'bg-amber-50', text: 'text-amber-600', border: 'border-amber-200' },
}

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
}

const item = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
}

export default function ContactPanel() {
  const [copiedField, setCopiedField] = useState(null)
  const [formState, setFormState] = useState({ name: '', email: '', message: '', sent: false })

  const handleCopy = (value, label) => {
    navigator.clipboard.writeText(value)
    setCopiedField(label)
    setTimeout(() => setCopiedField(null), 1800)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormState(prev => ({ ...prev, sent: true }))
    setTimeout(() => setFormState({ name: '', email: '', message: '', sent: false }), 3500)
  }

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="panel p-4 flex items-center justify-between">
        <div>
          <h2 className="text-base font-semibold text-primary">Contact</h2>
          <p className="text-sm text-muted">Let's talk about how I can help you</p>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-success-light border border-[#BBF7D0]">
          <ClockIcon className="text-[#16A34A] w-3 h-3" />
          <span className="text-[11px] font-medium text-[#16A34A]">Replies in {profile.responseTime}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Contact info */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-2.5"
        >
          {contacts.map((contact) => {
            const Icon = contact.icon
            const colors = colorMap[contact.color]
            const Wrapper = contact.href ? 'a' : 'div'
            return (
              <motion.div key={contact.label} variants={item}>
                <div className="panel p-4 flex items-center gap-3 group hover:shadow-panel-hover transition-all duration-200">
                  <div className={`w-9 h-9 rounded-lg ${colors.bg} ${colors.text} ${colors.border} border flex items-center justify-center shrink-0`}>
                    <Icon />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] text-muted">{contact.label}</p>
                    {contact.href ? (
                      <a
                        href={contact.href}
                        target={contact.href.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className={`text-sm font-medium ${colors.text} hover:underline truncate block`}
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-primary truncate">{contact.value}</p>
                    )}
                  </div>
                  {contact.copyable && (
                    <button
                      onClick={() => handleCopy(contact.value, contact.label)}
                      className="opacity-0 group-hover:opacity-100 p-1.5 rounded-md text-muted hover:text-primary hover:bg-[#F1F5F9] transition-all"
                      title={`Copy ${contact.label}`}
                    >
                      {copiedField === contact.label ? <CheckIcon /> : <CopyIcon />}
                    </button>
                  )}
                </div>
              </motion.div>
            )
          })}

          {/* Response time detail */}
          <motion.div variants={item} className="panel p-4">
            <p className="section-label mb-2">Availability</p>
            <div className="space-y-2">
              {[
                { label: 'Response Time', value: profile.responseTime, active: true },
                { label: 'Time Zone', value: profile.timezone, active: true },
                { label: 'Work Mode', value: 'Remote / Async-first', active: true },
              ].map((a) => (
                <div key={a.label} className="flex items-center justify-between">
                  <span className="text-xs text-muted">{a.label}</span>
                  <span className="text-xs font-medium text-primary">{a.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Contact form */}
        <div className="panel p-5">
          <p className="text-sm font-semibold text-primary mb-4">Send a Message</p>

          {formState.sent ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center justify-center py-8 text-center gap-3"
            >
              <div className="w-12 h-12 rounded-full bg-success-light border border-[#BBF7D0] flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-primary">Message Sent!</p>
                <p className="text-xs text-muted mt-0.5">I'll get back to you within {profile.responseTime}.</p>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="section-label block mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState(p => ({ ...p, name: e.target.value }))}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-border bg-[#F8FAFC] text-primary placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                  placeholder="Jane Smith"
                />
              </div>
              <div>
                <label className="section-label block mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState(p => ({ ...p, email: e.target.value }))}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-border bg-[#F8FAFC] text-primary placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                  placeholder="jane@company.com"
                />
              </div>
              <div>
                <label className="section-label block mb-1">Message</label>
                <textarea
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState(p => ({ ...p, message: e.target.value }))}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-border bg-[#F8FAFC] text-primary placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all resize-none"
                  placeholder="Tell me about your project or what support you need..."
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-accent text-white text-sm font-medium hover:bg-[#0284C7] transition-colors"
              >
                <SendIcon />
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

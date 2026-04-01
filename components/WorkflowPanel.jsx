'use client'

import { motion } from 'framer-motion'
import { workflow } from '../lib/data'

function InboxIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12" /><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" /></svg>
}
function MessageIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" /></svg>
}
function PlayIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polygon points="10 8 16 12 10 16 10 8" /></svg>
}
function CheckCircleIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
}
function SendIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
}
function ChevronRightIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
}

const iconMap = {
  inbox: InboxIcon,
  'message-circle': MessageIcon,
  'play-circle': PlayIcon,
  'check-circle': CheckCircleIcon,
  send: SendIcon,
}

const colorMap = {
  blue: { bg: 'bg-accent-light', text: 'text-accent', border: 'border-[#BAE6FD]', step: 'text-accent' },
  violet: { bg: 'bg-violet-50', text: 'text-violet-600', border: 'border-violet-200', step: 'text-violet-500' },
  emerald: { bg: 'bg-success-light', text: 'text-emerald-600', border: 'border-[#BBF7D0]', step: 'text-emerald-500' },
  sky: { bg: 'bg-sky-50', text: 'text-sky-600', border: 'border-sky-200', step: 'text-sky-500' },
  amber: { bg: 'bg-amber-50', text: 'text-amber-600', border: 'border-amber-200', step: 'text-amber-500' },
}

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
}

export default function WorkflowPanel() {
  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="panel p-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-base font-semibold text-primary">How I Work</h2>
            <p className="text-sm text-muted mt-0.5">My standard operating process — every time, every project</p>
          </div>
          <span className="tag-success">
            <span className="w-1.5 h-1.5 rounded-full bg-success inline-block" />
            5-Step Process
          </span>
        </div>
      </div>

      {/* Workflow steps — horizontal on large screens */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-5 gap-3 relative"
      >
        {workflow.map((step, index) => {
          const Icon = iconMap[step.icon]
          const colors = colorMap[step.color] || colorMap.blue
          const isLast = index === workflow.length - 1

          return (
            <motion.div key={step.id} variants={item} className="relative flex md:flex-col">
              <div className="panel p-4 flex-1 transition-all duration-200 hover:shadow-panel-hover hover:-translate-y-0.5">
                {/* Step number */}
                <p className={`text-[11px] font-bold font-mono ${colors.step} mb-2`}>STEP {step.step}</p>

                {/* Icon */}
                <div className={`w-9 h-9 rounded-lg ${colors.bg} ${colors.text} ${colors.border} border flex items-center justify-center mb-3`}>
                  {Icon && <Icon />}
                </div>

                <h3 className="text-sm font-semibold text-primary mb-1.5">{step.title}</h3>
                <p className="text-xs text-muted leading-relaxed">{step.description}</p>
              </div>

              {/* Arrow connector */}
              {!isLast && (
                <div className="hidden md:flex items-center justify-center absolute -right-2 top-1/2 -translate-y-1/2 z-10 w-4 h-4 rounded-full bg-bg border border-border text-muted">
                  <ChevronRightIcon />
                </div>
              )}
            </motion.div>
          )
        })}
      </motion.div>

      {/* Guarantee banner */}
      <div className="panel p-4 bg-gradient-to-r from-[#F0F9FF] to-[#F8FAFC] border-accent/20">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { label: 'Zero Surprise Billing', desc: 'All scope confirmed before work starts' },
            { label: 'Documented Handoffs', desc: 'Every task comes with clear notes' },
            { label: 'Async-First Communication', desc: 'No unnecessary meetings or delays' },
          ].map((g) => (
            <div key={g.label} className="flex items-start gap-2.5">
              <span className="w-4 h-4 rounded-full bg-success-light border border-[#BBF7D0] flex items-center justify-center shrink-0 mt-0.5">
                <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
              </span>
              <div>
                <p className="text-xs font-semibold text-primary">{g.label}</p>
                <p className="text-[11px] text-muted">{g.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

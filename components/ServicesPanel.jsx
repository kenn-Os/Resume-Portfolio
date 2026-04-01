'use client'

import { motion } from 'framer-motion'
import { services } from '../lib/data'

// Mini icons for services
function ServiceIcon({ id }) {
  const icons = {
    'virtual-assistance': (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
    'email-communication': (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    'file-document': (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><line x1="10" y1="9" x2="8" y2="9" />
      </svg>
    ),
    'admin-support': (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <path d="m9 14 2 2 4-4" />
      </svg>
    ),
    'canva-design': (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="13.5" cy="6.5" r=".5" /><circle cx="17.5" cy="10.5" r=".5" />
        <circle cx="8.5" cy="7.5" r=".5" /><circle cx="6.5" cy="12.5" r=".5" />
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
      </svg>
    ),
    'technical-support': (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  }
  return icons[id] || null
}

const colorMap = {
  blue: { bg: 'bg-accent-light', text: 'text-accent', border: 'border-[#BAE6FD]', dot: 'bg-accent' },
  sky: { bg: 'bg-sky-50', text: 'text-sky-600', border: 'border-sky-200', dot: 'bg-sky-500' },
  violet: { bg: 'bg-violet-50', text: 'text-violet-600', border: 'border-violet-200', dot: 'bg-violet-500' },
  emerald: { bg: 'bg-success-light', text: 'text-emerald-600', border: 'border-[#BBF7D0]', dot: 'bg-success' },
  rose: { bg: 'bg-rose-50', text: 'text-rose-600', border: 'border-rose-200', dot: 'bg-rose-500' },
  amber: { bg: 'bg-amber-50', text: 'text-amber-600', border: 'border-amber-200', dot: 'bg-amber-500' },
}

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } },
}

const card = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
}

function CheckIcon() {
  return <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
}

export default function ServicesPanel() {
  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="panel p-4 flex items-center justify-between">
        <div>
          <h2 className="text-base font-semibold text-primary">Services</h2>
          <p className="text-sm text-muted">6 active service modules</p>
        </div>
        <span className="tag-success">
          <span className="w-1.5 h-1.5 rounded-full bg-success inline-block" />
          All Active
        </span>
      </div>

      {/* Services grid */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3"
      >
        {services.map((service) => {
          const colors = colorMap[service.color] || colorMap.blue
          return (
            <motion.div
              key={service.id}
              variants={card}
              whileHover={{ y: -2, boxShadow: '0 4px 16px rgba(15,23,42,0.10)' }}
              className="panel p-4 cursor-default flex flex-col gap-3 transition-all duration-200"
            >
              {/* Service header */}
              <div className="flex items-start gap-3">
                <div className={`w-9 h-9 rounded-lg ${colors.bg} ${colors.text} flex items-center justify-center shrink-0 border ${colors.border}`}>
                  <ServiceIcon id={service.id} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-semibold text-primary truncate">{service.title}</h3>
                    <span className={`w-1.5 h-1.5 rounded-full ${colors.dot} shrink-0`} />
                  </div>
                  <p className="text-[11px] text-muted leading-relaxed mt-0.5">{service.description}</p>
                </div>
              </div>

              {/* Task list */}
              <div className="border-t border-border pt-3 space-y-1.5">
                {service.tasks.map((task) => (
                  <div key={task} className="flex items-center gap-2">
                    <span className={`${colors.text} shrink-0`}><CheckIcon /></span>
                    <span className="text-xs text-muted">{task}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}

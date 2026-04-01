'use client'

import { motion } from 'framer-motion'
import { experience } from '../lib/data'

function BriefcaseIcon() {
  return <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2M12 12v4M10 14h4" /></svg>
}
function ClipboardIcon() {
  return <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/></svg>;
}
function ArrowRightIcon() {
  return <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
}

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, x: -12 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

export default function ExperienceTimeline() {
  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="panel p-4">
        <h2 className="text-base font-semibold text-primary">Experience Timeline</h2>
        <p className="text-sm text-muted mt-0.5">8+ years of combined technical and operational experience</p>
      </div>

      {/* Timeline */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative"
      >
        {/* Vertical line */}
        <div className="absolute left-[23px] top-4 bottom-4 w-px bg-border hidden sm:block" />

        <div className="space-y-4">
          {experience.map((exp, index) => (
            <motion.div key={exp.id} variants={item}>
              <div className="panel p-5 sm:ml-12 relative transition-all duration-200 hover:shadow-panel-hover">
                {/* Timeline dot */}
                <div className="hidden sm:flex absolute -left-[37px] top-5 w-6 h-6 rounded-full bg-panel border-2 border-accent items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                </div>

                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <div className="flex items-start gap-3">
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                      exp.type === 'Technical'
                        ? 'bg-accent-light text-accent border border-[#BAE6FD]'
                        : 'bg-emerald-50 text-emerald-600 border border-emerald-200'
                    }`}>
                      {exp.type === 'Technical' ? <BriefcaseIcon /> : <ClipboardIcon />}
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-primary">{exp.role}</h3>
                      <p className="text-sm text-accent font-medium">{exp.company}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className="tag font-mono text-[11px]">{exp.period}</span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-2 mb-4">
                  {exp.highlights.map((h) => (
                    <div key={h} className="flex items-start gap-2">
                      <span className="text-accent mt-0.5 shrink-0"><ArrowRightIcon /></span>
                      <span className="text-xs text-muted leading-relaxed">{h}</span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Career insight panel */}
      <div className="panel p-4 bg-gradient-to-r from-accent-light to-[#F0F9FF] border-accent/20">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-accent/10 text-accent flex items-center justify-center shrink-0">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" /></svg>
          </div>
          <div>
            <p className="text-xs font-semibold text-primary">Career Insight</p>
            <p className="text-xs text-muted mt-1 leading-relaxed">
              My background bridges technical web development and human-centered operations — giving me a rare ability to translate between technical teams and non-technical stakeholders, manage systems, and communicate with clarity.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

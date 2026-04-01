'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { profile, resume as resumeInfo } from '../lib/data'
import Link from 'next/link'

function FileIcon() {
  return <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><line x1="10" y1="9" x2="8" y2="9" /></svg>
}
function DownloadIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
}
function CalendarIcon() {
  return <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
}
function TagIcon() {
  return <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" /><path d="M7 7h.01" /></svg>
}
function CheckIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
}

export default function ResumePanel() {
  const [isClient, setIsClient] = useState(false)
  const selectedType = 'regular' // Public version only offers Regular

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="panel p-4">
        <h2 className="text-base font-semibold text-primary">Resume / CV Download</h2>
        <p className="text-sm text-muted mt-0.5">Download my official professional executive resume</p>
      </div>

      {/* Main download block */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="panel p-6"
      >
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Left: Info */}
          <div className="flex-1 space-y-4">
            <div className="space-y-1">
              <p className="text-[11px] font-bold text-accent uppercase tracking-wider">Template Selected</p>
              <h3 className="text-lg font-bold text-primary">Executive Professional Resume</h3>
            </div>
            <p className="text-sm text-muted leading-relaxed max-w-md">
              A clean, minimalist layout suitable for tech and creative roles worldwide. 
              This format is optimized for clarity, visual hierarchy, and ATS parsing.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 text-[11px] text-muted bg-bg px-3 py-1.5 rounded-lg border border-border">
                <TagIcon /> {resumeInfo.filesize}
              </div>
              <div className="flex items-center gap-2 text-[11px] text-muted bg-bg px-3 py-1.5 rounded-lg border border-border">
                <CalendarIcon /> Updated {resumeInfo.lastUpdated}
              </div>
            </div>
          </div>

          {/* Right: Preview & Download */}
          <div className="lg:w-[320px] w-full flex flex-col gap-4">
            <div className="flex items-center gap-4 bg-bg rounded-xl p-5 border-2 border-accent-light bg-accent-light/10">
              <div className="w-14 h-16 rounded-lg bg-accent-light border-2 border-[#BAE6FD] flex flex-col items-center justify-center gap-0.5 shrink-0 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-4 h-4 bg-[#BAE6FD] rounded-bl-md" />
                <span className="text-accent"><FileIcon /></span>
                <span className="text-[9px] font-bold text-accent">PDF</span>
              </div>
              <div className="min-w-0">
                <p className="text-sm font-bold text-primary truncate">
                  {profile.name.replace(/ /g, '_')}_Resume.pdf
                </p>
                <p className="text-[11px] text-accent font-medium mt-0.5">Professional Format</p>
              </div>
            </div>

            {isClient && (
              <Link 
                href="/resume" 
                target="_blank"
                className="w-full flex items-center justify-center gap-2 px-4 py-4 rounded-xl text-sm font-bold transition-all bg-accent text-white hover:bg-accent-hover shadow-lg shadow-accent/20 active:scale-[0.98]"
              >
                <DownloadIcon />
                <span>View & Download Resume</span>
              </Link>
            )}
          </div>
        </div>
      </motion.div>

      {/* Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="panel p-5">
          <p className="section-label mb-3">Included Sections</p>
          <div className="space-y-2.5">
            {[
              { label: 'Work History', value: 'Complete professional timeline', icon: <CheckIcon /> },
              { label: 'Key Expertise', value: 'Mapped to your services', icon: <CheckIcon /> },
              { label: 'Tech Stack', value: 'Tool mastery & proficiency', icon: <CheckIcon /> },
              { label: 'Contact Details', value: 'Verified links & location', icon: <CheckIcon /> },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="mt-1 text-[#16A34A]">{item.icon}</div>
                <div>
                  <p className="text-xs font-bold text-primary">{item.label}</p>
                  <p className="text-[11px] text-muted">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="panel p-5 flex flex-col justify-center">
          <div className="p-4 rounded-xl bg-accent-light/20 border border-accent/10">
            <p className="text-xs font-bold text-accent mb-2 uppercase tracking-tight">Need a different format?</p>
            <p className="text-[11px] text-muted leading-relaxed">
              For specific regional requirements (UK/Europe) or specialized applications, please contact me directly 
              through the <strong>Contact</strong> section and I will provide the appropriate version tailored to your needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

'use client'

import { useState } from 'react'
import { profile } from '../lib/data'

const tabs = [
  { id: 'overview', label: 'Overview' },
  { id: 'services', label: 'Services' },
  { id: 'experience', label: 'Experience' },
  { id: 'workflow', label: 'Workflow' },
  { id: 'contact', label: 'Contact' },
]

function MenuIcon({ open }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {open ? (
        <>
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </>
      ) : (
        <>
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </>
      )}
    </svg>
  )
}

function DownloadIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  )
}

export default function Topbar({ activeSection, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Main topbar */}
      <header className="sticky top-0 z-40 bg-panel/90 backdrop-blur-sm border-b border-border">
        {/* Identity bar */}
        <div className="flex items-center justify-between px-4 lg:px-6 h-12 border-b border-border/60">
          <div className="flex items-center gap-3">
            {/* Mobile logo */}
            <div className="lg:hidden flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-accent flex items-center justify-center">
                <span className="text-white text-[10px] font-bold">KC</span>
              </div>
              <span className="text-sm font-semibold text-primary">{profile.name}</span>
            </div>
            {/* Desktop identity */}
            <div className="hidden lg:flex items-center gap-3">
              <span className="text-sm font-semibold text-primary">{profile.name}</span>
              <span className="text-border">·</span>
              <span className="text-xs text-muted">{profile.role}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Status indicator */}
            <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-success-light border border-[#BBF7D0]">
              <span className="status-dot" />
              <span className="text-[11px] font-medium text-[#16A34A]">{profile.status}</span>
            </div>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 rounded-lg text-muted hover:text-primary hover:bg-[#F1F5F9] transition-colors"
              aria-label="Toggle menu"
            >
              <MenuIcon open={mobileMenuOpen} />
            </button>

            {/* Desktop CV button */}
            <button
              onClick={() => onNavigate('resume')}
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent text-white text-xs font-medium hover:bg-[#0284C7] transition-colors"
            >
              <DownloadIcon />
              Download CV
            </button>
          </div>
        </div>

        {/* Tab bar — desktop */}
        <nav className="hidden lg:flex items-center px-6 gap-1 h-10">
          {tabs.map((tab) => {
            const isActive = activeSection === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => onNavigate(tab.id)}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-150 ${
                  isActive
                    ? 'bg-accent-light text-accent'
                    : 'text-muted hover:text-primary hover:bg-[#F1F5F9]'
                }`}
              >
                {tab.label}
              </button>
            )
          })}
        </nav>
      </header>

      {/* Mobile menu drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-30 pt-24 bg-panel/95 backdrop-blur-sm border-t border-border">
          <nav className="px-4 py-2 flex flex-col gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  onNavigate(tab.id)
                  setMobileMenuOpen(false)
                }}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  activeSection === tab.id
                    ? 'bg-accent-light text-accent'
                    : 'text-muted hover:text-primary hover:bg-[#F1F5F9]'
                }`}
              >
                {tab.label}
              </button>
            ))}
            <button
              onClick={() => {
                onNavigate('resume')
                setMobileMenuOpen(false)
              }}
              className="mt-3 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-accent text-white text-sm font-medium"
            >
              <DownloadIcon />
              Download CV
            </button>
          </nav>
        </div>
      )}
    </>
  )
}

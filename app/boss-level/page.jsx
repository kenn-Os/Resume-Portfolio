'use client'

import { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { profile, resume as resumeInfo } from '../../lib/data'
import Sidebar from '../../components/Sidebar'
import Topbar from '../../components/Topbar'
import Link from 'next/link'

function FileIcon() {
  return <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><line x1="10" y1="9" x2="8" y2="9" /></svg>
}
function DownloadIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
}
function CheckIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
}
function ShieldIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
}

const resumeOptions = [
  { id: 'regular', label: 'Regular Resume', desc: 'Modern & Clean Executive Style' },
  { id: 'uk', label: 'UK Standard', desc: 'ATS Optimized & Profile Focused' },
  { id: 'europass', label: 'Europass', desc: 'EU Official Format' },
]

export default function BossLevelPage() {
  const [selectedType, setSelectedType] = useState('regular')
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const getFormatLink = () => {
    if (selectedType === 'uk') return '/resume/uk'
    if (selectedType === 'europass') return '/resume/europass'
    return '/resume' // regular
  }

  return (
    <div className="flex min-h-screen bg-bg">
      {/* Sidebar - Purely for layout consistency */}
      <Sidebar activeSection="resume" onNavigate={() => window.location.href = '/'} />

      <div className="flex-1 flex flex-col min-w-0">
        <Topbar activeSection="boss-level" onNavigate={() => window.location.href = '/'} />

        <main className="flex-1 p-6 lg:p-10">
          {/* Boss Header */}
          <div className="mb-8 flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-accent"><ShieldIcon /></span>
                <span className="text-[11px] font-bold text-accent uppercase tracking-widest">Administrator Access</span>
              </div>
              <h1 className="text-3xl font-extrabold text-primary letter-tight">Boss-Level CV Control</h1>
              <p className="text-sm text-muted mt-1">Full access to all CV variants and templates.</p>
            </div>
            <div className="hidden sm:block px-4 py-2 rounded-xl bg-accent text-white font-bold text-xs shadow-lg shadow-accent/20">
              GOD MODE: ON
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {/* Selection Grid */}
            <div className="panel p-6">
              <h2 className="text-sm font-bold text-primary mb-4 uppercase tracking-tight">Master Template Selection</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {resumeOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setSelectedType(opt.id)}
                    className={`flex flex-col items-start p-5 rounded-2xl border-2 transition-all text-left group ${
                      selectedType === opt.id
                        ? 'border-accent bg-accent-light/30 shadow-md transform -translate-y-0.5'
                        : 'border-border hover:border-accent-light bg-panel hover:shadow-panel-hover'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full mb-2">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        selectedType === opt.id ? 'bg-accent text-white' : 'bg-[#F1F5F9] text-muted group-hover:text-accent'
                      }`}>
                        <FileIcon />
                      </div>
                      {selectedType === opt.id && (
                        <span className="text-accent bg-white p-0.5 rounded-full ring-4 ring-accent-light/50 shadow-sm"><CheckIcon /></span>
                      )}
                    </div>
                    <span className={`text-base font-bold ${selectedType === opt.id ? 'text-accent' : 'text-primary'}`}>
                      {opt.label}
                    </span>
                    <span className="text-xs text-muted mt-1 leading-relaxed">{opt.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Download Interface */}
            <div className="panel p-8 bg-gradient-to-br from-panel to-[#F0F9FF]">
              <div className="flex flex-col lg:flex-row items-center gap-10">
                <div className="flex-1 space-y-6">
                  <div className="space-y-2">
                    <p className="text-xs font-bold text-accent uppercase tracking-widest">Ready for deployment</p>
                    <h3 className="text-2xl font-black text-primary">
                      {profile.name.replace(/ /g, '_')}_{selectedType.toUpperCase()}_CV.pdf
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    <div className="px-4 py-2 rounded-xl bg-white border border-border flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse" />
                      <span className="text-xs font-bold text-primary">System Ready</span>
                    </div>
                    <div className="px-4 py-2 rounded-xl bg-white border border-border flex items-center gap-3">
                      <span className="text-xs font-bold text-muted">Format:</span>
                      <span className="text-xs font-bold text-accent uppercase">{selectedType}</span>
                    </div>
                  </div>

                  <p className="text-sm text-muted leading-relaxed max-w-xl italic">
                    "This is your command center. Download any format, anytime. All documents are synced with your live data and generated on-the-fly."
                  </p>
                </div>

                <div className="lg:w-[350px] w-full">
                  {isClient && (
                    <Link
                      href={getFormatLink()}
                      target="_blank"
                      className="w-full h-[180px] flex flex-col items-center justify-center gap-4 rounded-3xl text-sm font-bold transition-all group overflow-hidden relative bg-accent text-white hover:bg-[#0274B0] shadow-2xl shadow-accent/30 hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <DownloadIcon />
                      </div>
                      <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                        <DownloadIcon />
                      </div>
                      <div className="text-center">
                        <span className="text-xl font-black block mb-1">View & Download CV</span>
                        <span className="opacity-70 font-medium">Format: {selectedType.toUpperCase()}</span>
                      </div>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

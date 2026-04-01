'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { tools } from '../lib/data'

const categories = ['All', 'Productivity', 'Design', 'Project Mgmt', 'Communication', 'Email', 'Technical', 'CMS', 'Storage']

const levelConfig = {
  Expert: { color: 'text-[#16A34A]', bg: 'bg-success-light', border: 'border-[#BBF7D0]', bar: 'bg-success', width: 'w-full' },
  Advanced: { color: 'text-accent', bg: 'bg-accent-light', border: 'border-[#BAE6FD]', bar: 'bg-accent', width: 'w-4/5' },
  Intermediate: { color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200', bar: 'bg-amber-400', width: 'w-3/5' },
  Beginner: { color: 'text-slate-600', bg: 'bg-slate-100', border: 'border-slate-300', bar: 'bg-slate-400', width: 'w-2/5' },
}

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.04 } },
}

const item = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.25, ease: 'easeOut' } },
}

export default function ToolsPanel() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? tools
    : tools.filter(t => t.category === activeCategory)

  const expertCount = tools.filter(t => t.level === 'Expert').length
  const advancedCount = tools.filter(t => t.level === 'Advanced').length
  const intermediateCount = tools.filter(t => t.level === 'Intermediate').length
  const beginnerCount = tools.filter(t => t.level === 'Beginner').length

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="panel p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h2 className="text-base font-semibold text-primary">Tools & Systems</h2>
          <p className="text-sm text-muted">{tools.length} tools across {categories.length - 1} categories</p>
        </div>
        {/* Proficiency legend */}
        <div className="flex items-center gap-3 text-[11px]">
          {[
            { label: `Expert (${expertCount})`, ...levelConfig.Expert },
            { label: `Advanced (${advancedCount})`, ...levelConfig.Advanced },
            { label: `Intermediate (${intermediateCount})`, ...levelConfig.Intermediate },
            { label: `Beginner (${beginnerCount})`, ...levelConfig.Beginner },
          ].map((l) => (
            <div key={l.label} className="flex items-center gap-1">
              <span className={`w-2 h-2 rounded-full ${l.bar}`} />
              <span className="text-muted">{l.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap gap-1.5">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all duration-150 ${
              activeCategory === cat
                ? 'bg-accent text-white'
                : 'bg-panel border border-border text-muted hover:text-primary hover:border-accent/30'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Tools grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5"
        >
          {filtered.map((tool) => {
            const level = levelConfig[tool.level] || levelConfig.Beginner
            return (
              <motion.div
                key={tool.name}
                variants={item}
                whileHover={{ y: -1 }}
                className="panel p-3 flex flex-col gap-2 transition-all duration-200 hover:shadow-panel-hover"
              >
                <div className="flex items-start justify-between gap-2">
                  <p className="text-xs font-semibold text-primary leading-snug">{tool.name}</p>
                  <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded-md ${level.bg} ${level.color} ${level.border} border shrink-0`}>
                    {tool.level}
                  </span>
                </div>
                <div>
                  <div className="w-full h-1 bg-[#F1F5F9] rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full ${level.bar}`}
                      initial={{ width: 0 }}
                      animate={{ width: tool.level === 'Expert' ? '100%' : tool.level === 'Advanced' ? '80%' : tool.level === 'Intermediate' ? '60%' : '40%' }}
                      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
                    />
                  </div>
                  <p className="text-[10px] text-muted mt-1">{tool.category}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

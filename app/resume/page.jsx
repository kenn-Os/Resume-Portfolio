'use client'

import { profile, experience, tools, services } from '../../lib/data';

function Section({ title, children }) {
  return (
    <section style={{ marginBottom: '18px' }}>
      <h2 style={{ 
        fontSize: '11px', 
        fontWeight: 700, 
        textTransform: 'uppercase', 
        color: '#888', 
        borderBottom: '1px solid #e5e5e5',
        marginBottom: '10px',
        paddingBottom: '4px'
      }}>
        {title}
      </h2>
      {children}
    </section>
  )
}

function ExpItem({ role, company, period, highlights }) {
  return (
    <div style={{ marginBottom: '14px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <h3 style={{ fontSize: '14px', fontWeight: 700, margin: 0 }}>{role}</h3>
        <span style={{ fontSize: '12px', color: '#888', fontWeight: 500 }}>{period}</span>
      </div>
      <p style={{ color: '#c0392b', fontWeight: 600, margin: '2px 0 6px 0' }}>{company}</p>
      <ul style={{ paddingLeft: '16px', margin: 0, marginTop: '4px' }}>
        {highlights.map((p, i) => <li key={i} style={{ marginBottom: '4px' }}>{p}</li>)}
      </ul>
    </div>
  )
}

export default function ResumePage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @media print {
          body { margin: 0; padding: 0; background: #fff !important; }
          .no-print { display: none !important; }
          .resume { padding: 0 !important; box-shadow: none !important; margin: 0 !important; }
        }
        @page { margin: 0.4in 0.5in; size: letter; }
      `}} />
      
      {/* Print/Action Bar */}
      <div className="no-print" style={{ background: '#0B0B0C', padding: '1rem', textAlign: 'center' }}>
        <button onClick={() => window.print()} style={{ 
          background: '#FF3B30', 
          color: '#fff', 
          padding: '0.6rem 2rem', 
          cursor: 'pointer',
          border: 'none',
          borderRadius: '4px',
          fontWeight: 600,
          fontSize: '14px'
        }}>
          Save as PDF
        </button>
      </div>

      <div className="resume" style={{
        maxWidth: '780px', margin: '2rem auto', padding: '2rem',
        fontFamily: "'Inter', sans-serif", color: '#1a1a1a', fontSize: '13px', lineHeight: 1.5,
        backgroundColor: '#fff',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}>
        
        {/* Header */}
        <header style={{ 
          marginBottom: '20px', 
          paddingBottom: '14px', 
          borderBottom: '2.5px solid #1a1a1a',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end'
        }}>
          <div>
            <h1 style={{ fontSize: '26px', fontWeight: 800, margin: '0 0 4px 0', letterSpacing: '-0.5px' }}>{profile.name}</h1>
            <p style={{ margin: 0, fontWeight: 600, color: '#c0392b' }}>{profile.role}</p>
          </div>
          <div style={{ textAlign: 'right', fontSize: '12px', lineHeight: 1.6 }}>
            <div>{profile.email}</div>
            <div>{profile.phone}</div>
            <div>{profile.location}</div>
          </div>
        </header>

        {/* Professional Summary */}
        <Section title="Professional Summary">
          <p style={{ margin: 0, textAlign: 'justify' }}>{profile.tagline}</p>
        </Section>

        {/* Experience */}
        <Section title="Experience">
          {experience.map((exp, index) => (
            <ExpItem 
              key={index}
              role={exp.role}
              company={exp.company}
              period={exp.period}
              highlights={exp.highlights}
            />
          ))}
        </Section>

        {/* Core Expertise / Selected Projects (Mapped to Services) */}
        <Section title="Core Expertise">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '16px'
          }}>
            {services.map((service, index) => (
              <div key={index}>
                <h4 style={{ margin: '0 0 4px 0', fontSize: '13px', fontWeight: 700 }}>{service.title}</h4>
                <p style={{ margin: 0, fontSize: '12px', color: '#555' }}>
                  {service.tasks.join(' • ')}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* Technical Skills */}
        <Section title="Technical Skills">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '8px'
          }}>
            {['Technical', 'Productivity', 'Design', 'Communication'].map((category) => (
              <div key={category}>
                <h4 style={{ margin: '0 0 4px 0', fontSize: '12px', fontWeight: 700, color: '#1a1a1a' }}>{category}</h4>
                <p style={{ margin: 0, fontSize: '12px' }}>
                  {tools.filter(t => t.category === category).map(t => t.name).join(', ')}
                </p>
              </div>
            ))}
          </div>
        </Section>

      </div>
    </>
  )
}

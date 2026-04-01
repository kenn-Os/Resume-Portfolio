'use client'

import { profile, experience, tools, services } from '../../../lib/data';

function Section({ title, children }) {
  return (
    <section style={{ marginBottom: '25px' }}>
      <h2 style={{ 
        fontSize: '12px', 
        fontWeight: 700, 
        textTransform: 'uppercase', 
        letterSpacing: '1.5px',
        color: '#111827', 
        borderBottom: '1px solid #E5E7EB',
        marginBottom: '12px',
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
    <div style={{ marginBottom: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '4px' }}>
        <h3 style={{ fontSize: '11px', fontWeight: 700, margin: 0, color: '#000' }}>{company}</h3>
        <span style={{ fontSize: '9.5px', color: '#4B5563', fontWeight: 500 }}>{period}</span>
      </div>
      <p style={{ fontSize: '11px', fontWeight: 600, color: '#111827', margin: '0 0 6px 0', fontStyle: 'italic' }}>{role}</p>
      <ul style={{ listStyleType: 'none', paddingLeft: 0, margin: 0 }}>
        {highlights.map((p, i) => (
          <li key={i} style={{ display: 'flex', marginBottom: '5px' }}>
            <span style={{ width: '12px', fontSize: '10px', color: '#374151' }}>-</span>
            <span style={{ flex: 1, fontSize: '10px', color: '#374151' }}>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function UKResumePage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @media print {
          body { margin: 0; padding: 0; background: #fff !important; }
          .no-print { display: none !important; }
          .resume { padding: 0 !important; box-shadow: none !important; margin: 0 !important; }
        }
        @page { margin: 0.5in 0.5in; size: a4; }
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
        maxWidth: '780px', margin: '2rem auto', padding: '40px',
        fontFamily: "'Inter', sans-serif", color: '#111827', fontSize: '10px', lineHeight: 1.5,
        backgroundColor: '#fff',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}>
        
        {/* Header */}
        <header style={{ 
          marginBottom: '40px', 
          paddingBottom: '20px', 
          borderBottom: '1.5px solid #111827',
          textAlign: 'center'
        }}>
          <h1 style={{ fontSize: '28px', fontWeight: 700, margin: '0 0 12px 0', textTransform: 'uppercase', letterSpacing: '2px', color: '#000' }}>{profile.name}</h1>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            flexWrap: 'wrap', 
            fontSize: '8.5px', 
            color: '#374151',
            gap: '8px'
          }}>
            <span>{profile.location}</span>
            <span>•</span>
            <span>{profile.phone}</span>
            <span>•</span>
            <span>{profile.email}</span>
          </div>
        </header>

        {/* Personal Profile */}
        <Section title="Personal Profile">
          <p style={{ margin: 0, fontSize: '10px', textAlign: 'justify', color: '#374151', lineHeight: 1.6 }}>
            {profile.tagline}. A highly organized and results-oriented professional with a strong track record in operational efficiency, virtual assistance, and technical support. Adept at managing complex projects, streamlining business processes, and delivering high-quality results in fast-paced environments.
          </p>
        </Section>

        {/* Core Competencies */}
        <Section title="Core Competencies">
          <div style={{
            display: 'flex',
            flexWrap: 'wrap'
          }}>
            {services.map((service, index) => (
              <div key={index} style={{ width: '50%', fontSize: '10px', marginBottom: '6px', color: '#374151' }}>
                • {service.title}
              </div>
            ))}
            <div style={{ width: '50%', fontSize: '10px', marginBottom: '6px', color: '#374151' }}>• Stakeholder Management</div>
            <div style={{ width: '50%', fontSize: '10px', marginBottom: '6px', color: '#374151' }}>• Process Optimization</div>
            <div style={{ width: '50%', fontSize: '10px', marginBottom: '6px', color: '#374151' }}>• Workflow Automation</div>
          </div>
        </Section>

        {/* Professional Experience */}
        <Section title="Professional Experience">
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

        {/* Technical Skills */}
        <Section title="Technical Skills & Tools">
          <p style={{ margin: 0, fontSize: '10px', lineHeight: 1.6, color: '#374151' }}>
            <span style={{ fontWeight: 700 }}>Proficiencies: </span>
            {tools.map(tool => tool.name).join(', ')}
          </p>
        </Section>

        {/* References */}
        <div style={{ marginTop: '30px', borderTop: '1px solid #F3F4F6', paddingTop: '15px' }}>
          <h2 style={{ 
            fontSize: '12px', 
            fontWeight: 700, 
            textTransform: 'uppercase', 
            letterSpacing: '1.5px',
            color: '#111827', 
            borderBottom: '1px solid #E5E7EB',
            marginBottom: '12px',
            paddingBottom: '4px'
          }}>
            References
          </h2>
          <p style={{ margin: 0, fontSize: '10px', fontStyle: 'italic', color: '#6B7280' }}>
            Excellent professional references are available upon request.
          </p>
        </div>

      </div>
    </>
  )
}

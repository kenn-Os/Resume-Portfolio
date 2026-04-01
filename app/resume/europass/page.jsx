'use client'

import { profile, experience, tools, services } from '../../../lib/data';

const EUROPASS_BLUE = '#0055A8';
const LIGHT_BLUE = '#F0F7FF';

export default function EuropassResumePage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @media print {
          body { margin: 0; padding: 0; background: #fff !important; }
          .no-print { display: none !important; }
          .resume { padding: 0 !important; box-shadow: none !important; margin: 0 !important; }
          
          /* Force background colors to print for skill bars and labels */
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
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
        maxWidth: '780px', margin: '2rem auto', padding: '30px',
        fontFamily: "'Open Sans', sans-serif", color: '#333333', fontSize: '9px', lineHeight: 1.4,
        backgroundColor: '#fff',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}>
        
        {/* Header Title */}
        <header style={{ 
          display: 'flex',
          marginBottom: '40px', 
          paddingBottom: '25px', 
          borderBottom: '3px solid ' + EUROPASS_BLUE,
          alignItems: 'flex-end',
          justifyContent: 'space-between'
        }}>
          <h1 style={{ 
            fontSize: '18px', 
            fontWeight: 700, 
            margin: 0, 
            textTransform: 'uppercase', 
            letterSpacing: '3px', 
            color: EUROPASS_BLUE 
          }}>Curriculum Vitae</h1>
        </header>

        <div style={{ display: 'flex' }}>
          {/* Sidebar - Left Column */}
          <div style={{ 
            width: '30%', 
            paddingRight: '20px', 
            borderRight: '1px solid #E5E7EB' 
          }}>
            
            <div style={{ marginBottom: '15px' }}>
              <h2 style={{ 
                fontSize: '10px', 
                fontWeight: 700, 
                color: EUROPASS_BLUE, 
                marginBottom: '12px',
                textTransform: 'uppercase',
                borderBottom: '1px solid ' + EUROPASS_BLUE,
                paddingBottom: '4px',
                margin: '0 0 12px 0'
              }}>Contact</h2>
              
              <p style={{ margin: '0 0 3px 0', fontSize: '8px', fontWeight: 700, color: '#666', textTransform: 'uppercase' }}>Email</p>
              <p style={{ margin: '0 0 8px 0', fontSize: '9px', color: '#111827' }}>{profile.email}</p>
              
              <p style={{ margin: '0 0 3px 0', fontSize: '8px', fontWeight: 700, color: '#666', textTransform: 'uppercase' }}>Phone</p>
              <p style={{ margin: '0 0 8px 0', fontSize: '9px', color: '#111827' }}>{profile.phone}</p>
              
              <p style={{ margin: '0 0 3px 0', fontSize: '8px', fontWeight: 700, color: '#666', textTransform: 'uppercase' }}>Address</p>
              <p style={{ margin: '0 0 8px 0', fontSize: '9px', color: '#111827' }}>{profile.location}</p>
              
              <p style={{ margin: '0 0 3px 0', fontSize: '8px', fontWeight: 700, color: '#666', textTransform: 'uppercase' }}>Nationality</p>
              <p style={{ margin: '0 0 8px 0', fontSize: '9px', color: '#111827' }}>Nigerian</p>
            </div>

            <div style={{ marginBottom: '15px' }}>
              <h2 style={{ 
                fontSize: '10px', 
                fontWeight: 700, 
                color: EUROPASS_BLUE, 
                marginBottom: '12px',
                textTransform: 'uppercase',
                borderBottom: '1px solid ' + EUROPASS_BLUE,
                paddingBottom: '4px',
                margin: '0 0 12px 0'
              }}>Digital Skills</h2>
              
              {tools.slice(0, 10).map((tool, i) => (
                <div key={i} style={{ marginBottom: '12px' }}>
                  <p style={{ margin: '0 0 4px 0', fontSize: '8.5px', fontWeight: 600 }}>{tool.name}</p>
                  <div style={{ height: '5px', backgroundColor: '#F3F4F6', borderRadius: '2px', overflow: 'hidden' }}>
                    <div style={{ 
                      height: '100%', 
                      backgroundColor: EUROPASS_BLUE,
                      width: tool.level === 'Expert' ? '100%' : tool.level === 'Advanced' ? '80%' : tool.level === 'Intermediate' ? '60%' : '40%'
                    }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Main Content - Right Column */}
          <div style={{ width: '70%', paddingLeft: '25px' }}>
            <div style={{ marginBottom: '30px' }}>
              <h1 style={{ margin: '0 0 5px 0', fontSize: '20px', fontWeight: 700, color: '#000' }}>{profile.name}</h1>
              <p style={{ margin: '0 0 10px 0', fontSize: '11px', color: EUROPASS_BLUE, fontWeight: 600 }}>{profile.role}</p>
              <p style={{ margin: 0, fontSize: '8.5px', color: '#374151', lineHeight: 1.5 }}>{profile.tagline}</p>
            </div>

            <div style={{ marginBottom: '25px' }}>
              <h2 style={{ 
                fontSize: '10px', 
                fontWeight: 700, 
                color: EUROPASS_BLUE, 
                marginBottom: '12px',
                textTransform: 'uppercase',
                borderBottom: '1px solid ' + EUROPASS_BLUE,
                paddingBottom: '4px',
                margin: '0 0 12px 0'
              }}>Work Experience</h2>
              
              {experience.map((exp, index) => (
                <div key={index} style={{ marginBottom: '20px' }}>
                  <div style={{
                    fontSize: '8.5px',
                    fontWeight: 700,
                    color: '#4B5563',
                    marginBottom: '4px',
                    backgroundColor: LIGHT_BLUE,
                    padding: '2px 6px',
                    display: 'inline-block'
                  }}>
                    {exp.period}
                  </div>
                  <h3 style={{ margin: '0 0 2px 0', fontSize: '11px', fontWeight: 700, color: '#000' }}>{exp.role}</h3>
                  <p style={{ margin: '0 0 8px 0', fontSize: '10px', fontWeight: 600, color: EUROPASS_BLUE }}>{exp.company}</p>
                  
                  <ul style={{ listStyleType: 'none', paddingLeft: 0, margin: 0 }}>
                    {exp.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} style={{ display: 'flex', marginBottom: '4px' }}>
                        <span style={{ width: '10px', color: EUROPASS_BLUE, fontWeight: 700, fontSize: '8.5px' }}>▪</span>
                        <span style={{ flex: 1, fontSize: '8.5px', color: '#374151' }}>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div style={{ marginBottom: '25px' }}>
              <h2 style={{ 
                fontSize: '10px', 
                fontWeight: 700, 
                color: EUROPASS_BLUE, 
                marginBottom: '12px',
                textTransform: 'uppercase',
                borderBottom: '1px solid ' + EUROPASS_BLUE,
                paddingBottom: '4px',
                margin: '0 0 12px 0'
              }}>Skills & Competencies</h2>
              
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {services.map((s, i) => (
                  <div key={i} style={{ width: '48%', marginBottom: '15px', marginRight: '2%' }}>
                    <h3 style={{ margin: '0 0 4px 0', fontSize: '9px', fontWeight: 700, color: '#111827' }}>{s.title}</h3>
                    <p style={{ margin: 0, fontSize: '8.5px', color: '#374151' }}>{s.description}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

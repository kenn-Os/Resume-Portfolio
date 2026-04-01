import React from 'react';
import { Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 50,
    fontFamily: 'Inter',
    fontSize: 10,
    color: '#111827',
    lineHeight: 1.5,
  },
  header: {
    marginBottom: 40,
    borderBottomWidth: 1.5,
    borderBottomColor: '#111827',
    borderBottomStyle: 'solid',
    paddingBottom: 20,
  },
  titleContainer: {
    marginBottom: 12,
    textAlign: 'center',
  },
  name: {
    fontSize: 28,
    fontWeight: 700,
    marginBottom: 4,
    textTransform: 'uppercase',
    letterSpacing: 2,
    color: '#000000',
  },
  contactGrid: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: 8,
    fontSize: 8.5,
    color: '#374151',
  },
  contactItem: {
    marginHorizontal: 8,
    marginBottom: 4,
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    color: '#111827',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    borderBottomStyle: 'solid',
    marginBottom: 12,
    paddingBottom: 4,
  },
  personalStatement: {
    fontSize: 10,
    textAlign: 'justify',
    color: '#374151',
    lineHeight: 1.6,
  },
  experienceItem: {
    marginBottom: 20,
  },
  experienceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: 4,
  },
  company: {
    fontSize: 11,
    fontWeight: 700,
    color: '#000000',
  },
  period: {
    fontSize: 9.5,
    color: '#4B5563',
    fontWeight: 500,
  },
  expRole: {
    fontSize: 11,
    fontWeight: 600,
    color: '#111827',
    marginBottom: 6,
    fontStyle: 'italic',
  },
  bulletPointContainer: {
    flexDirection: 'row',
    marginBottom: 5,
    paddingLeft: 12,
  },
  bulletPoint: {
    width: 12,
    fontSize: 10,
    color: '#374151',
  },
  bulletText: {
    flex: 1,
    fontSize: 10,
    color: '#374151',
  },
  competenciesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  competencyItem: {
    width: '50%',
    fontSize: 10,
    marginBottom: 6,
    color: '#374151',
  },
  skillsList: {
    fontSize: 10,
    lineHeight: 1.6,
    color: '#374151',
  },
  footer: {
    marginTop: 30,
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
    paddingTop: 15,
  }
});

const UKTemplate = ({ profile, experience, tools, services }) => (
  <Page size="A4" style={styles.page}>
    {/* Well-arranged Header */}
    <View style={styles.header}>
      <View style={styles.titleContainer}>
        <Text style={styles.name}>{profile.name}</Text>
      </View>
      <View style={styles.contactGrid}>
        <Text style={styles.contactItem}>{profile.location}</Text>
        <Text style={styles.contactItem}>•</Text>
        <Text style={styles.contactItem}>{profile.phone}</Text>
        <Text style={styles.contactItem}>•</Text>
        <Text style={styles.contactItem}>{profile.email}</Text>
        <Text style={styles.contactItem}>•</Text>
        <Text style={styles.contactItem}>{profile.github}</Text>
      </View>
    </View>

    {/* Personal Profile */}
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Personal Profile</Text>
      <Text style={styles.personalStatement}>
        {profile.tagline}. A highly organized and results-oriented professional with a strong track record in operational efficiency, virtual assistance, and technical support. Adept at managing complex projects, streamlining business processes, and delivering high-quality results in fast-paced environments.
      </Text>
    </View>

    {/* Core Competencies */}
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Core Competencies</Text>
      <View style={styles.competenciesGrid}>
        {services.map((service, index) => (
          <Text key={index} style={styles.competencyItem}>• {service.title}</Text>
        ))}
        <Text style={styles.competencyItem}>• Stakeholder Management</Text>
        <Text style={styles.competencyItem}>• Process Optimization</Text>
        <Text style={styles.competencyItem}>• Workflow Automation</Text>
      </View>
    </View>

    {/* Professional Experience */}
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Professional Experience</Text>
      {experience.map((exp, index) => (
        <View key={index} style={styles.experienceItem}>
          <View style={styles.experienceHeader}>
            <Text style={styles.company}>{exp.company}</Text>
            <Text style={styles.period}>{exp.period}</Text>
          </View>
          <Text style={styles.expRole}>{exp.role}</Text>
          {exp.highlights.map((highlight, hIndex) => (
            <View key={hIndex} style={styles.bulletPointContainer}>
              <Text style={styles.bulletPoint}>-</Text>
              <Text style={styles.bulletText}>{highlight}</Text>
            </View>
          ))}
        </View>
      ))}
    </View>

    {/* Technical Skills */}
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Technical Skills & Tools</Text>
      <Text style={styles.skillsList}>
        <Text style={{ fontWeight: 700 }}>Proficiencies: </Text>
        {tools.map(tool => tool.name).join(', ')}
      </Text>
    </View>

    {/* References */}
    <View style={styles.footer}>
      <Text style={styles.sectionTitle}>References</Text>
      <Text style={{ fontSize: 10, fontStyle: 'italic', color: '#6B7280' }}>
        Excellent professional references are available upon request.
      </Text>
    </View>
  </Page>
);

export default UKTemplate;

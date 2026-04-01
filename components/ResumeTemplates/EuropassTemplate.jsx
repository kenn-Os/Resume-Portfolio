import React from 'react';
import { Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const EUROPASS_BLUE = '#0055A8';
const LIGHT_BLUE = '#F0F7FF';

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Open Sans',
    fontSize: 9,
    color: '#333333',
    backgroundColor: '#FFFFFF',
    lineHeight: 1.4,
  },
  header: {
    flexDirection: 'row',
    marginBottom: 40,
    borderBottomWidth: 3,
    borderBottomColor: EUROPASS_BLUE,
    borderBottomStyle: 'solid',
    paddingBottom: 25,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 700,
    color: EUROPASS_BLUE,
    letterSpacing: 3,
    textTransform: 'uppercase',
  },
  mainGrid: {
    flexDirection: 'row',
  },
  leftCol: {
    width: '30%',
    paddingRight: 20,
    borderRightWidth: 1,
    borderRightColor: '#E5E7EB',
    borderRightStyle: 'solid',
  },
  rightCol: {
    width: '70%',
    paddingLeft: 25,
  },
  sectionTitle: {
    fontSize: 10,
    fontWeight: 700,
    color: EUROPASS_BLUE,
    marginBottom: 12,
    textTransform: 'uppercase',
    borderBottomWidth: 1,
    borderBottomColor: EUROPASS_BLUE,
    borderBottomStyle: 'solid',
    paddingBottom: 4,
  },
  personalInfoItem: {
    marginBottom: 15,
  },
  label: {
    fontSize: 8,
    fontWeight: 700,
    color: '#666666',
    marginBottom: 3,
    textTransform: 'uppercase',
  },
  infoText: {
    fontSize: 9,
    color: '#111827',
    marginBottom: 8,
  },
  experienceItem: {
    marginBottom: 20,
  },
  expDate: {
    fontSize: 8.5,
    fontWeight: 700,
    color: '#4B5563',
    marginBottom: 4,
    backgroundColor: LIGHT_BLUE,
    paddingHorizontal: 6,
    paddingVertical: 2,
    alignSelf: 'flex-start',
  },
  expRole: {
    fontSize: 11,
    fontWeight: 700,
    color: '#000000',
    marginBottom: 2,
  },
  expOrg: {
    fontSize: 10,
    fontWeight: 600,
    color: EUROPASS_BLUE,
    marginBottom: 8,
  },
  bulletPointContainer: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  bulletPoint: {
    width: 10,
    color: EUROPASS_BLUE,
    fontWeight: 700,
  },
  bulletText: {
    flex: 1,
    fontSize: 8.5,
    color: '#374151',
  },
  digitalSkillBlock: {
    marginBottom: 12,
  },
  skillName: {
    fontSize: 8.5,
    fontWeight: 600,
    marginBottom: 4,
  },
  skillBar: {
    height: 5,
    backgroundColor: '#F3F4F6',
    borderRadius: 2,
    overflow: 'hidden',
  },
  skillProgress: {
    height: '100%',
    backgroundColor: EUROPASS_BLUE,
  },
  activityTitle: {
    fontSize: 9,
    fontWeight: 700,
    color: '#111827',
    marginBottom: 4,
  }
});

const EuropassTemplate = ({ profile, experience, tools, services }) => (
  <Page size="A4" style={styles.page}>
    {/* Header - Branding Removed */}
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Curriculum Vitae</Text>
    </View>

    <View style={styles.mainGrid}>
      {/* Sidebar - Left Column */}
      <View style={styles.leftCol}>
        <View style={styles.personalInfoItem}>
          <Text style={styles.sectionTitle}>Contact</Text>
          <Text style={styles.label}>Email</Text>
          <Text style={styles.infoText}>{profile.email}</Text>
          <Text style={styles.label}>Phone</Text>
          <Text style={styles.infoText}>{profile.phone}</Text>
          <Text style={styles.label}>Address</Text>
          <Text style={styles.infoText}>{profile.location}</Text>
          <Text style={styles.label}>Nationality</Text>
          <Text style={styles.infoText}>Nigerian</Text>
        </View>

        <View style={styles.personalInfoItem}>
          <Text style={styles.sectionTitle}>Digital Skills</Text>
          {tools.slice(0, 10).map((tool, i) => (
            <View key={i} style={styles.digitalSkillBlock}>
              <Text style={styles.skillName}>{tool.name}</Text>
              <View style={styles.skillBar}>
                <View style={[styles.skillProgress, { width: tool.level === 'Expert' ? '100%' : tool.level === 'Advanced' ? '80%' : tool.level === 'Intermediate' ? '60%' : '40%' }]} />
              </View>
            </View>
          ))}
        </View>
      </View>

      {/* Main Content - Right Column */}
      <View style={styles.rightCol}>
        <View style={{ marginBottom: 30 }}>
          <Text style={{ fontSize: 20, fontWeight: 700, color: '#000000', marginBottom: 5 }}>{profile.name}</Text>
          <Text style={{ fontSize: 11, color: EUROPASS_BLUE, fontWeight: 600 }}>{profile.role}</Text>
          <Text style={[styles.bulletText, { marginTop: 10, lineHeight: 1.5 }]}>{profile.tagline}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Work Experience</Text>
          {experience.map((exp, index) => (
            <View key={index} style={styles.experienceItem}>
              <Text style={styles.expDate}>{exp.period}</Text>
              <Text style={styles.expRole}>{exp.role}</Text>
              <Text style={styles.expOrg}>{exp.company}</Text>
              {exp.highlights.map((highlight, hIndex) => (
                <View key={hIndex} style={styles.bulletPointContainer}>
                  <Text style={styles.bulletPoint}>▪</Text>
                  <Text style={styles.bulletText}>{highlight}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Skills & Competencies</Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            {services.map((s, i) => (
              <View key={i} style={{ width: '48%', marginBottom: 15, marginRight: 10 }}>
                <Text style={styles.activityTitle}>{s.title}</Text>
                <Text style={styles.bulletText}>{s.description}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </View>
  </Page>
);

export default EuropassTemplate;

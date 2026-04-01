import React from 'react';
import { Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: 'Inter',
    fontSize: 10,
    color: '#1E293B',
    lineHeight: 1.5,
  },
  header: {
    marginBottom: 35,
    borderBottomWidth: 2,
    borderBottomColor: '#0284C7',
    borderBottomStyle: 'solid',
    paddingBottom: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerLeft: {
    flex: 1,
  },
  headerRight: {
    textAlign: 'right',
    fontSize: 9,
    color: '#64748B',
    lineHeight: 1.4,
  },
  name: {
    fontSize: 30,
    fontWeight: 700,
    color: '#0F172A',
    marginBottom: 4,
    letterSpacing: -1,
  },
  role: {
    fontSize: 14,
    fontWeight: 600,
    color: '#0284C7',
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  contactItem: {
    marginBottom: 2,
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: 700,
    color: '#0F172A',
    textTransform: 'uppercase',
    letterSpacing: 2,
    marginBottom: 12,
    backgroundColor: '#F8FAFC',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#0284C7',
    borderLeftStyle: 'solid',
  },
  experienceItem: {
    marginBottom: 18,
  },
  experienceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: 5,
  },
  company: {
    fontSize: 12,
    fontWeight: 700,
    color: '#1E293B',
  },
  period: {
    fontSize: 9.5,
    fontWeight: 600,
    color: '#64748B',
  },
  expRole: {
    fontSize: 10.5,
    fontWeight: 600,
    color: '#0284C7',
    marginBottom: 8,
  },
  bulletPointContainer: {
    flexDirection: 'row',
    marginBottom: 5,
    paddingLeft: 6,
  },
  bulletPoint: {
    width: 12,
    fontSize: 10,
    color: '#0284C7',
  },
  bulletText: {
    flex: 1,
    fontSize: 9.5,
    lineHeight: 1.6,
    color: '#334155',
  },
  skillsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 5,
  },
  skillCategory: {
    width: '50%',
    marginBottom: 15,
    paddingRight: 10,
  },
  skillCategoryTitle: {
    fontSize: 9.5,
    fontWeight: 700,
    marginBottom: 6,
    color: '#1E293B',
  },
  skillsList: {
    fontSize: 9,
    lineHeight: 1.5,
    color: '#475569',
  },
  techStackContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 5,
  },
  techBadge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    backgroundColor: '#F1F5F9',
    borderRadius: 5,
    fontSize: 8.5,
    color: '#475569',
    marginRight: 8,
    marginBottom: 6,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  }
});

const RegularTemplate = ({ profile, experience, tools, services }) => (
  <Page size="A4" style={styles.page}>
    {/* Executive Header Section */}
    <View style={styles.header}>
      <View style={styles.headerLeft}>
        <Text style={styles.name}>{profile.name}</Text>
        <Text style={styles.role}>{profile.role}</Text>
      </View>
      <View style={styles.headerRight}>
        <Text style={styles.contactItem}>{profile.email}</Text>
        <Text style={styles.contactItem}>{profile.phone}</Text>
        <Text style={styles.contactItem}>{profile.location}</Text>
        <Text style={styles.contactItem}>{profile.github}</Text>
      </View>
    </View>

    {/* Executive Summary */}
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Executive Summary</Text>
      <Text style={styles.bulletText}>{profile.tagline}</Text>
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
              <Text style={styles.bulletPoint}>•</Text>
              <Text style={styles.bulletText}>{highlight}</Text>
            </View>
          ))}
        </View>
      ))}
    </View>

    {/* Core Expertise */}
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Core Expertise</Text>
      <View style={styles.skillsGrid}>
        {services.map((service, index) => (
          <View key={index} style={styles.skillCategory}>
            <Text style={styles.skillCategoryTitle}>{service.title}</Text>
            <Text style={styles.skillsList}>{service.tasks.join(' • ')}</Text>
          </View>
        ))}
      </View>
    </View>

    {/* Technical Skills */}
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Technical Proficiency</Text>
      <View style={styles.techStackContainer}>
        {tools.map((tool, index) => (
          <Text key={index} style={styles.techBadge}>
            {tool.name}
          </Text>
        ))}
      </View>
    </View>
  </Page>
);

export default RegularTemplate;

/**
 * Case study IDs. Content comes from i18n (messages: caseStudies.cases[id].*).
 */
export const CASE_STUDY_IDS = [
  "retail-analytics",
  "fintech-data-platform",
  "telecom-cost-optimization",
] as const;

export type CaseStudyId = (typeof CASE_STUDY_IDS)[number];

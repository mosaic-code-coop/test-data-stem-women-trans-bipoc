import type { Person } from '@mosaic-code/test-data-factory';

export default {
  id: "srinivasa-ramanujan",
  fullName: "श्रीनिवास रामानुजन",
  dateOfBirth: new Date("1887-12-22T00:00:00.000Z"),
  pronouns: "he/him",
  preferredName: "Srīnivāsa Rāmānujan",
  givenName: "श्रीनिवास",
  surname: "रामानुजन",
  englishName: "Srinivasa Ramanujan",
  bio: "Srinivasa Ramanujan made extraordinary contributions to mathematical analysis, number theory, infinite series, and continued fractions despite having almost no formal training in pure mathematics. Working largely in isolation in India before collaborating with G. H. Hardy at Cambridge, he produced thousands of mathematical results that continue to inspire research today. His notebooks, filled with theorems and formulae, revealed insights that were decades ahead of their time and established him as one of history's greatest mathematical minds.",
  email: "ramanujan@cambridge.test",
  phone: null,
  picture: null,
  tags: [
    "Mathematics",
    "Number-Theory",
    "Indian",
    "Self-Taught",
    "Cambridge",
  ],
  groupMemberships: [
    "cambridge-mathematics",
    "indian-scientists",
  ],
  reference: "https://www.britannica.com/biography/Srinivasa-Ramanujan",
  quote: "An equation for me has no meaning unless it expresses a thought of God.",
  quoteReference: "https://www.goodreads.com/work/quotes/1031423-the-man-who-knew-infinity-a-life-of-the-genius-ramanujan",
} satisfies Person;

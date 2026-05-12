import type { Person } from '@mosaic-code/test-data-factory';

export default {
  id: "mary-jackson",
  fullName: "Mary Jackson",
  dateOfBirth: new Date("1921-04-09T00:00:00.000Z"),
  pronouns: "she/her",
  bio: "NASA's first African American female engineer, who worked on wind tunnel experiments and data analysis for aircraft design during the 1950s and 1960s. Jackson's engineering work contributed to the safety and efficiency of aircraft design, and she later worked to promote the hiring and promotion of other women in NASA's engineering ranks. Her career demonstrated the importance of both technical expertise and advocacy for diversity in STEM fields.",
  email: "mary.jackson@nasa.test",
  phone: "+1-555-864-1000",
  picture: null,
  tags: [
    "Engineering",
    "Aerospace-Engineering",
    "NASA",
    "African-American",
    "Wind-Tunnels",
  ],
  groupMemberships: [
    "nasa-engineering",
    "langley-research-center",
  ],
} satisfies Person;

import type { Person } from '@mosaic-code/test-data-factory';

export default {
  id: "mamie-phipps-clark",
  fullName: "Mamie Phipps Clark",
  dateOfBirth: new Date("1917-04-18T00:00:00.000Z"),
  pronouns: "she/her",
  bio: "The \"doll studies\" conducted by Mamie Phipps Clark demonstrated the psychological impact of segregation on children's self-esteem and racial identity, providing crucial evidence in the landmark Brown v. Board of Education case that ended legal segregation in American schools. Her research on racial identity and self-concept in African American children established the importance of considering psychological factors in educational policy and civil rights advocacy. Clark's work bridged scientific research and social justice in ways that continue to influence psychology and education today.",
  email: "mamie.clark@psychology-research.test",
  phone: null,
  picture: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Mamie_Clark_1958.jpg",
  tags: [
    "Psychology",
    "Social-Psychology",
    "Education",
    "African-American",
    "Civil-Rights",
  ],
  groupMemberships: [
    "psychology-research",
    "education-psychology",
  ],
} satisfies Person;

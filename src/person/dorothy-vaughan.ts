import type { Person } from '@mosaic-code/test-data-factory';

export default {
  id: "dorothy-vaughan",
  fullName: "Dorothy Vaughan",
  dateOfBirth: new Date("1910-09-20T00:00:00.000Z"),
  pronouns: "she/her",
  bio: "Dorothy Vaughan became the first African American woman to supervise a group of staff at the National Advisory Committee for Aeronautics (NACA), later NASA. Specializing in calculations for flight paths, she became an expert in FORTRAN programming and led the West Area Computing Unit during the 1940s and 1950s. Her leadership and technical skills helped pave the way for other African American women in STEM, and she played a crucial role in the transition from human computers to electronic computing.",
  email: "dorothy.vaughan@nasa.test",
  phone: "+1-555-864-1000",
  picture: "https://upload.wikimedia.org/wikipedia/commons/9/98/Dorothy_Vaughan_2.jpg",
  tags: [
    "Mathematics",
    "Computer-Science",
    "NASA",
    "African-American",
    "Leadership",
  ],
  groupMemberships: [
    "nasa-mathematics",
    "west-area-computing",
  ],
  quote: "I changed what I could, and what I couldn't, I endured.",
  quoteReference: "https://www.nasa.gov/people/dorothy-vaughan/",
} satisfies Person;

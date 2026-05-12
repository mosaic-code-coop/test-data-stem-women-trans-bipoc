import type { Person } from '@mosaic-code/test-data-factory';

export default {
  id: "maria-gaetana-agnesi",
  fullName: "Maria Gaetana Agnesi",
  dateOfBirth: new Date("1718-05-16T00:00:00.000Z"),
  pronouns: null,
  bio: "Maria Gaetana Agnesi's comprehensive textbook on calculus, published in 1748, was the first mathematics book by a woman to gain wide readership and helped establish her as one of the leading mathematicians of her era. Her research on differential equations and the curve that bears her name (the \"witch of Agnesi\") demonstrated exceptional mathematical insight. She was one of the first women appointed to a university position in mathematics, though she ultimately chose to dedicate her life to charitable work.",
  email: "maria.agnesi@italian-mathematics.test",
  phone: null,
  picture: "https://upload.wikimedia.org/wikipedia/commons/5/57/Maria_Gaetana_Agnesi.jpg",
  tags: [
    "Mathematics",
    "Calculus",
    "Differential-Equations",
    "Italian",
    "Eighteenth-Century",
  ],
  groupMemberships: [
    "italian-mathematics",
    "mathematical-history",
  ],
} satisfies Person;

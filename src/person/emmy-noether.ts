import type { Person } from '@mosaic-code/test-data-factory';

export default {
  id: "emmy-noether",
  fullName: "Emmy Noether",
  dateOfBirth: new Date("1882-03-23T00:00:00.000Z"),
  pronouns: "she/her",
  bio: "Noether's theorem, which connects symmetries to conservation laws, has been called \"one of the most important mathematical theorems ever proved in guiding the development of modern physics.\" Emmy Noether's work in abstract algebra revolutionized the field and established new approaches to understanding algebraic structures. Despite facing discrimination as a woman and a Jew in early 20th century Germany, she became one of the most influential mathematicians of her time.",
  email: "emmy.noether@mathematics-history.test",
  phone: null,
  picture: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Emmy_Noether_%283x4_cropped%29.jpg",
  tags: [
    "Mathematics",
    "Abstract-Algebra",
    "Theoretical-Physics",
    "German",
    "Noether-Theorem",
  ],
  groupMemberships: [
    "mathematical-history",
    "german-mathematics",
  ],
  quote: "My methods are really methods of working and thinking; this is why they have crept in everywhere anonymously.",
  quoteReference: "https://todayinsci.com/N/Noether_Emmy/NoetherEmmy-Quotations.htm",
} satisfies Person;

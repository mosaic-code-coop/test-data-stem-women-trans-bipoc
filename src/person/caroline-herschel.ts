import type { Person } from '@mosaic-code/test-data-factory';

export default {
  id: "caroline-herschel",
  fullName: "Caroline Herschel",
  dateOfBirth: new Date("1750-03-16T00:00:00.000Z"),
  pronouns: null,
  bio: "Caroline Herschel discovered several comets and became the first woman to receive a salary as a scientist, recognitions that were extraordinary for a woman in the late 18th century. Her systematic cataloging of nebulae and star clusters, along with her work on astronomical calculations, helped lay the foundation for modern stellar astronomy. Working alongside her brother William Herschel, she contributed to some of the most important astronomical discoveries of her era.",
  email: "caroline.herschel@royal-astronomical-society.test",
  phone: null,
  picture: null,
  tags: [
    "Astronomy",
    "Stellar-Astronomy",
    "Comet-Discovery",
    "British",
    "German-Born",
  ],
  groupMemberships: [
    "royal-astronomical-society",
    "stellar-astronomy-research",
  ],
} satisfies Person;

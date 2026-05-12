import type { Person } from '@mosaic-code/test-data-factory';

export default {
  id: "elena-cornaro-piscopia",
  fullName: "Elena Cornaro Piscopia",
  dateOfBirth: new Date("1646-06-05T00:00:00.000Z"),
  pronouns: null,
  bio: "In 1678, Elena Cornaro Piscopia became the first woman in history to receive a doctoral degree, earning her doctorate in philosophy from the University of Padua. Her intellectual achievements demonstrated exceptional ability in mathematics, philosophy, and multiple languages, leading to her appointment to the chair of mathematics at Padua. Her accomplishments helped pave the way for other women to pursue advanced education during a time when such opportunities were extremely limited.",
  email: "elena.piscopia@italian-mathematics.test",
  phone: null,
  picture: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Elena_Piscopia_portrait.jpg",
  tags: [
    "Mathematics",
    "Philosophy",
    "Italian",
    "Seventeenth-Century",
    "Academia",
  ],
  groupMemberships: [
    "italian-mathematics",
    "padua-university",
  ],
} satisfies Person;

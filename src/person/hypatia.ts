import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "hypatia",
  fullName: "Hypatia",
  dateOfBirth: new Date("0350-01-01T00:00:00.000Z"),
  pronouns: "she/her",
  bio: "As head of the Neoplatonic school in Alexandria during the late 4th and early 5th centuries CE, Hypatia taught mathematics, astronomy, and philosophy to students who traveled from across the Mediterranean world. Her work on conic sections and her commentaries on mathematical texts helped preserve and advance mathematical knowledge during a period of great cultural change. She remains one of the few ancient female scholars whose contributions to mathematics and philosophy are documented in historical records.",
  email: "hypatia@ancient-mathematics.test",
  phone: null,
  picture: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Hypatia_-_mid_19th_century_engraving.jpg",
  tags: ["Mathematics", "Astronomy", "Philosophy", "Greek", "Ancient-World"],
  groupMemberships: ["ancient-mathematics", "alexandria-school"],
} satisfies Person;

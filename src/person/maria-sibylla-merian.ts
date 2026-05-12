import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "maria-sibylla-merian",
  fullName: "Maria Sibylla Merian",
  dateOfBirth: new Date("1647-04-02T00:00:00.000Z"),
  pronouns: null,
  bio: "Maria Sibylla Merian's detailed illustrations of insects and their life cycles, particularly her work on the metamorphosis of butterflies, revolutionized the study of entomology in the late 17th and early 18th centuries. Her scientific expedition to Suriname, undertaken at age 52, produced meticulous documentation of tropical flora and fauna that remained scientifically valuable for centuries. She combined artistic skill with scientific observation in ways that established new standards for natural history illustration.",
  email: "maria.merian@german-natural-history.test",
  phone: null,
  picture: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Bildnis_der_Maria_Sibylla_Merian%2C_1679.jpg",
  tags: ["Biology", "Entomology", "Botany", "German", "Scientific-Illustration"],
  groupMemberships: ["german-natural-history", "entomology-research"],
} satisfies Person;

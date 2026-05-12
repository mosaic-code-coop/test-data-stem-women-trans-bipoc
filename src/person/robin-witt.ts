import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "robin-witt",
  fullName: "Robin Witt",
  pronouns: "she/her",
  bio: "As an electrical engineer at NASA contractor ERC at Kennedy Space Center, Robin Witt contributed to the integration and testing work that prepared the Space Launch System for the Artemis I uncrewed test flight in 2022, the foundational mission whose success cleared the path for the crewed Artemis II flight. After living in Florida since elementary school, she resigned her position in 2023 and relocated to Chicago, citing concerns for her safety as a transgender woman under the state's expanding anti-transgender legislation. She has continued her aerospace and defence engineering career, working subsequently as an Energetics Manufacturing Engineer at Northrop Grumman.",
  email: "robin.witt@artemis-engineers.test",
  phone: null,
  picture: null,
  tags: ["Electrical-Engineering", "Aerospace-Engineering", "Transgender", "LGBTQ", "Artemis", "American"],
  groupMemberships: ["kennedy-space-center", "artemis-program", "northrop-grumman"],
  reference: "https://futurism.com/the-byte/nasa-engineer-quit-transgender",
} satisfies Person;

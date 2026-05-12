import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "cheikh-anta-diop",
  fullName: "Cheikh Anta Diop",
  dateOfBirth: new Date("1923-12-29T00:00:00.000Z"),
  pronouns: "he/him",
  bio: "Cheikh Anta Diop was a Senegalese historian, anthropologist, and physicist who revolutionized the study of ancient African civilizations through scientific methods. He created and directed the radiocarbon dating laboratory at IFAN (Institut Fondamental d'Afrique Noire) and used melanin analysis to demonstrate that ancient Egyptians were Black Africans. His multidisciplinary approach, combining physics, chemistry, and archaeology, challenged Eurocentric historical narratives and established African contributions to world civilization on scientific grounds.",
  email: "ca.diop@dakar.test",
  phone: null,
  picture: "https://upload.wikimedia.org/wikipedia/commons/8/83/Cheikh_Anta_Diop%2C_late_1940s.jpg",
  tags: ["Physics", "Archaeology", "Senegalese", "Carbon-Dating", "African-History"],
  groupMemberships: ["african-scientists", "archaeology-research", "dakar-university"],
  reference: "https://en.wikipedia.org/wiki/Cheikh_Anta_Diop",
} satisfies Person;

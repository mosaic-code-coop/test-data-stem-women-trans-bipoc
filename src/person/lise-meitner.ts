import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "lise-meitner",
  fullName: "Lise Meitner",
  dateOfBirth: new Date("1878-11-07T00:00:00.000Z"),
  pronouns: "she/her",
  bio: "Lise Meitner's theoretical work provided the first physical explanation of nuclear fission, the process discovered through her collaboration with Otto Hahn and Fritz Strassmann, though her contributions were not fully recognized when Hahn received the Nobel Prize in Chemistry. Her research on beta decay and nuclear processes established her as one of the leading nuclear physicists of the early 20th century. Element 109, meitnerium, was named in her honor, a recognition of her lasting impact on physics.",
  email: "lise.meitner@nuclear-physics.test",
  phone: null,
  picture: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Lise_Meitner_NatGeo.jpg",
  tags: ["Physics", "Nuclear-Physics", "Radioactivity", "Austrian-Swedish", "Nuclear-Fission"],
  groupMemberships: ["nuclear-physics-research", "austrian-physics"],
  quote: "Life need not be easy, provided only that it is not empty.",
  quoteReference: "https://todayinsci.com/M/Meitner_Lise/MeitnerLise-Quotations.htm",
} satisfies Person;

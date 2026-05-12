import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "ben-barres",
  fullName: "Ben Barres",
  dateOfBirth: new Date("1954-09-13T00:00:00.000Z"),
  pronouns: "he/him",
  bio: "Ben Barres was an American neurobiologist whose research transformed understanding of glial cells — once dismissed as supporting tissue — by demonstrating their active role in synapse formation, neural development, and neurodegenerative disease. As chair of the neurobiology department at Stanford he led laboratories that produced foundational work on astrocyte signalling and oligodendrocyte function. He was the first openly transgender scientist elected to the United States National Academy of Sciences and used that platform repeatedly to challenge gender bias in academic science, drawing on his own experience presenting as both a woman and a man in research. He continued leading his lab until his death from pancreatic cancer in 2017.",
  email: "b.barres@stanford-neuro.test",
  phone: null,
  picture: null,
  tags: ["Neuroscience", "Glial-Cells", "American", "Transgender", "LGBTQ", "Medical-Research"],
  groupMemberships: ["medical-researchers"],
  reference: "https://en.wikipedia.org/wiki/Ben_Barres",
} satisfies Person;

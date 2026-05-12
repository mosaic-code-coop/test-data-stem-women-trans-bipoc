import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "marie-curie",
  fullName: "Maria Skłodowska-Curie",
  dateOfBirth: new Date("1867-11-07T00:00:00.000Z"),
  pronouns: "she/her",
  preferredName: "Marie Curie",
  givenName: "Maria",
  surname: "Skłodowska",
  englishName: "Marie Curie",
  bio: "Through systematic investigation of radioactive materials, Marie Curie discovered the elements polonium and radium, establishing the field of nuclear physics and contributing to the development of X-ray technology. Despite facing gender discrimination in the male-dominated scientific community of early 20th century Europe, she became the first person to win Nobel Prizes in two different scientific fields and the first woman to win a Nobel Prize. Her research fundamentally changed our understanding of atomic structure and laid the groundwork for modern nuclear science.",
  email: "marie.curie@sorbonne.test",
  phone: null,
  picture: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Marie_Curie_c._1920s.jpg",
  tags: ["Physics", "Chemistry", "Radioactivity", "Nobel-Prize", "Polish-French"],
  groupMemberships: ["sorbonne-physics", "radioactivity-research"],
  reference: "https://www.nobelprize.org/prizes/physics/1903/curie/facts/",
  quote:
    "Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.",
  quoteReference: "https://www.brainyquote.com/quotes/marie_curie_389010",
} satisfies Person;

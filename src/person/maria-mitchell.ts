import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "maria-mitchell",
  fullName: "Maria Mitchell",
  dateOfBirth: new Date("1818-08-01T00:00:00.000Z"),
  pronouns: "she/her",
  bio: "Maria Mitchell's discovery of a comet in 1847 earned her international recognition and a gold medal from the King of Denmark, making her the first American woman to achieve such astronomical distinction. She became the first woman elected to the American Academy of Arts and Sciences and later established the first astronomy program for women in the United States at Vassar College. Her career demonstrated that women could excel in observational science and inspired generations of female astronomers.",
  email: "maria.mitchell@vassar-astronomy.test",
  phone: null,
  picture: "https://upload.wikimedia.org/wikipedia/commons/7/70/Maria_Mitchell_portrait.jpg",
  tags: ["Astronomy", "Comet-Discovery", "Education", "American", "Nineteenth-Century"],
  groupMemberships: ["vassar-astronomy", "american-astronomical-society"],
  quote:
    "We especially need imagination in science. It is not all mathematics, nor all logic, but it is somewhat beauty and poetry.",
  quoteReference: "https://libquotes.com/maria-mitchell",
} satisfies Person;

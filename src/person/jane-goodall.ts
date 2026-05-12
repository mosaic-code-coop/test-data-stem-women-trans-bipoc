import type { Person } from '@mosaic-code/test-data-factory';

export default {
  id: "jane-goodall",
  fullName: "Jane Goodall",
  dateOfBirth: new Date("1934-04-03T00:00:00.000Z"),
  pronouns: "she/her",
  bio: "Jane Goodall's long-term study of chimpanzee communities in Tanzania revealed their complex social structures, tool-making abilities, and emotional lives, challenging the traditional boundary between humans and other animals. Her observations revolutionized our understanding of animal behavior and human evolution. Her work has influenced conservation efforts worldwide and continues to shape our understanding of the natural world.",
  email: "jane.goodall@janegoodall.test",
  phone: "+1-555-682-9220",
  picture: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Jane-goodall_%28cropped%29.jpg",
  tags: [
    "Primatology",
    "Anthropology",
    "Conservation",
    "British",
    "Field-Research",
  ],
  groupMemberships: [
    "janegoodall-institute",
    "primatology-research",
  ],
  quote: "What you do makes a difference, and you have to decide what kind of difference you want to make.",
  quoteReference: "https://janegoodall.ca/what-we-do/",
} satisfies Person;

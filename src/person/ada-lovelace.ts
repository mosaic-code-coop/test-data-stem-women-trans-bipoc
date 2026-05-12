import type { Person } from '@mosaic-code/test-data-factory';

export default {
  id: "ada-lovelace",
  fullName: "Ada Lovelace",
  dateOfBirth: new Date("1815-12-10T00:00:00.000Z"),
  pronouns: "she/her",
  bio: "The first computer programmer, who wrote the first algorithm intended to be processed by Charles Babbage's Analytical Engine in the 1840s. Lovelace recognized that the machine could go beyond mere calculation to process any symbolic information, including music and text, making her the first person to envision the broader potential of computing. Her mathematical insights and detailed notes on the Analytical Engine established fundamental concepts of computer programming that would not be fully realized until the 20th century.",
  email: "ada.lovelace@computing-history.test",
  phone: null,
  picture: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Ada_lovelace.jpg",
  tags: [
    "Computer-Science",
    "Mathematics",
    "Programming",
    "Victorian-Era",
    "British",
  ],
  groupMemberships: [
    "computer-pioneers",
    "mathematical-history",
  ],
  reference: "https://www.britannica.com/biography/Ada-Lovelace",
  quote: "The Analytical Engine weaves algebraical patterns just as the Jacquard-loom weaves flowers and leaves.",
  quoteReference: "https://psychclassics.yorku.ca/Lovelace/lovelace.htm",
} satisfies Person;

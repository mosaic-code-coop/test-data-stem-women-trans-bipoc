import type { Person } from '@mosaic-code/test-data-factory';

export default {
  id: "flossie-wong-staal",
  fullName: "黃以靜",
  dateOfBirth: new Date("1947-08-27T00:00:00.000Z"),
  pronouns: "she/her",
  preferredName: "Huáng Yǐjìng",
  givenName: "以靜",
  surname: "黃",
  englishName: "Flossie Wong-Staal",
  bio: "Flossie Wong-Staal was a pioneering virologist who played a crucial role in identifying HIV as the cause of AIDS and developing the first genetic map of the virus. Born in China and trained in the United States, she was the first scientist to clone HIV and determine its complete genetic structure. Her groundbreaking research provided the foundation for HIV testing, antiviral drug development, and vaccine research, making her one of the most influential scientists in the fight against AIDS.",
  email: "fwong.staal@scripps.test",
  phone: null,
  picture: null,
  tags: [
    "Virology",
    "HIV-AIDS",
    "Genetics",
    "Chinese-American",
    "Medical-Research",
  ],
  groupMemberships: [
    "medical-researchers",
    "virology-research",
    "scripps-research",
  ],
  reference: "https://www.scripps.edu/news-events/press-room/2020/20200715-wong-staal.html",
} satisfies Person;

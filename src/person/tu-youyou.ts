import type { Person } from '@mosaic-code/test-data-factory';

export default {
  id: "tu-youyou",
  fullName: "屠呦呦",
  dateOfBirth: new Date("1930-12-30T00:00:00.000Z"),
  pronouns: "she/her",
  preferredName: "Tú Yōuyōu",
  givenName: "呦呦",
  surname: "屠",
  englishName: "Tu Youyou",
  bio: "Tu Youyou is a Chinese pharmaceutical chemist who isolated artemisinin, a compound that has saved millions of lives by treating drug-resistant malaria. Working under Project 523 during the Cultural Revolution, she combed through historical Chinese medical texts and identified sweet wormwood (Artemisia annua) as a candidate, then developed a low-temperature ether extraction that preserved the active compound's efficacy. She tested early preparations on herself before clinical trials, and the resulting therapy became the World Health Organization's first-line treatment for malaria. In 2015 she became the first Chinese woman to win a Nobel Prize in the sciences, sharing the Physiology or Medicine award.",
  email: "tu.youyou@academia-tcm.test",
  phone: null,
  picture: null,
  tags: [
    "Pharmaceutical-Chemistry",
    "Malaria",
    "Chinese",
    "Nobel-Prize",
    "Traditional-Medicine",
  ],
  groupMemberships: [
    "medical-researchers",
    "nobel-laureates",
  ],
  reference: "https://en.wikipedia.org/wiki/Tu_Youyou",
} satisfies Person;

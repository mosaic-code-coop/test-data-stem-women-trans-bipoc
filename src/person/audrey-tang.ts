import type { Person } from '@mosaic-code/test-data-factory';

export default {
  id: "audrey-tang",
  fullName: "唐鳳",
  dateOfBirth: new Date("1981-04-18T00:00:00.000Z"),
  pronouns: "they/them",
  preferredName: "Táng Fèng",
  givenName: "鳳",
  surname: "唐",
  englishName: "Audrey Tang",
  bio: "Audrey Tang is a Taiwanese programmer and civic technologist who served as Taiwan's first Digital Minister and then inaugural Minister of Digital Affairs, leading work on participatory democracy infrastructure including the vTaiwan and Join platforms. Earlier in their career they led implementations of Perl 6 (Pugs) on Haskell and contributed extensively to open-source language and translation tools. During the COVID-19 pandemic they coordinated the open-source mask supply dashboard credited with smoothing public access to PPE in Taiwan. Openly non-binary, they describe their gender as post-gender and use any pronoun, and have argued throughout their career that civic-tech infrastructure should be radically transparent and broadly co-created.",
  email: "audrey@moda-tw.test",
  phone: null,
  picture: null,
  tags: [
    "Computer-Science",
    "Programming",
    "Taiwanese",
    "Civic-Tech",
    "Non-Binary",
    "LGBTQ",
    "Open-Source",
  ],
  groupMemberships: [
    "computer-pioneers",
  ],
  reference: "https://en.wikipedia.org/wiki/Audrey_Tang",
} satisfies Person;

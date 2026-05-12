import type { Person } from '@mosaic-code/test-data-factory';

export default {
  id: "rosalind-franklin",
  fullName: "Rosalind Franklin",
  dateOfBirth: new Date("1920-07-25T00:00:00.000Z"),
  pronouns: "she/her",
  bio: "The famous \"Photo 51,\" produced through meticulous X-ray diffraction work at King's College London, revealed the helical structure of DNA and provided crucial evidence for the double helix model. Rosalind Franklin's contributions were not fully recognized during her lifetime, though her experimental precision was essential to understanding DNA's structure. Her research on the molecular structure of coal and viruses also made significant contributions to our understanding of complex molecular structures.",
  email: "rosalind.franklin@kcl.test",
  phone: null,
  picture: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Rosalind_Franklin_%28retouched%29.jpg",
  tags: [
    "Chemistry",
    "Molecular-Biology",
    "X-Ray-Crystallography",
    "DNA",
    "British",
  ],
  groupMemberships: [
    "kings-college-chemistry",
    "molecular-biology-research",
  ],
  quote: "Science and everyday life cannot and should not be separated.",
  quoteReference: "https://quoteinvestigator.com/2021/09/12/science-everyday/",
} satisfies Person;

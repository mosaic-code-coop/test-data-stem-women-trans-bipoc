import type { Person } from '@mosaic-code/test-data-factory';

export default {
  id: "dorothy-hodgkin",
  fullName: "Dorothy Hodgkin",
  dateOfBirth: new Date("1910-05-12T00:00:00.000Z"),
  pronouns: "she/her",
  bio: "Dorothy Hodgkin's determination of the structures of penicillin, vitamin B12, and insulin using X-ray crystallography revolutionized our understanding of these important compounds and earned her the 1964 Nobel Prize in Chemistry. Her work demonstrated the power of crystallography in revealing the three-dimensional structure of complex molecules. She was only the third woman to win the Nobel Prize in Chemistry, following Marie Curie and Irène Joliot-Curie.",
  email: "dorothy.hodgkin@oxford-chemistry.test",
  phone: null,
  picture: "https://upload.wikimedia.org/wikipedia/en/3/3f/Dorothy_Hodgkin_Nobel.jpg",
  tags: [
    "Chemistry",
    "X-Ray-Crystallography",
    "Biochemistry",
    "British",
    "Nobel-Prize",
  ],
  groupMemberships: [
    "oxford-chemistry",
    "crystallography-research",
  ],
} satisfies Person;

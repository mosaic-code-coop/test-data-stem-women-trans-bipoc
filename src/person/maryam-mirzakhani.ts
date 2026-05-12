import type { Person } from '@mosaic-code/test-data-factory';

export default {
  id: "maryam-mirzakhani",
  fullName: "مریم میرزاخانی",
  dateOfBirth: new Date("1977-05-12T00:00:00.000Z"),
  pronouns: "she/her",
  preferredName: "Maryam Mirzakhani",
  givenName: "مریم",
  surname: "میرزاخانی",
  englishName: "Maryam Mirzakhani",
  bio: "Maryam Mirzakhani was an Iranian mathematician whose work on the dynamics and geometry of Riemann surfaces, moduli spaces, and hyperbolic geometry connected ergodic theory and complex analysis in ways that reshaped several fields. Trained at Sharif University of Technology and Harvard, she joined Stanford as a professor and produced results on the volumes of moduli spaces and the counting of simple closed geodesics. In 2014 she became the first woman and the first Iranian to receive the Fields Medal, the most prominent honour in mathematics. She continued working through cancer treatment until her death in 2017, leaving an influence on geometric topology that her colleagues are still extending.",
  email: "m.mirzakhani@stanford-math.test",
  phone: null,
  picture: null,
  tags: [
    "Mathematics",
    "Hyperbolic-Geometry",
    "Iranian",
    "Fields-Medal",
    "Moduli-Spaces",
  ],
  groupMemberships: [
    "mathematical-education",
  ],
  reference: "https://en.wikipedia.org/wiki/Maryam_Mirzakhani",
} satisfies Person;

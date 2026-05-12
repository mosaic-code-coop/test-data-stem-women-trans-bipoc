import type { Person } from '@mosaic-code/test-data-factory';

export default {
  id: "annie-easley",
  fullName: "Annie Easley",
  dateOfBirth: new Date("1933-04-23T00:00:00.000Z"),
  pronouns: "she/her",
  bio: "During her 34 years at NASA, Annie Easley developed software for the Centaur rocket stage and energy conversion systems that contributed to the development of hybrid vehicles and renewable energy storage. She overcame both racial and gender discrimination to become a respected computer scientist whose work helped establish computer programming as a crucial component of aerospace engineering. Her contributions to battery technology and alternative energy systems continue to influence sustainable technology development.",
  email: "annie.easley@nasa.test",
  phone: "+1-555-433-4000",
  picture: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Annie_Easley.jpg",
  tags: [
    "Computer-Science",
    "Mathematics",
    "NASA",
    "African-American",
    "Energy-Systems",
  ],
  groupMemberships: [
    "nasa-mathematics",
    "lewis-research-center",
  ],
} satisfies Person;

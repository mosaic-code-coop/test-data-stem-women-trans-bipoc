import type { Person } from '@mosaic-code/test-data-factory';

export default {
  id: "shirley-ann-jackson",
  fullName: "Shirley Ann Jackson",
  dateOfBirth: new Date("1946-08-05T00:00:00.000Z"),
  pronouns: "she/her",
  bio: "In 1973, Shirley Ann Jackson became the first African American woman to earn a doctorate from MIT, going on to conduct research in theoretical particle physics and solid state physics. Her scientific work contributed to advances in telecommunications technology, including the development of touch-tone telephones and fiber optic cables. As president of Rensselaer Polytechnic Institute, her leadership in academia and government has helped expand opportunities for underrepresented groups in STEM fields.",
  email: "shirley.jackson@rpi.test",
  phone: "+1-555-276-6000",
  picture: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Shirley_Ann_Jackson_World_Economic_Forum_2010.jpg",
  tags: [
    "Physics",
    "Theoretical-Physics",
    "Academia",
    "African-American",
    "Leadership",
  ],
  groupMemberships: [
    "rpi-physics",
    "mit-alumni",
  ],
  quote: "Do not let others define who you are. Define yourself.",
  quoteReference: "https://www.perotmuseum.org/events/children-and-families/stemleaders/shirley-ann-jackson/",
} satisfies Person;

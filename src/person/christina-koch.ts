import type { Person } from '@mosaic-code/test-data-factory';

export default {
  id: "christina-koch",
  fullName: "Christina Hammock Koch",
  dateOfBirth: new Date("1979-01-29T00:00:00.000Z"),
  pronouns: "she/her",
  bio: "Selected as a mission specialist for the Artemis II flight in April 2026, Christina Koch became the first woman to travel beyond low Earth orbit and around the Moon, helping set a new record for the farthest distance ever travelled by humans from Earth at 406,771 kilometres. An electrical engineer by training, she previously held the record for the longest single spaceflight by a woman with 328 continuous days aboard the International Space Station and participated in the first all-female spacewalks. Before joining the astronaut corps in 2013, she worked as an electrical engineer at NASA Goddard Space Flight Center and as a research associate with the United States Antarctic Program at remote stations including the South Pole.",
  email: "christina.koch@nasa.test",
  phone: "+1-555-483-0000",
  picture: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Jsc2023e0016435_alt.jpg",
  tags: [
    "Electrical-Engineering",
    "Aerospace-Engineering",
    "NASA",
    "Space-Exploration",
    "Artemis",
  ],
  groupMemberships: [
    "nasa-engineering",
    "artemis-program",
    "johnson-space-center",
  ],
  reference: "https://www.nasa.gov/people/christina-koch/",
} satisfies Person;

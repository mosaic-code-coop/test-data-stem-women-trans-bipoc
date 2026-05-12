import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "victor-glover",
  fullName: "Victor Jerome Glover Jr.",
  dateOfBirth: new Date("1976-04-30T00:00:00.000Z"),
  pronouns: "he/him",
  bio: "Piloting the Artemis II spacecraft on its lunar flyby in April 2026, Victor Glover became the first Black astronaut to fly to the Moon. A United States Navy commander and graduate test pilot, he holds a bachelor's degree in general engineering from Cal Poly San Luis Obispo and three master's degrees spanning flight test engineering, systems engineering, and military operational art and science, and has logged over 3,000 flight hours across more than forty aircraft types. As pilot of SpaceX Crew Dragon's first operational crewed mission in 2020, he was the first African American to serve as a long-duration crew member aboard the International Space Station.",
  email: "victor.glover@nasa.test",
  phone: "+1-555-483-0000",
  picture: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Victor_J._Glover_official_portrait.jpg",
  tags: ["Aerospace-Engineering", "Systems-Engineering", "NASA", "African-American", "Artemis"],
  groupMemberships: ["nasa-engineering", "artemis-program", "johnson-space-center", "african-american-scientists"],
  reference: "https://www.nasa.gov/people/victor-j-glover-jr/",
} satisfies Person;

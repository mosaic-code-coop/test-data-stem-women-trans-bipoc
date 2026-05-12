import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "kalpana-chawla",
  fullName: "Kalpana Chawla",
  dateOfBirth: new Date("1962-03-17T00:00:00.000Z"),
  pronouns: "she/her",
  bio: "Kalpana Chawla became the first woman of Indian descent to fly in space when she served as a mission specialist on the Space Shuttle Columbia. Her work focused on fluid dynamics and microgravity research, contributing to our understanding of how materials behave in space. Her engineering expertise and determination inspired countless young people, particularly in India and among immigrant communities, to pursue careers in aerospace engineering and space exploration.",
  email: "kalpana.chawla@nasa.test",
  phone: "+1-555-483-0000",
  picture:
    "https://upload.wikimedia.org/wikipedia/commons/9/9c/Kalpana_Chawla%2C_NASA_photo_portrait_in_orange_suit.jpg",
  tags: ["Aerospace-Engineering", "Space-Exploration", "NASA", "Indian-American", "Fluid-Dynamics"],
  groupMemberships: ["nasa-engineering", "space-shuttle-program"],
  quote:
    "The path from dreams to success does exist. May you have the vision to find it, the courage to get on it and the perseverance to follow it.",
  quoteReference: "https://www.brainyquote.com/authors/kalpana_chawla",
} satisfies Person;

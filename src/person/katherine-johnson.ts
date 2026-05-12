import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "katherine-johnson",
  fullName: "Katherine Johnson",
  dateOfBirth: new Date("1918-08-26T00:00:00.000Z"),
  pronouns: "she/her",
  bio: "Katherine Johnson's calculations were critical to the success of NASA's early space missions, including Alan Shepard's 1961 spaceflight and John Glenn's 1962 orbital mission. She overcame both racial and gender discrimination to become one of the most respected \"computers\" at NASA, where her mathematical precision helped ensure the safety of astronauts during the critical early years of space exploration. Her work on orbital mechanics and trajectory calculations demonstrated exceptional mathematical skill and contributed to the success of the Apollo program.",
  email: "katherine.johnson@nasa.test",
  phone: "+1-555-864-1000",
  picture: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Katherine_Johnson_1983.jpg",
  tags: ["Mathematics", "Physics", "NASA", "Space-Exploration", "African-American"],
  groupMemberships: ["nasa-mathematics", "african-american-scientists"],
  reference: "https://www.nasa.gov/content/katherine-johnson-biography",
  quote:
    "I counted everything. I counted the steps to the road, the steps up to church, the number of dishes and silverware I washed … anything that could be counted, I did.",
  quoteReference: "https://www.nasa.gov/image-article/katherine-johnson-at-work-1962/",
} satisfies Person;

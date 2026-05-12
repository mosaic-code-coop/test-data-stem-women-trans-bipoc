import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "charlotte-angas-scott",
  fullName: "Charlotte Angas Scott",
  dateOfBirth: new Date("1858-06-08T00:00:00.000Z"),
  pronouns: "she/her",
  bio: "As the first head of the mathematics department at Bryn Mawr College, Charlotte Angas Scott created opportunities for women to pursue advanced mathematics at a time when most universities excluded them from graduate programs. Her research on plane curves and the mathematical foundations of geometry helped establish rigorous standards in mathematical research. Her leadership and scholarly contributions made her one of the most influential figures in American mathematical education during the late 19th and early 20th centuries.",
  email: "charlotte.scott@brynmawr.test",
  phone: null,
  picture: "https://upload.wikimedia.org/wikipedia/commons/9/99/CharlotteAngasScott1910.png",
  tags: ["Mathematics", "Algebraic-Geometry", "Mathematical-Education", "British", "Academia"],
  groupMemberships: ["brynmawr-mathematics", "mathematical-education"],
} satisfies Person;

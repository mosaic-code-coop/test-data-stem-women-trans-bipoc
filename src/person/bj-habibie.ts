import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "bj-habibie",
  fullName: "Bacharuddin Jusuf Habibie",
  dateOfBirth: new Date("1936-06-25T00:00:00.000Z"),
  pronouns: "he/him",
  preferredName: "B.J. Habibie",
  bio: "B.J. Habibie was an Indonesian aerospace engineer who made significant contributions to aircraft design, particularly in thermodynamics, construction, and aerodynamics. After earning his doctorate in engineering from RWTH Aachen University in Germany, he worked for Messerschmitt-Bölkow-Blohm, where he developed theories on crack propagation in aircraft structures. Returning to Indonesia, he founded the national aircraft industry (IPTN) and led the development of the N-250 turboprop aircraft. His engineering expertise earned him international recognition before he became Indonesia's third president.",
  email: "bj.habibie@iptn.test",
  phone: null,
  picture: null,
  tags: ["Aerospace-Engineering", "Aircraft-Design", "Indonesian", "Thermodynamics", "Aerodynamics"],
  groupMemberships: ["indonesian-scientists", "aerospace-research", "southeast-asian-research"],
  reference: "https://en.wikipedia.org/wiki/B._J._Habibie",
} satisfies Person;

import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "lynn-conway",
  fullName: "Lynn Conway",
  dateOfBirth: new Date("1938-01-02T00:00:00.000Z"),
  pronouns: "she/her",
  bio: "Lynn Conway was an American computer scientist and electrical engineer whose work on Very Large Scale Integration (VLSI) design — the Mead-Conway revolution — gave engineers a tractable methodology for designing chips with hundreds of thousands of transistors and remade the semiconductor industry. Her earlier work at IBM had produced the foundational technique of dynamic instruction scheduling, but she was fired in 1968 after disclosing her plans for gender transition. She rebuilt her career under a new identity at Memorex and then Xerox PARC before joining the University of Michigan, and in 1999 came out publicly as transgender to challenge erasure and contest discrimination in technical fields. Her advocacy in the decades that followed shaped policy and visibility for transgender people in engineering, alongside the technical legacy that earned her IEEE and National Academy of Engineering honours.",
  email: "l.conway@umich-eecs.test",
  phone: null,
  picture: null,
  tags: ["Computer-Science", "VLSI-Design", "American", "Transgender", "LGBTQ", "Electrical-Engineering"],
  groupMemberships: ["computer-pioneers", "programming-pioneers"],
  reference: "https://en.wikipedia.org/wiki/Lynn_Conway",
} satisfies Person;

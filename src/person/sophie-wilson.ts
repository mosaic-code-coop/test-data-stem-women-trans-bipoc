import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "sophie-wilson",
  fullName: "Sophie Wilson",
  dateOfBirth: new Date("1957-06-01T00:00:00.000Z"),
  pronouns: "she/her",
  bio: "Sophie Wilson is a British computer scientist whose architectural decisions sit inside billions of devices in daily use. At Acorn Computers in the early 1980s she co-designed the BBC Micro and wrote BBC BASIC, then went on to design the instruction set of the Acorn RISC Machine — the ARM architecture — that today underpins most mobile, embedded, and increasingly server-class processors. She has remained at Broadcom (which acquired the Acorn-derived chip business) leading processor and codec design and contributing to subsequent ARM generations. A trans woman, she has spoken publicly about her transition and serves as a visible figure at the intersection of fundamental computer engineering and queer professional life.",
  email: "s.wilson@broadcom-cpu.test",
  phone: null,
  picture: null,
  tags: ["Computer-Science", "CPU-Architecture", "British", "Transgender", "LGBTQ", "ARM", "BBC-Micro"],
  groupMemberships: ["computer-pioneers", "programming-pioneers"],
  reference: "https://en.wikipedia.org/wiki/Sophie_Wilson",
} satisfies Person;

import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "grace-hopper",
  fullName: "Grace Hopper",
  dateOfBirth: new Date("1906-12-09T00:00:00.000Z"),
  pronouns: "she/her",
  bio: "Grace Hopper developed the first compiler for a computer programming language, fundamentally changing how humans interact with computers. Her work on the UNIVAC I led to the development of COBOL, one of the first high-level programming languages, which revolutionized business computing. Rising to the rank of rear admiral in the United States Navy, her concept of machine-independent programming languages and advocacy for standardized programming practices helped establish software engineering as a discipline.",
  email: "grace.hopper@navy.test",
  phone: "+1-555-697-0211",
  picture: "https://upload.wikimedia.org/wikipedia/commons/3/37/Grace_Hopper_and_UNIVAC.jpg",
  tags: ["Computer-Science", "Programming", "Navy", "COBOL", "Compiler", "American"],
  groupMemberships: ["navy-computing", "programming-pioneers"],
  quote: "It's easier to ask forgiveness than it is to get permission.",
  quoteReference: "https://www.oxfordreference.com/display/10.1093/acref/9780191826719.001.0001/q-oro-ed4-00017750",
} satisfies Person;

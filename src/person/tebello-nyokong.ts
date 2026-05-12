import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "tebello-nyokong",
  fullName: "Tebello Nyokong",
  dateOfBirth: new Date("1951-10-20T00:00:00.000Z"),
  pronouns: "she/her",
  bio: "Tebello Nyokong is a Lesotho-born South African chemist whose research on metallophthalocyanines has advanced photodynamic therapy as a less-invasive cancer treatment. Based at Rhodes University in Makhanda, her group has investigated how light-activated dyes can selectively destroy tumour cells, with applications also extending to environmental remediation and sensor design. She received the L'Oréal-UNESCO For Women in Science Award representing Africa and the Arab States in 2009 and the African Union Kwame Nkrumah Award for Scientific Excellence in 2016, alongside the South African Order of Mapungubwe and election as a Fellow of the Royal Society. Her work continues to influence both chemistry curricula across Southern Africa and ongoing clinical translation of photodynamic therapy.",
  email: "t.nyokong@rhodes-chem.test",
  phone: null,
  picture: null,
  tags: ["Chemistry", "Photodynamic-Therapy", "South-African", "Cancer-Research", "Phthalocyanines"],
  groupMemberships: ["african-scientists", "medical-researchers"],
  reference: "https://en.wikipedia.org/wiki/Tebello_Nyokong",
} satisfies Person;

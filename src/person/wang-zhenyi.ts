import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "wang-zhenyi",
  fullName: "王貞儀",
  dateOfBirth: new Date("1768-01-01T00:00:00.000Z"),
  pronouns: "she/her",
  preferredName: "Wáng Zhēnyí",
  givenName: "貞儀",
  surname: "王",
  englishName: "Wang Zhenyi",
  bio: "During the Qing dynasty, Wang Zhenyi conducted research on lunar eclipses and developed mathematical calculations that demonstrated exceptional skill in both observational astronomy and theoretical mathematics. Her work helped advance understanding of celestial mechanics in 18th century China, and she wrote accessible explanations of complex astronomical phenomena. Her scholarship established her as one of the most accomplished female scientists of her era in a society that offered few formal educational opportunities for women.",
  email: "wang.zhenyi@chinese-astronomy.test",
  phone: null,
  picture: null,
  tags: ["Astronomy", "Mathematics", "Celestial-Mechanics", "Chinese", "Qing-Dynasty"],
  groupMemberships: ["chinese-astronomy", "mathematical-history"],
} satisfies Person;

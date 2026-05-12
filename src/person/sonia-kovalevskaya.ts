import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "sonia-kovalevskaya",
  fullName: "Софья Васильевна Ковалевская",
  dateOfBirth: new Date("1850-01-15T00:00:00.000Z"),
  pronouns: "she/her",
  preferredName: "Sofia Kovalevskaya",
  givenName: "Софья",
  surname: "Ковалевская",
  englishName: "Sofia Vasilyevna Kovalevskaya",
  bio: "Sofia Kovalevskaya became the first woman to obtain a doctorate in mathematics and the first woman appointed to a full professorship in Northern Europe, achieving these milestones despite the barriers women faced in 19th century academia. Her work on the rotation of a solid body around a fixed point and her research on partial differential equations established her as a leading mathematician of her era. Her contributions to analysis and mechanics demonstrated that mathematical ability transcends the gender barriers of her time.",
  email: "sonia.kovalevskaya@mathematics-history.test",
  phone: null,
  picture: null,
  tags: ["Mathematics", "Analysis", "Partial-Differential-Equations", "Russian", "Mechanics"],
  groupMemberships: ["mathematical-history", "russian-mathematics"],
} satisfies Person;

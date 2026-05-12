import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "sophia-brahe",
  fullName: "Sophia Brahe",
  dateOfBirth: new Date("1556-09-24T00:00:00.000Z"),
  pronouns: "she/her",
  bio: "Sophia Brahe assisted her brother Tycho Brahe in astronomical observations and calculations that helped establish the foundations of modern observational astronomy during the late 16th century. Her contributions to recording and analyzing astronomical data supported some of the most precise pre-telescopic measurements ever made. She also applied scientific approaches to horticulture and agriculture, making her one of the most accomplished female scientists of the Renaissance period.",
  email: "sophia.brahe@danish-astronomy.test",
  phone: null,
  picture: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Sophie_Brahe_portrait.jpg",
  tags: ["Astronomy", "Horticulture", "Observational-Astronomy", "Danish", "Renaissance"],
  groupMemberships: ["danish-astronomy", "renaissance-science"],
} satisfies Person;

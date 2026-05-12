import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "sophie-germain",
  fullName: "Sophie Germain",
  dateOfBirth: new Date("1776-04-01T00:00:00.000Z"),
  pronouns: "she/her",
  bio: "Despite facing gender discrimination that prevented her from attending the École Polytechnique, Sophie Germain corresponded with leading mathematicians and made substantial contributions to number theory and mathematical physics during the early 19th century. Her work on Fermat's Last Theorem and her research on elasticity theory established her as one of the most important mathematicians of her time. She pioneered mathematical approaches to understanding vibration patterns in elastic surfaces, work that would later influence engineering and physics.",
  email: "sophie.germain@mathematics-history.test",
  phone: null,
  picture:
    "https://upload.wikimedia.org/wikipedia/commons/1/15/Germain_-_%C5%92uvres_philosophiques%2C_1896_%28Illustration_page_4%29.jpg",
  tags: ["Mathematics", "Number-Theory", "Elasticity-Theory", "French", "Nineteenth-Century"],
  groupMemberships: ["mathematical-history", "french-mathematics"],
} satisfies Person;

import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "thomas-adeoye-lambo",
  fullName: "Thomas Adeoye Lambo",
  dateOfBirth: new Date("1923-03-29T00:00:00.000Z"),
  pronouns: "he/him",
  bio: 'Thomas Adeoye Lambo was a Nigerian psychiatrist who revolutionized mental health care in Africa and globally as the first African to lead the World Health Organization\'s mental health program. He integrated traditional African healing practices with modern psychiatry, developing the "Aro Village System" which treated mental illness within community settings rather than isolated institutions. His innovative approach influenced global mental health policy and demonstrated how indigenous knowledge could enhance modern medical practice.',
  email: "t.lambo@who.test",
  phone: null,
  picture:
    "https://upload.wikimedia.org/wikipedia/commons/9/91/Professor_Thomas_Lambo%2C_Psychiatrist_and_Deputy_Director-General_of_the_World_Health_Organisation_%28WHO%29_on_the_28th_of_November%2C_1997.jpg",
  tags: ["Psychiatry", "Mental-Health", "Nigerian", "WHO", "Community-Care"],
  groupMemberships: ["african-scientists", "medical-researchers", "who-mental-health"],
  reference: "https://www.who.int/news-room/feature-stories/detail/thomas-adeoye-lambo",
} satisfies Person;

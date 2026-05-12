import type { Person } from '@mosaic-code/test-data-factory';

export default {
  id: "wangari-maathai-scientist",
  fullName: "Wangari Muta Maathai",
  dateOfBirth: new Date("1940-04-01T00:00:00.000Z"),
  pronouns: "she/her",
  bio: "Wangari Maathai was a Kenyan environmental scientist who founded the Green Belt Movement, combining environmental conservation with community empowerment and women's rights. With a Ph.D. from the University of Nairobi, where she also taught veterinary anatomy, she understood that deforestation and environmental degradation were interconnected with poverty and social injustice. Her scientific approach to reforestation, focusing on indigenous tree species and community-based conservation, earned her the Nobel Peace Prize in 2004 and established her as a pioneer in sustainable development.",
  email: "w.maathai@greenbelt.test",
  phone: null,
  picture: "https://upload.wikimedia.org/wikipedia/commons/d/da/Wangari_Maathai_in_2001.jpg",
  tags: [
    "Environmental-Science",
    "Forestry",
    "Kenyan",
    "Nobel-Prize",
    "Sustainability",
  ],
  groupMemberships: [
    "african-scientists",
    "environmental-researchers",
    "green-belt-movement",
  ],
  reference: "https://www.nobelprize.org/prizes/peace/2004/maathai/biographical/",
  quote: "In the course of history, there comes a time when humanity is called to shift to a new level of consciousness, to reach a higher moral ground. A time when we have to shed our fear and give hope to each other. That time is now.",
  quoteReference: "https://www.nobelprize.org/prizes/peace/2004/maathai/lecture/",
} satisfies Person;

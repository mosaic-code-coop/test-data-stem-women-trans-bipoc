import type { Person } from '@mosaic-code/test-data-factory';

export default {
  id: "francisca-okeke",
  fullName: "Francisca Nneka Okeke",
  dateOfBirth: new Date("1956-09-09T00:00:00.000Z"),
  pronouns: "she/her",
  bio: "Francisca Nneka Okeke is a Nigerian physicist whose research on the equatorial electrojet — the eastward current flowing in the ionosphere above the magnetic equator — has informed understanding of geomagnetic variations and their effects on communications and power grids. Based at the University of Nigeria, Nsukka, she became the first woman to chair its department of physics. In 2013 she received the L'Oréal-UNESCO For Women in Science Award for Africa and the Arab States, recognising her contributions to atmospheric physics and her role in mentoring women into research careers. Her work continues alongside advocacy for stronger science education across West Africa.",
  email: "f.okeke@unn-physics.test",
  phone: null,
  picture: null,
  tags: [
    "Physics",
    "Atmospheric-Physics",
    "Nigerian",
    "Geophysics",
    "Ionosphere",
  ],
  groupMemberships: [
    "african-scientists",
    "physics-research",
  ],
  reference: "https://en.wikipedia.org/wiki/Francisca_Okeke",
} satisfies Person;

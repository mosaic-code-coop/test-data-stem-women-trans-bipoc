import type { Person } from '@mosaic-code/test-data-factory';

export default {
  id: "sau-lan-wu",
  fullName: "吳秀蘭",
  dateOfBirth: new Date("1940-05-30T00:00:00.000Z"),
  pronouns: "she/her",
  preferredName: "Wú Sàulán",
  givenName: "秀蘭",
  surname: "吳",
  englishName: "Sau Lan Wu",
  bio: "Sau Lan Wu's experimental work at CERN contributed to the discovery of the gluon and later the Higgs boson, fundamental particles that help explain the structure of matter. Her research on particle collisions and detector development has been crucial to advancing our understanding of the Standard Model of particle physics. Her work demonstrates the importance of experimental precision in testing theoretical predictions about the fundamental nature of the universe.",
  email: "sau-lan.wu@cern.test",
  phone: "+41-555-767-4101",
  picture: null,
  tags: [
    "Physics",
    "Particle-Physics",
    "CERN",
    "Asian-American",
    "Experimental-Physics",
  ],
  groupMemberships: [
    "cern-physics",
    "particle-detection",
  ],
} satisfies Person;

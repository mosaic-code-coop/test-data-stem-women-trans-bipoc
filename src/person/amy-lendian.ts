import type { Person } from '@mosaic-code/test-data-factory';

export default {
  id: "amy-lendian",
  fullName: "Amy Lendian",
  pronouns: "she/her",
  bio: "Brought out of retirement to support the Artemis II flight in April 2026, Amy Lendian served as acting systems engineering supervisor in NASA's launch control firing room at Kennedy Space Center, leading a team of four engineers responsible for monitoring water, electrical, and fire-suppression subsystems during the countdown to the first crewed flight of the Space Launch System and Orion spacecraft. Her decades of NASA launch experience placed her at the console for one of the most consequential moments of the Artemis programme. Her continued contribution illustrates the depth of institutional knowledge that veteran women engineers bring to active human spaceflight programmes.",
  email: "amy.lendian@nasa.test",
  phone: "+1-555-867-0000",
  picture: "https://www.nasa.gov/wp-content/uploads/2023/07/amylendian_ksc-20230530-ph-kls01_0018.jpg",
  tags: [
    "Systems-Engineering",
    "NASA",
    "Artemis",
    "Space-Exploration",
    "Leadership",
  ],
  groupMemberships: [
    "kennedy-space-center",
    "exploration-ground-systems",
    "artemis-program",
  ],
  reference: "https://www.nasa.gov/image-article/systems-engineering-supervisor-amy-lendian/",
} satisfies Person;

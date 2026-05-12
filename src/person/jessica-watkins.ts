import type { Person } from '@mosaic-code/test-data-factory';

export default {
  id: "jessica-watkins",
  fullName: "Jessica Andrea Watkins",
  dateOfBirth: new Date("1988-05-14T00:00:00.000Z"),
  pronouns: "she/her",
  bio: "In April 2022, Jessica Watkins became the first Black woman to serve on a long-duration mission aboard the International Space Station, spending 170 days in orbit as a mission specialist on NASA's SpaceX Crew-4 flight. A planetary geologist with a PhD from UCLA, she served on the science team operating the Curiosity rover on Mars and was a postdoctoral fellow at Caltech before her selection as an astronaut in 2017. She is part of the active astronaut corps eligible for future Artemis lunar missions, and her record-setting ISS tour expanded the catalogue of Black women in long-duration spaceflight.",
  email: "jessica.watkins@nasa.test",
  phone: "+1-555-483-0000",
  picture: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Jessica_Watkins_Astronaut_portrait_%28cropped%29.jpg",
  tags: [
    "Geology",
    "Planetary-Science",
    "NASA",
    "African-American",
    "Space-Exploration",
  ],
  groupMemberships: [
    "nasa-engineering",
    "johnson-space-center",
    "african-american-scientists",
  ],
  reference: "https://www.nasa.gov/people/jessica-watkins/",
} satisfies Person;

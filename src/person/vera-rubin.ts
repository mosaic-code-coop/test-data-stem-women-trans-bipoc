import type { Person } from '@mosaic-code/test-data-factory';

export default {
  id: "vera-rubin",
  fullName: "Vera Rubin",
  dateOfBirth: new Date("1928-07-23T00:00:00.000Z"),
  pronouns: "she/her",
  bio: "Vera Rubin's meticulous measurements of how stars orbit the centers of galaxies revealed that visible matter alone cannot account for the observed gravitational effects, providing the first compelling evidence for the existence of dark matter. Her observations of galaxy rotation curves fundamentally changed cosmology and our understanding of the universe's composition. Her work demonstrated the importance of careful observational astronomy in advancing theoretical understanding.",
  email: "vera.rubin@carnegie-science.test",
  phone: "+1-555-686-4370",
  picture: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Vera_Rubin_measuring_spectra_%28cropped%29.jpg",
  tags: [
    "Astronomy",
    "Dark-Matter",
    "Galaxy-Rotation",
    "Observational-Astronomy",
    "American",
  ],
  groupMemberships: [
    "carnegie-observatories",
    "dark-matter-research",
  ],
  quote: "There is no problem in science that can be solved by a man that cannot be solved by a woman.",
  quoteReference: "https://carnegiescience.edu/news/10-inspiring-quotes-astronomer-vera-rubin",
} satisfies Person;

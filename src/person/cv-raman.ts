import type { Person } from '@mosaic-code/test-data-factory';

export default {
  id: "cv-raman",
  fullName: "चन्द्रशेखर वेंकट रामन्",
  dateOfBirth: new Date("1888-11-07T00:00:00.000Z"),
  pronouns: "he/him",
  preferredName: "C. V. Raman",
  givenName: "चन्द्रशेखर",
  surname: "रामन्",
  englishName: "Chandrasekhara Venkata Raman",
  bio: "C. V. Raman discovered the phenomenon of inelastic scattering of light, known as the Raman effect, which earned him the Nobel Prize in Physics in 1930. Working with limited equipment at the Indian Association for the Cultivation of Science, he demonstrated that when light passes through a transparent material, some of the scattered light changes wavelength. This groundbreaking discovery revolutionized the study of molecular and crystal structure and established India as a significant contributor to modern physics.",
  email: "cv.raman@iisc.test",
  phone: null,
  picture: null,
  tags: [
    "Physics",
    "Optics",
    "Indian",
    "Nobel-Prize",
    "Spectroscopy",
  ],
  groupMemberships: [
    "indian-scientists",
    "nobel-laureates",
    "physics-research",
  ],
  reference: "https://www.nobelprize.org/prizes/physics/1930/raman/biographical/",
  quote: "The essence of science is independent thinking, hard work, and not equipment.",
  quoteReference: "https://www.brainyquote.com/authors/c-v-raman-quotes",
} satisfies Person;

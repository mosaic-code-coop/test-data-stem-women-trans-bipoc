import type { Person } from '@mosaic-code/test-data-factory';

export default {
  id: "a-p-j-abdul-kalam",
  fullName: "अब्दुल कलाम",
  dateOfBirth: new Date("1931-10-15T00:00:00.000Z"),
  pronouns: "he/him",
  preferredName: "A. P. J. Abdul Kalam",
  givenName: "अब्दुल",
  surname: "कलाम",
  englishName: "A. P. J. Abdul Kalam",
  bio: "A. P. J. Abdul Kalam, known as the \"Missile Man of India,\" played a pivotal role in developing India's ballistic missile and nuclear weapons programs. As a scientist and engineer, he planned the Integrated Guided Missile Development Programme, which produced the Agni and Prithvi missiles, and served as one of the chief coordinators of the Pokhran-II nuclear tests in 1998. Later serving as the 11th President of India, Kalam inspired millions of young people to pursue science and technology, earning the title \"People's President\" for his dedication to education and youth empowerment.",
  email: "apj.kalam@drdo.test",
  phone: null,
  picture: null,
  tags: [
    "Aerospace-Engineering",
    "Missiles",
    "Indian",
    "President",
    "Nuclear-Technology",
  ],
  groupMemberships: [
    "indian-scientists",
    "aerospace-research",
    "drdo",
  ],
  reference: "https://www.britannica.com/biography/A-P-J-Abdul-Kalam",
  quote: "I wonder why some people tend to see science as something which takes man away from God. As I look at it, the path of science can always wind through the heart.",
  quoteReference: "https://www.goodreads.com/work/quotes/620871-wings-of-fire-an-autobiography",
} satisfies Person;

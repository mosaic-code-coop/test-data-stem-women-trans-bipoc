import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "chien-shiung-wu",
  fullName: "吳健雄",
  dateOfBirth: new Date("1912-05-31T00:00:00.000Z"),
  pronouns: "she/her",
  preferredName: "Wú Jiànxióng",
  givenName: "健雄",
  surname: "吳",
  englishName: "Chien-Shiung Wu",
  bio: 'The Wu experiment, conducted in 1956, disproved the law of conservation of parity and revolutionized our understanding of particle physics. Chien-Shiung Wu\'s meticulous experimental work at Columbia University demonstrated that the weak nuclear force violates parity symmetry, a discovery that earned her colleagues the 1957 Nobel Prize in Physics. Despite facing discrimination as both a woman and an immigrant from China, she became known as the "First Lady of Physics" for her exceptional experimental skills and contributions to nuclear physics.',
  email: "chien-shiung.wu@columbia.test",
  phone: "+1-555-854-1754",
  picture: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Chien-shiung_Wu_%281912-1997%29_C.jpg",
  tags: ["Physics", "Nuclear-Physics", "Experimental-Physics", "Asian-American", "Nobel-Prize"],
  groupMemberships: ["columbia-physics", "experimental-physicists"],
  reference: "https://www.britannica.com/biography/Chien-Shiung-Wu",
  quote:
    "it is shameful that there are so few women in science… In China there are many, many women in physics. There is a misconception in America that women scientists are all dowdy spinsters. This is the fault of men. In Chinese society, a woman is valued for what she is, and men encourage her to accomplishments yet she remains eternally feminine.",
  quoteReference: "https://todayinsci.com/W/Wu_ChienShiung/WuChienShiung-Quotations.htm",
} satisfies Person;

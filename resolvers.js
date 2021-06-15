import { randomBytes } from "crypto";

const poems = [];

class Poem {
  constructor(id, { title, description, author }) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.author = author;
  }
}

export const resolvers = {
  getPoems:()=> {
    return poems;
  },

  createPoem :({ input })=> {
    const id = randomBytes(10).toString("hex");
    const poem = new Poem(id, input);
    poems.push(poem);
    return poem;
  },
};

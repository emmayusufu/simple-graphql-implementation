import {buildSchema} from "graphql"

export const schema = buildSchema(`

  type Query {
    getPoems:[Poem]
  }

  type Author {
      userName: String!
      email: String!
      address: String!
  }

  type Poem {
      id: ID
      title: String!
      description: String!
      author: Author!
  }
  
  input AuthorInput {
    userName: String!
    email: String!
    address: String!
  }

  input PoemInput {
    id: ID
    title: String!
    description: String!
    author: AuthorInput!
}

type Mutation {
    createPoem(input: PoemInput): Poem
}

`);
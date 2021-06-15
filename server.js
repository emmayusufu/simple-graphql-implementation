import http from "http";

import express from "express";
import { graphqlHTTP } from "express-graphql";
import morgan from "morgan";

import { schema } from "./schema.js";
import { resolvers as root } from "./resolvers.js";

const app = express();
const server = http.createServer(app);

app.use(morgan("dev"));

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

const PORT = 4000;

server.listen(PORT, () =>
  console.log(`server is running http://localhost:${PORT}`)
);


// {
//     getPoems {
//       id
//       title
//       description
//     }
//   }
  
//   mutation {
//     createPoem(input:{title:"poem 2",description:"poem 2 description", author:{userName:"emma",email:"test#test.com",address:"germany"}}){
//       id,
//       description,
//       author{
//       userName
//     }
//     }
//   }
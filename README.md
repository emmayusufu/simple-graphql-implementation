# Title
> SImple Graphql implementation.

# Description
- This project shows you how to implement graphql in nodejs.
- Morgan package is used for logging the http requests from the client


# How to run
1. Open up your terminal an navigate into this file directory.
2. Then run ***npm install*** to install the necessary **npm** packages.
3. Then finally run ***npm run dev*** to start the development server.
4. To test graphql, open in your browser **http://localhost:4000/graphql**
5. You can then run the mutation and query below to check it out

### Query
 {
     getPoems {
       id
       title
      description
     }
  }
  
### Mutation  
   mutation {
     createPoem(input:{title:"poem 2",description:"poem 2 description", author:{userName:"emma",email:"test#test.com",address:"germany"}}){
       id,
       description,
       author{
       userName
     }
     }
   }
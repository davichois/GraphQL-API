//Query: Vendrian a hacer los metodos que devuelven datos.
//Mutation: Vendria a hacer los metodos que manipulan o agregan datos.

export const typeDefs = `
    
    type Query{
        getUser(id: ID!): User
        
        getUsers: [User]!
    }

    type Mutation{
        createUser(
            nickname: String!, 
            fullname: String!, 
            phone: String, 
            city: String): User!

        updateUser(
            id:ID!  
            nickname: String!, 
            fullname: String!, 
            phone: String, 
            city: String): User

        deleteUser(id:ID!): User
    }

    type User{
        _id: ID!
        nickname: String!
        fullname: String!
        phone: String
        city: String
    }


`;

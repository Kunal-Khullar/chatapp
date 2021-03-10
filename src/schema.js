const graphql = require("graphql");
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema
} = graphql;

const UserType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        city: { type: GraphQLString },
        state: { type: GraphQLString },
        password: { type: GraphQLString }
    })
});

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        AddUser: {
            type: UserType,
            args: {
                name: { type: GraphQLString },
                email: { type: GraphQLString },
                password: { type: GraphQLString },
            }
        }
    }
});

const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        Users: {
            type: UserType,
            args: {
                name: { type: GraphQLString },
                email: { type: GraphQLString },
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})
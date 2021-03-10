import {ApolloClient,InMemoryCache} from "@apollo/client";
import {gql} from "@apollo/client";

const client = new ApolloClient({
    uri:"",
    cache:new InMemoryCache()
})

client.query({
    query:gql
    `
    `
}).then(result=>{console.log(result)});

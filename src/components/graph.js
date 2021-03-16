import { ApolloClient, InMemoryCache } from "@apollo/client";
import { gql } from "@apollo/client";
import {createHttpLink,ApolloLink,concat} from '@apollo/client'



const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'http://duolouge-backend.herokuapp.com/graphql/',
  credentials: 'include',
  headers:{
    "Access-Control-Allow-Credentials" : true,
    "Access-Control-Allow-Headers" : "Content-Type",
            "Access-Control-Allow-Origin": "https://localhost:3000",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
  },
  fetchOptions:{
    mode:'no-cors',
  },
  
});
const Create_User = gql`
  mutation Register($email: String!, $pass: String!, $username: String!) {
    createUser(email: $email, password: $pass, username: $username) {
      __typename
    }
  }
`;
export { client, Create_User };

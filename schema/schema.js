const { gql } = require('apollo-server');

const typeDefs = gql`
 type Task {
    id: Int!
    title: String!
    parent: Int!
    task: Task
  }
  
  type Query {
    tasks: [Task!]!
    task (id:Int!): Task
  }

  type Mutation {
    createTask(id: Int!, title: String!, parent: Int!): Task!
  }
`;

export default typeDefs;
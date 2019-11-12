const graphql = require('graphql');
const _ = require('lodash');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
} = graphql;

// test data
const books = [
  { name: 'Name1', genre: 'Genre1', id: '1' },
  { name: 'Name2', genre: 'Genre2', id: '2' },
  { name: 'Name3', genre: 'Genre3', id: '3' },
];

const authors = [
  { name: 'Author1', age: 45, id: '1' },
  { name: 'Author2', age: 46, id: '2' },
  { name: 'Author3', age: 47, id: '3' }
];

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString }
  })
});

const AuthorType = new GraphQLObjectType({
  name: "Author",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // db query
        return _.find(books, { id: args.id });
      }
    },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // db query
        return _.find(authors, { id: args.id });
      }
    }
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
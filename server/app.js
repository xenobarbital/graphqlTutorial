const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

mongoose.connect(
  "mongodb+srv://xenobarbital:baberbekule@cluster0-1id95.mongodb.net/test?retryWrites=true&w=majority"
);
mongoose.connection.once('open', () => {
  console.log('Connected to DB');
})

const app = express();

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

app.listen(4000, () => console.log('Listening to port 4000'));
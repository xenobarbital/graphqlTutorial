const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// allow cross origin request
app.use(cors());

mongoose.connect(
  "mongodb+srv://xenobarbital:baberbekule@cluster0-1id95.mongodb.net/test?retryWrites=true&w=majority"
);
mongoose.connection.once('open', () => {
  console.log('Connected to DB');
})

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

app.listen(4000, () => console.log('Listening to port 4000'));
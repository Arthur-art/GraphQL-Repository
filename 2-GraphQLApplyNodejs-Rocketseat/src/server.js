const {GraphQLServer} = require("graphql-yoga");
const path =  require("path");
const resolvers = require("./resolvers");
const mongoose = require("mongoose");
const User = require("./User");

mongoose.connect("mongodb://localhost:27017/graphqlrocketseat", {
    maxPoolSize: 50,
    wtimeoutMS: 2500,
    useNewUrlParser: true
});

const server = new GraphQLServer({
 typeDefs: path.resolve(__dirname, "schema.graphql"),
 resolvers
});

server.start();
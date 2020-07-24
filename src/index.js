import "@babel/polyfill";
import { config } from "../config";
import { GraphQLServer } from "graphql-yoga";

import db from "./database";
db(config.configDB.MongoUrl);

import { typeDefs } from "./typesDefs";
import { resolvers } from "./resolvers";

const server = new GraphQLServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
});

server.start({ port: config.configDB.port }, ({ port }) => {
  console.log(`Estoy en: http://localhost:${port}`);
});

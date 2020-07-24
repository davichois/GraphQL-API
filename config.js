import dotenv from "dotenv";
dotenv.config();

export const config = {
  configDB: {
    port: process.env.PORT || 4000,
    MongoUrl: process.env.MONGO_URL || "mongodb://localhost/graphQL-API",
  },
};

import mongoose from "mongoose";

const connection = mongoose.connection;

async function db(URI) {
  await mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });
}

connection.once("open", () => {
  console.log(`[DB CONECTADA]`);
});

connection.on("error", (err) => {
  console.log(`[ERROR DB ${err}]`);
});

export default db;

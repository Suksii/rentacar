const express = require('express');
const mongoose = require('mongoose');
const app = express();
const dotenv = require('dotenv');

dotenv.config();

app.get('/', (req, res) => {
  res.send('Hello world!');
});

async function main() {
  await mongoose.connect(process.env.MONGO_URI);
}
main().then(() => console.log("MongoDB connected")).catch(err => console.log(err));

app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`);
});

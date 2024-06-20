const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const bycrypt = require('bcryptjs');
const app = express();

dotenv.config();

app.use(express.json());
app.use(cors());

const userRoute = require('./src/routes/UserRoute');
const carRoute = require('./src/routes/CarRoute');
const reservationRoute = require('./src/routes/ReservationRoute');

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api/users', userRoute);
app.use('/api/cars', carRoute);
app.use('/api/reservations', reservationRoute);

async function main() {
  await mongoose.connect(process.env.MONGO_URI);
}
main().then(() => console.log("MongoDB connected")).catch(err => console.log(err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});

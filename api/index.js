const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const app = express();

dotenv.config();

app.use(express.json());
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}));
app.use(cookieParser());
app.use('/uploads', express.static(__dirname + '/uploads'));

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

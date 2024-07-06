const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true},
    phoneNumber: { type: Number, required: true },
    passportNumber: { type: String, required: true },
    country: { type: String, required: true },
    password: { type: String, required: true},
    admin: { type: Boolean, default: false }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
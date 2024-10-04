const mongoose = require('mongoose');
const { Schema } = mongoose;

const teacherSchema = new Schema({
    fullname: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    image: { type: String }
});

module.exports = mongoose.model('Teacher', teacherSchema);

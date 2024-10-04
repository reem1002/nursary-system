const mongoose = require('mongoose');
const { Schema } = mongoose;

const classSchema = new Schema({
    name: { type: String, required: true },
    supervisor: { type: mongoose.Schema.Types.ObjectId, ref: 'Teacher', required: true },
    children: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Child' }]
});

module.exports = mongoose.model('Class', classSchema);

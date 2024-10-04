require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 50000
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('DB Connection Error:', error.message);
});

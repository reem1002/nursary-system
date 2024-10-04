require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');

const teacherRoutes = require('./routes/teacherRoutes');
const childRoutes = require('./routes/childRoutes');
const classRoutes = require('./routes/classRoutes');

const app = express();

// Middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

// Routes
app.use('/api', teacherRoutes);
app.use('/api', childRoutes);
app.use('/api', classRoutes);

// 404 Not Found Middleware
app.use((req, res, next) => {
    res.status(404).json({ message: 'Path not found' });
});

// Error Handling Middleware
app.use((err, req, res, next) => {
    res.status(500).json({ message: 'Something went wrong', error: err.message });
});

// Database Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.log('DB Connection Error:', error));

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

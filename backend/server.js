const express = require('express');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/error.middleware');
const connectDB = require('./config/db');

// Connect to database
connectDB();

const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.json({ message: 'Welcome' });
});

// Routes
app.use('/api/users', require('./routes/user.route'));

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

const express = require('express');
const cors = require('cors');
const app = express();

const authRoutes = require('./routes/authRoutes');
const bugRoutes = require('./routes/bugRoutes');
const userRoutes = require('./routes/userRoutes');


app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/bugs', bugRoutes);
app.use('/api/users', userRoutes);


app.listen(5000, () => console.log('🚀 Server running on http://localhost:5000'));

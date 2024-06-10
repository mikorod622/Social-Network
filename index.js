const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const thoughtRoutes = require('./routes/thoughtRoutes');

const app = express();

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/social-media', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use('/api/users', userRoutes);
app.use('/api/thoughts', thoughtRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

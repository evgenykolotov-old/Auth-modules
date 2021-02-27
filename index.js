const express = require('express');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000;

const authRoutes = require('./routes/auth.routes');

const application = express();

application.use(express.json());
application.use('/auth', authRoutes);

const startServer = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/auth', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    application.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

startServer();

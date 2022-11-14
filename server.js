const express = require('express');
require('dotenv').config();
const path = require('path');

// Security
const cors = require('cors');
const xss = require('xss-clean');
const helmet = require('helmet');

const connectDb = require('./db/connect');

const app = express();

const sendEmail = require('./controllers/sendEmail');

// routes
const authRouter = require('./routes/authRoute');

// middleware
app.use(express.json());

app.use(cors());
app.use(xss());
app.use(helmet());

app.use('/api/v1/auth', authRouter);

app.get('/', (req, res) => {
  res.send('My first heroku app');
});

app.get('/send', sendEmail);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;
const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI);
    app.listen(port, () => {
      const url = `localhost:${port}`;
      console.log(`Server is listening on ${url}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();

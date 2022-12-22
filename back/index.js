const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/index');
const hpp = require('hpp');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(hpp());
app.use(helmet());

app.use(
  cors({
    origin: true,
    credentials: true,
  }),
);

app.use(morgan('dev'));
app.use(express.json());

const { MONGO_URI, PORT } = config;

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('mongodb connecting success');
  })
  .catch((e) => {
    console.log(e);
  });

app.use('/api/about', require('./api/about'));
app.use('/api/career', require('./api/career'));
app.use('/api/project', require('./api/project'));
app.use('/api/skill', require('./api/skill'));

app.listen(PORT, () => {
  console.log(`Server started on ${PORT} port`);
});

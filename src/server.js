// require('dotenv').config();

const express = require('express');
const logger = require('morgan');
const app = express();
const cors = require('cors');

// const axios = require('axios');
const helmet = require('helmet');
const routes = express.Router();

app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(routes);

routes.get('/api', (req, res) => {
  res.send({
    services: [
      'User experience design',
      'Visual Design',
      'Prototyping',
      'Constant design',
      'Design Systems',
      'Voice, Chatbots & Multimodal UI',
    ],
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  });
});

routes.get('/followers', (req, res) => {
  res.send({
    followers: [
      {
        totalFollow: 1987,
        followToday: 12,
      },
      {
        totalFollow: 1044,
        followToday: 99,
      },
      {
        totalFollow: 11.0,
        followToday: 1099,
      },
      {
        totalFollow: 8239,
        followToday: 144,
      },
    ],
    overview: [
      {
        name: 'Page Views',
        overviewNumber: 87,
      },
      {
        name: 'Likes',
        overviewNumber: 52,
      },
      {
        name: 'Likes',
        overviewNumber: 5462,
      },
      {
        name: 'Profile Views',
        overviewNumber: 52.0,
      },
      {
        name: 'Retweets',
        overviewNumber: 117,
      },
      {
        name: 'Likes',
        overviewNumber: 507,
      },
      {
        name: 'Likes',
        overviewNumber: 107,
      },
      {
        name: 'Total Views',
        overviewNumber: 1407,
      },
    ],
  });
});

const port = process.env.PORT || 4000;

app.listen(port, console.log('APP says: Server started! Using Port: ' + port));

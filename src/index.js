require('dotenv').config();

const express = require('express');
const logger = require('morgan');
const app = express();

const axios = require('axios');
const helmet = require('helmet');
const routes = express.Router();

app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(helmet());
app.use(routes);

routes.get('/', (req, res) => {
  res.status(200).json({
    data: {
      services: [
        'User experience design',
        'Visual Design',
        'Prototyping',
        'Constant design',
        'Design Systems',
        'Voice, Chatbots & Multimodal UI',
      ],
    },
  });
});

const port = process.env.PORT || 4000;

app.listen(port, console.log('APP says: Server started! Using Port: ' + port));

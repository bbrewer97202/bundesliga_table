'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const compression = require('compression');
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');
const app = express();
const router = express.Router();

const update = require('./update.js');

router.use(helmet());
router.use(compression());
router.use(cors());
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(awsServerlessExpressMiddleware.eventContext());

router.post('/update', async (req, res) => {
  const success = await update(req.body);
  res.json({ success });
});

app.use('/', router);

module.exports = app;

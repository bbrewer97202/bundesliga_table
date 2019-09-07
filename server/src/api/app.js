'use strict';
import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import cors from 'cors';
// import compression from 'compression';
// import awsServerlessExpressMiddleware from 'aws-serverless-express/middleware';
import table from './table.js';
import team from './team.js';
import matches from './matches.js';
import { getStandings } from '../scheduled/index.js';

const app = express();
const router = express.Router();

router.use(helmet());
// router.use(compression());
router.use(cors());
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
// router.use(awsServerlessExpressMiddleware.eventContext());

router.get('/table', async (req, res) => {
  const result = await table();
  if (!result) return res.sendStatus(400);
  res.json(result);
});

router.get('/matches', async (req, res) => {
  const result = await matches();
  if (!result) return res.sendStatus(400);
  res.json(result);
});

router.get('/team/:id', async (req, res) => {
  const teamId = req.params.id;
  if (!teamId) return res.sendStatus(400);
  const result = await team(teamId);
  if (!result) return res.sendStatus(400);
  res.json(result);
});

// router.get('/test', async (req, res) => {
//   await getStandings();
//   res.json({ ok: true });
// });

app.use('/', router);

export default app;

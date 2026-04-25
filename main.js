import express from 'express';
import cors from 'cors';
import * as prompts from './prompts/index.js';
import { generate } from './gemini.js';
import dotenv from 'dotenv'
import { findInterests, handle } from './methods.api.js';

dotenv.config();
const PORT = process.env.PORT;


const app = express();
app.use(cors());
app.use(express.json());

app.post('/city/:city', async (req, res) => {
  await handle(req, res, async () => {
    return await generate(prompts.whatAbout(req.params.city, req.body.interests));
  });
});

app.post('/cities', async (req, res) => {
  await handle(req, res, async () => {
    return await generate(prompts.whatAboutAll(req.body.cities, req.body.interests));
  });
});

app.post('/interests', async (req, res) => {
  await findInterests(req, res, async () => {
    return await generate(prompts.whatAboutInterests(req.body.interests));
  });
});

app.listen(PORT, () => console.log(`API listening to http://localhost:${PORT}`));

import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import * as prompts from './prompts/index.js';
import { generate } from './gemini.js';
import { UserInterests } from './db-instance.js';
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from 'dotenv'

dotenv.config();
const PORT = process.env.PORT || 3000;


const app = express();
app.use(cors());
app.use(express.json());

app.post('/city/:city', async (req, res) => {
  let city = req.params.city;
  let addinterests = req.body.interests;
  let sessionId = process.env.SESSION_ID;
  let ip = process.env.IP;
  console.log(`Received request for city: ${city} with additional interests: ${addinterests}`);
  res.status(200).send(await generate(prompts.whatAbout(city, addinterests)));
});

app.post('/query', async (req, res) => {
  let cities = req.body.cities;
  let addinterests = req.body.interests;
  let sessionId = process.env.SESSION_ID;
  let ip = process.env.IP;
  try {
    await UserInterests.create({ uniqueId: sessionId, ip: ip, interests: addinterests });
  } catch (error) {
    console.error('Error saving interests to database:', error);
    res.status(500).send('Error saving interests to database');
    return;
  }
  console.log(`Received request for cities: ${cities} with additional interests: ${addinterests}`);
  res.status(200).send(await generate(prompts.whatAboutAll(cities, addinterests)));
});

app.listen(PORT, () => console.log(`API listening to http://localhost:${PORT}`));

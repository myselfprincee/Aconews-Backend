import express, { Router } from "express"
import apiRoutes from './routes/apiRoutes.js'
import cors from 'cors';
import dotenv from 'dotenv';
export const app = express()
const router = Router()
const port = 3000
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors());

dotenv.config({
  path: "./.env"
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api', apiRoutes);

console.log(`https://gnews.io/api/v4/top-headlines?category=${'general'}&lang=${'en'}&apikey=${process.env.GNEWS_API_KEY}`);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
import express, { Application, Request, Response } from 'express';
import authRouter from './routers/auth.router';
import cors from 'cors'
import bodyParser from 'body-parser';
import {authenticate, authorize} from './middleware/auth.middleware';

const app: Application = express();
const port: number = 3000;

app.use(cors())
app.use(bodyParser.json())
app.use(authRouter)

app.get('/', (req, res) => {
    res.send("hello world")
})

app.get('/restricted', [authenticate, authorize], (req: Request, res: Response) => {
  res.send("heeelelllooo")
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

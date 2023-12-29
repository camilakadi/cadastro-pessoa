import express from 'express';
import bodyParser from 'body-parser';
import registrationRoutes from './routes/registration.js';
import cors from 'cors';

const app = express();
app.use(cors());

const port = 3000;

app.use(bodyParser.json());
app.use(registrationRoutes);

app.listen(port, () => {
  console.log(`Server started on: http://localhost:${port}`);
});

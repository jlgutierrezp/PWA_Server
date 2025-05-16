import express from 'express';
import cors from 'cors';
import routes from './routes/index.js';
import 'dotenv/config';
import connectDB from './database.js';


const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

connectDB();

app.get('/', (req, res) => {
    res.send("Hello World!!!");
});

app.use('/api', routes);

app.listen(PORT, () =>{
    console.log('server is running on http://localhost:${PORT}');
});
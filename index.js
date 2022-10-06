import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import ActivityRoute from './routes/ActivityRoute.js'
import toDoItemRoute from './routes/toDoItemRoute.js'
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    res.send('API Running ...')
  })
app.use(ActivityRoute, toDoItemRoute)

app.listen(process.env.APP_PORT, ()=>{
    console.log('Server up and running...');
});
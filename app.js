const express = require("express")
const cors = require( "cors")
const ActivityRoute = require( './routes/ActivityRoute.js')
const ToDoItemRoute = require( './routes/ToDoItemRoute.js')

const app = express();

app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    res.send('API Running ...')
  })
app.use(ActivityRoute,ToDoItemRoute)

app.listen('3030', ()=>{
    console.log('Server up and running...');
});
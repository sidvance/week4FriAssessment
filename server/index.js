const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, submitComp, getInsult, submitInsult, deleteInsult } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get('/api/fortune', getFortune);
app.get('/api/insult', getInsult);
app.post('/api/compliment', submitComp);
app.post('/api/insult', submitInsult);
app.delete('/api/insult', deleteInsult)

app.listen(4000, () => console.log("Server running on 4000"));

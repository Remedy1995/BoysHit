require('dotenv').config();
const express=require('express');
const currentDate=require('./date');
const app=express();
const bodyparser=require('body-parser');
const cors =require('cors');
const rateLimit = require("express-rate-limit");
const LeagueTable=require('./routes/leaguetable');
const Matches=require('./routes/matches');
app.use(bodyparser.json())
app.use(cors());

app.use('/leaguetable',LeagueTable);
app.use('/matches',Matches)
app.use(
  rateLimit({
    windowMs: 12 * 60 *1200, // 12 hour duration in milliseconds
    max: 1500,
    message: "You exceeded 100 requests in 12 hour limit!",
    headers: true,
    RetryAfter: 3600
  })
);
const port = process.env.PORT || 5000;
const axios = require("axios").default;






var options = {
  method: 'GET',
  url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures',
  params: {live: 'all'},
  headers: {
    'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
    'x-rapidapi-key': process.env.APPLICATION_KEY
  }
};



app.get('/result',async(req, res)=> {
   await axios.request(options).then(function (response) {
    res.json(response.data)
  }).catch(function (error) {
    console.error(error.message);
  });

// const mes={
// home_team:"hello world"
// }

// res.json(mes)
  })

  
app.listen(port,()=>{
    console.log("server successfully running on port ",port)
})

console.log("today's date is",currentDate())
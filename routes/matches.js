const express=require('express');
const router=express.Router();
const axios = require("axios").default;
const currentDate=require('../date');

const options = {
  method: 'GET',
  url: 'https://livescore-football.p.rapidapi.com/soccer/matches-by-date',
  params: {date: currentDate(), timezone_utc: '0:00', country_code: 'england'},
  headers: {
    'x-rapidapi-host': 'livescore-football.p.rapidapi.com',
    'x-rapidapi-key': process.env.APPLICATION_KEY
  }
};



router.get('/matches',(req,res)=>{
 
    axios.request(options).then(function (response) {
        res.json(response.data);
    }).catch(function (error) {
        console.error(error);
    });
    

})

module.exports=router;
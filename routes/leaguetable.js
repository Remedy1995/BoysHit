require('dotenv').config();
const express=require('express');
const router=express.Router();
const axios = require("axios").default;



router.get('/leaguetable',(req,res)=>{

  var options = {
    method: 'GET',
    url: 'https://livescore-football.p.rapidapi.com/soccer/league-table',
    params: {country_code: 'england', league_code: 'premier-league'},
    headers: {
      'x-rapidapi-host': 'livescore-football.p.rapidapi.com',
      'x-rapidapi-key': process.env.APPLICATION_KEY
    }
  };
  
  axios.request(options).then(function (response) {
    res.json(response.data);
  }).catch(function (error) {
    console.error(error);
  });
  

})




module.exports=router;
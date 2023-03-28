const express = require("express");
const ImdbController = express.Router();

ImdbController.get("/get-all-videos", async (req, res, next) => {
  const url =
    "https://imdb8.p.rapidapi.com/actors/get-all-videos?nconst=nm0001667&region=US";

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "d82c0dddc0msh542b45b3747e37ap1032a6jsn5f7eb45c36de",
      "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
    }, 
  };

  let data = fetch(url,options)
    .then((res) => {
      console.log(res);
      res.json();
    })
    .then((json) => res.status(200).send(json))
    .catch((err) => res.status(200).send(err));
});
module.exports = ImdbController;

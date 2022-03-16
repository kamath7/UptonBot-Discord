const axios = require("axios");

const myMemeFunc = async () => {
  const data = await axios.get("https://memeapi.pythonanywhere.com/memes/1");
  const title = await data.data.memes[0].title;
  const url = await data.data.memes[0].url;

  return { title, url };
};
module.exports = myMemeFunc
/* Example in Node.js */
//require("dotenv").config();
const Express = require("express");
const axios = require("axios");
const router = Express.Router();
const apiUrl = process.env.APIURL;

//const getListings = await (req, res) => {
async function getListings(req, res) {
  new Promise(async (resolve, reject) => {
    try {
      response = await axios.get(
        "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
        {
          headers: {
            "X-CMC_PRO_API_KEY": process.env.TOKENSECRET,
          },
        }
      );
    } catch (ex) {
      response = null;
      // error
      console.log(ex);
      reject(ex);
    }
    if (response) {
      // success
      const json = response.data;
      console.log(json);
      resolve(json);
      return res.send(json);
    }
  });
}

router.get("/list", getListings);
module.exports = router;

const fetch = require("node-fetch");

async function fetchCoins() {
    const response = await fetch('https://api.coincap.io/v2/rates');
    const obj = await response.json();
    console.log(obj);
}

fetchCoins();
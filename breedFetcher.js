const request = require("request");
const input = process.argv.slice(2);

request(
  `https://api.thecatapi.com/v1/breeds/search?q=${input}`,
  (error, response, body) => {
    if (error) {
      console.log(`error is `, error);
    } else {
      const data = JSON.parse(body);
      if (data[0] === undefined) {
        console.log(`breed doesnt exist`);
      } else {
        console.log(data[0].description);
      }
    }
  }
);

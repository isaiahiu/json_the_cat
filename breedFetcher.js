const request = require("request");

const fetchBreedDescription = (breedName, callback) => {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    (error, response, body) => {
      if (error) {
        callback(error, null);
      } else {
        const data = JSON.parse(body);
        if (data[0] === undefined) {
          callback(null, "Breed not found");
        } else {
          callback(null, data[0].description);
        }
      }
    }
  );
};

module.exports = { fetchBreedDescription };

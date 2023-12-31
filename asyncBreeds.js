/* Failed asyncBreeds.js
  const fs = require('fs');

  const breedDetailsFromFile = function(breed) {
    console.log('breedDetailsFromFile: Calling readFile...');
    fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
      console.log("In readFile's Callback: it has the data.");
      // ISSUE: Returning from *inner* callback function, not breedDetailsFromFile.
      if (!error) return data;
    });
    // ISSUE: Attempting to return data out here will also not work.
    // Currently not returning anything from here, so breedDetailsFromFile function returns undefined.
  };

  // we try to get the return value
  const bombay = breedDetailsFromFile('Bombay');
  console.log('Return Value: ', bombay); // => will NOT print out details, instead we will see undefined!
*/


// Succesful asyncBreeds.js
  const fs = require('fs');

  const breedDetailsFromFile = function(breed) {

    console.log('breedDetailsFromFile: Calling readFile...\n');

    fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
      console.log('In readFile\'s callback: it has the data.\n');
      if (!error) {
        printOutCatBreed(data)
      }
    });
  };

  const printOutCatBreed = function(breedData) {
    console.log('Return value: ', breedData);
  }

  // We try to get the return value
  const bombay = breedDetailsFromFile('Bombay');
  // => will NOT print out details, instead we will see undefined!


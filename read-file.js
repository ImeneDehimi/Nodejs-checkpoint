const fs = require('node:fs');

fs.readFile('/Users/LENOVO X1 CARBON/Desktop/GoMyCode/Nodejs checkpoint/welcome.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

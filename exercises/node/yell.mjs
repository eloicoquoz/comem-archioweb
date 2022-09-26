// require fs
import fs from 'fs';
// get argument
const arg = process.argv[2];
// check argument
if (arg === undefined) {
  console.error('Please provide an argument');
  process.exit(1);
} else {
  // get content of file arg and print it
  fs.readFile(arg, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      process.exit(1);
    } else {
      console.log(data.toUpperCase());
    }
  });
}

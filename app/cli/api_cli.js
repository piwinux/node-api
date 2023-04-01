//
// Uses API to print message and date on command-line.
//

import { makeData } from '../../lib/api.js';

function main() {
  const data = makeData();
  const hello = data.hello;
  const date = data.date;
  console.log('Hello: ' + hello);
  console.log('Date: ' + date);
}

main()

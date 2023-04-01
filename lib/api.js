//
// API: JavaScript functions.
//

function helloWorld() {
  return 'Hello, World!';
}

function getDate() {
  return new Date();
}

export function makeData() {
  return {
    hello: helloWorld(),
    date: getDate()
  }
}

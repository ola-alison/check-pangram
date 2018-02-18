const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

let input = prompt("type in sth to check if it is a pangram").toLowerCase().split("");


for(let i = 0; i <= alphabet.length - 1; i++) {

  for (let j = 0; j < input.length; j++) {

    if( input[j] === alphabet[i]) {

      alphabet.splice(i, 1)

    }
 }

}

console.log('missing letters: ' + alphabet);

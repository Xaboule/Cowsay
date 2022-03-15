const object = require ('./information.js');
console.log(object);
const cowsay = require("cowsay");

console.log(cowsay.say({
    text : `I'm ${object.nom} from ${object.ville}!`,
  
}));
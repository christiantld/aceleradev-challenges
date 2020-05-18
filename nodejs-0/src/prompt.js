const prompt = require("prompt-sync")();
const Fibonnaci = require("./fibonacci");

let number = Number(
  prompt(
    "Digite um numero para verificar se faz parte da sequencia de fibonacci... \n"
  )
);
function checkNumber(number) {
  const result = Fibonnaci.isFibonnaci(number)
    ? `O numero esta na sequencia de fibonacci`
    : `O numero nao esta na sequencia de fibonacci`;

  console.log(result);
}

checkNumber(number);

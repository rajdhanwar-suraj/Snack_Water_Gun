let computerScore = 0;
let playerScore = 0;
let i = 0;
while(i<3){
let computer = Math.floor(Math.random()*3);
console.log(computer);
console.log("Wellcome to Snack-Water-Gun game.");
console.log("1. Snack");
console.log("2. Water");
console.log("3. Gun");

let player = prompt("Enter your Choice");
if(player == 1 && computer ==0 ||player == 2 && computer ==1 ||player == 3 && computer ==2){
  console.log("Draw!!!");
}else if(player == 1 && computer ==1 ||player == 2 && computer ==2 ||player == 3 && computer ==0){
  console.log("***Player Won***");
  playerScore++;
}else{
  console.log("***Computer Won***");
  computerScore++;
}
i++}
console.log("===================================");
console.log("Computer Score : ",computerScore);
console.log("Player Score : ",playerScore);
if(computerScore>playerScore){
  console.log("***Computer Won***")
}
else{
  console.log("***Player Won***")
}
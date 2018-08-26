// Assigment
let defender  = document.querySelector('.dice__defender')
let attacker  = document.querySelector('.dice__attacker')
let trigger   = document.querySelector('.rollButton')
let overlay   = document.querySelector('.overlay')

// Function to roll dice
// and print to HTML
function rollDice(){
  let rolls = []
  console.log('Rolling...');
  for (i = 0; i < 5; i++)
    rolls.push(Math.floor(Math.random() * 6) + 1)
    console.log('Roll complete.');
    defender.innerHTML = 
      '<li>' + rolls[0] + '</li>' +
      '<li>' + rolls[1] + '</li>'
    attacker.innerHTML =
      '<li>' + rolls[2] + '</li>' +
      '<li>' + rolls[3] + '</li>' +
      '<li>' + rolls[4] + '</li>'
    console.log('Done!')
}

// Run on button click
trigger.onclick = function(){
  overlay.classList.add('out');
  rollDice()
}

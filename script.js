

let randomNumber = Math.floor(Math.random()*6)+1;
const diceImg=document.querySelector('.dice');
// let diceUpdate = (diceRoll) => {
//     let diceRoll = randomNumber;
//     if ()
// }

// Rolling the dice
document.querySelector('.btn--roll').addEventListener('click', function(){
    let diceRoll = randomNumber;
    let diceImg = document.querySelector('.dice');
    if (diceRoll===1){
        diceImg.src='dice-$.png';
    }
    else if (diceRoll===2){
        diceImg.src='dice-2.png';
    }
    else if (diceRoll===3){
        diceImg.src='dice-3.png';
    }
    else if (diceRoll===4){
        diceImg.src='dice-4.png';
    }
    else if (diceRoll===5){
        diceImg.src='dice-5.png';
    }
    else if (diceRoll===6){
        diceImg.src='dice-6.png';
    }

// Note to improve the code: create a variable that would place the address of the image $


// Holding the score
document.querySelector('.btn--hold').addEventListener('click', function(){
    console.log('Hold!')
})




})
// New game
document.querySelector('.btn--new').addEventListener('click', function(){
    console.log('New!')
})
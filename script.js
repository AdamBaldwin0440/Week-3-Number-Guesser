const GuessBox = document.getElementById("GuessBox");
const SubGuess = document.getElementById("SubGuess");
const Message = document.getElementById("Message");
let RN = 0;
let Guesses = 0;

const RNG = () =>{
    RN = Math.ceil(Math.random()*99)
}
RNG()
console.log(RN)

SubGuess.addEventListener("click", () => {
    if (GuessBox.value === ""){
        Message.innerHTML = "Please guess a number";
        return
    }
    Guesses++
    if(parseInt(GuessBox.value) === RN){
    Message.innerHTML = 'CONGRATULATIONS! You guessed the number in ' + Guesses + ' tries. A new number has been generated.'
    Message.style.color = "blue";
    RNG();
    Guesses = 0;    
    }
    else if (parseInt(GuessBox.value) > RN){
        Message.innerHTML = "Too high, try a lower number";
        Message.style.color = "red"
    } else if (parseInt(GuessBox.value) < RN){
        Message.innerHTML = "Too low, try a higher number";
        Message.style.color = "green"
    }
}
)
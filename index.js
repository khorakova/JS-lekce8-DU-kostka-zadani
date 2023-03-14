console.log('funguju!');

let side = 2

const increaseNumberOfDotsOnDice = () => {
    let dice = document.querySelector(".dice")
    let diceSrc = "img/side"+side+".svg"
    if (side === 6) {
        dice.src = diceSrc
        side = 1
    } else {
        dice.src = diceSrc
        side = side + 1
    }
}

document.addEventListener('keypress', increaseNumberOfDotsOnDice)


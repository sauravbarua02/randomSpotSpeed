//random integer number generation
const displayEl = document.getElementById("display");

function randomGenerator(upperLimit,lowerLimit){
    const speed = Math.floor(Math.random()*(upperLimit-lowerLimit)+ lowerLimit);
    return speed;
}

const speedVal = randomGenerator(100,20);
displayEl.innerText = "The recorded random spot speed = "+ speedVal +" km/hr";
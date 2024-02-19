function showIcon(){
    const randomNumber =  Math.floor( Math.random() * (6) + 1 )
    
    let dice = document.createElement("img");
    dice.setAttribute("src", "/Icons/" + randomNumber + ".png" );
    dice.setAttribute('alt', 'Example Image');
    dice.classList.add("DiceIcon");

    document.getElementById("icons").appendChild(dice);
}


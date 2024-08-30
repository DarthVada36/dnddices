// // Math.trunc - Recorta el nùmero sin importar la distancia//
// const dnd6 = Math.trunc(Math.random() * 6) + 1;
// console.log(dnd6);

// // Math.ceil- siempre redondea hacia arriba//
// const dnd8 = Math.ceil(Math.random () * 8);
// console.log(dnd8);

// //Math.floor- redondea numeros hacia abajo//
// const dnd12 = Math.floor(Math.random() * 12) + 1;
// console.log(dnd12);

// //Math.round - redondea numeros al mas cercano (arriba o abajo)//
// const dnd20 = Math.round(Math.random() * 19) + 1;
// console.log(dnd20);

//Obtaining DOM elements
const rollDiceButton = document.getElementById('rollDiceButton'); //Roll Button
const diceResult = document.getElementById('diceResult'); //Dice Result
const selectDice = document.getElementById('selectDice'); //Select Dice


//
rollDiceButton.addEventListener('click', () => {
    // Obtenemos el valor del dado seleccionado
    const diceType = selectDice.value;
    let numero;
    
    // Verificamos qué dado ha sido seleccionado y generamos un número aleatorio correspondiente
    if (diceType === 'D6') {
        numero = Math.trunc(Math.random() * 6) + 1; //D6
    } else if (diceType === 'D8') {
        numero = Math.ceil(Math.random() * 8); // D8
    } else if (diceType === 'D10') {
        numero = Math.floor(Math.random() * 10) + 1; // D10
    } else if (diceType === 'D20') {
        numero = Math.round(Math.random() * 19) + 1; // D20
    }

    // Mostramos el número en el párrafo con id 'diceResult'
    diceResult.textContent = `Resultado: ${numero}`;
});
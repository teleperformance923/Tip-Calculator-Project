
// this is gonna select all the inputs by the id

const btnEl = document.getElementById("calculate");
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const totalSpan = document.getElementById("total");

// the tofixed updates the innertext of total span formatted to two decimal places

//const totalValue = billValue * (1 + tipValue / 100); – Converts billValue and tipValue to numbers (implicitly through arithmetic operations). It calculates the total by multiplying the bill amount by 1 + (tip percentage / 100). For example, if the bill is $100 and the tip is 15%, the calculation is $100 * (1 + 15 / 100) which equals $115.

function calculateTotal() {
    const billValue = billInput.value;
    const tipValue = tipInput.value;
    const totalValue = billValue * (1 + tipValue / 100);
    totalSpan.innerText = totalValue.toFixed(2);
}

//btnEl.addEventListener("click", calculateTotal); – Adds a click event listener to the button (btnEl). When the button is clicked, it calls the calculateTotal function to perform the calculation and update the total.

btnEl.addEventListener("click", calculateTotal);
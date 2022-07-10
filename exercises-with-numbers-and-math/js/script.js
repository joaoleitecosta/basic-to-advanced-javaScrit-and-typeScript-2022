const number = Number(prompt("Enter a number"));

const numberTitle = document.getElementById("number-title");
const text = document.getElementById("text");

numberTitle.innerHTML = number;
text.innerHTML = `<p>Square root ${Math.sqrt(number)}</p>\n
<p>${number} it's whole ${Number.isInteger(number)}</p>\n
<p>Is NaN: ${Number.isNaN(number)}</p>\n
<p>Rounded down: ${Math.floor(number)}</p>\n
<p>Rounded up: ${Math.ceil(number)}</p>\n
<p>With two decimal places ${number.toFixed(2)}</p>\n`;
const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const weight = Number(e.target.weight.value);
  const height = Number(e.target.height.value);

  if(Number.isNaN(weight)) {
    message('Please enter a valid weight', true);
    return;
  }
  if(Number.isNaN(height)) {
    message('Please enter a valid height', true);
    return;
  }
  
  const imc = getIMC(weight,height);
  getResult(imc);
})

function getResult(imc) {
  if(imc < 18.5) {
    message(`Your IMC is ${imc.toFixed(1)} (under weight)`, false);
    return;
  }else if (imc >= 18.5 && imc < 25) {
    message(`Your IMC is ${imc.toFixed(1)} (normal weight)`, false);
    return;
  }else if(imc >= 25 && imc < 30) {
    message(`Your IMC is ${imc.toFixed(1)} (over weight)`, false);
    return;
  }else if(imc >= 30 && imc < 35) {
    message(`Your IMC is ${imc.toFixed(1)} (obesity class I)`, false);
    return;
  }else if (imc >= 35 && imc < 40) {
    message(`Your IMC is ${imc.toFixed(1)} (obesity class II)`, false);
    return;
  }else if  (imc >= 40) {
    message(`Your IMC is ${imc.toFixed(1)} (obesity class III)`, false);
  }
}

function getIMC(weight, height) {
  const imc = weight / (height * height);
  return imc;
}

function message(msg, isError) {
  const classResult = isError ? 'error' : 'success';
  const result = document.querySelector('.result');
  result.classList.add(classResult);
  document.querySelector('.result').innerHTML = `<p>${msg}</p>`;
}

const persons = [];
const form = document.querySelector('#form');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  // const name = document.querySelector('#name').value;
  const name = event.target.name.value;
  const lastName = event.target.lastName.value;
  const weight = event.target.weight.value;
  const height = event.target.height.value;

  event.currentTarget.reset();

  persons.push({name, lastName, weight, height});

})
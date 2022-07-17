const paragraphs = document.querySelectorAll('.container');

const paragraphsArray = document.querySelectorAll('p');

const styleBody = getComputedStyle(document.body);
const backgroundColor = styleBody.backgroundColor;

for(let p of paragraphsArray) {
    p.style.backgroundColor = backgroundColor;
    p.style.color = 'white';
}
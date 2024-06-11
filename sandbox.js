let people = ['Ali', 'Hassan', 'Akram', 'Moeen', 'Waqar'];
const ul = document.querySelector(".persons");

let html = ``;

people.forEach((person) => html+=`<li style = "color: blue">${person}</li>`);

// console.log(html);
ul.innerHTML = html;
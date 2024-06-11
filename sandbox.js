let people = ['Ali', 'Hassan', 'Akram', 'Moeen', 'Waqar'];
let personsList = document.querySelector(".persons");

let html = ``;

people.forEach((person) => html+=`<li style = "color: blue">${person}</li>`);

console.log(html);
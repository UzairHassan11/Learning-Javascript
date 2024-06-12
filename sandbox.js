const div = document.querySelector('div');
console.log(div);

div.innerHTML = '<h2>Hello, world.</h2>';

const people = ['Ali', 'Ahmad', 'Hassan', 'Ejaz'];
div.innerHTML = '';
people.forEach(person=>{
    div.innerHTML += `<p>${person}</p>`
});
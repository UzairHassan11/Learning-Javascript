// const para = document.querySelector('p');
// console.log(para.innerText);

const paras = document.querySelectorAll('p');
paras.forEach(para =>{
    para.innerText += ' new text';
    console.log(para.innerText);
});
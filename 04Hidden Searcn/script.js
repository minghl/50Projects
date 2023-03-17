const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

btn.addEventListener('click', ()=>{
    // classList有toggle键
    search.classList.toggle('active');
    // 聚焦，一般用在文本框
    input.focus();
})
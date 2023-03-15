const panels = document.querySelectorAll('.panel');

panels.forEach(panel=>{
    panel.addEventListener('click', ()=>{
        removeActiveClasses();
        // 点击事件为盒子添加类别
        panel.classList.add('active');
    })
})

function removeActiveClasses(){
    panels.forEach(panel=>{
        // 点击事件为盒子移除类别
        panel.classList.remove('active')
    })
}
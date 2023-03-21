const boxes = document.querySelectorAll('.box');

// 在window上绑定scroll事件
window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
    // innerHeight 视口高度
    const triggerBottom = window.innerHeight / 5 * 4;

    console.log(triggerBottom, 'trigger');

    boxes.forEach(box => {
        // getBoundingClientRect是返回一个对象，box有top、bottom、left、right几个参数
        const boxTop = box.getBoundingClientRect().top
        console.log('box', boxTop);
        if (boxTop < triggerBottom) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    })
}
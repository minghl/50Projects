const buttons = document.querySelectorAll('.ripple');

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        // 视口的x, y
        const x = e.pageX;
        const y = e.pageY;

        // button左上角的x, y
        const buttonTop = e.target.offsetTop;
        const buttonLeft = e.target.offsetLeft;

        // button内部的top和left
        const xInside = x - buttonLeft;
        const yInside = y - buttonTop;

        console.log(x, y, buttonLeft, buttonTop, xInside, yInside);
        const circle = document.createElement('span');
        circle.classList.add('circle');
        circle.style.top = yInside + 'px';
        circle.style.left = xInside + 'px';

        // 回调函数不能使用箭头函数，不然this不会指向button
        this.appendChild(circle);

        setTimeout(() => {
            circle.remove();
        }, 500);
    })
})
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    counter.innerText = 0;

    const updateCounter = () => {
        // 获取data-target属性
        const target = +counter.getAttribute('data-target');
        // 现阶段的innerText的值
        const c = +counter.innerText;

        // 不同量，增加频率相同
        const increment = target / 200;

        if (c < target) {
            // 返回大于给定数字的整数，与floor相反
            counter.innerText = `${Math.ceil(c + increment)}`;
            setTimeout(updateCounter, 1);
        } else {
            // 递归停止条件
            counter.innerText = target;
        }
    }
    updateCounter();
})
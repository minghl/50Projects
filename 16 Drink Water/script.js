const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

updateBigCup();

smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => {
        return highlightCups(idx);
    })
})

function highlightCups(idx) {
    // 控制在点击小杯子，则归零
    if (idx === 7 && smallCups[idx].classList.contains('full')) idx--;
    else if (smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) idx--;

    smallCups.forEach((cup, idx2) => {
        if (idx2 <= idx) {
            cup.classList.add('full');
        } else {
            cup.classList.remove('full');
        }
    })

    updateBigCup();
}

function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length;
    const totalCups = smallCups.length;

    // 控制水部分
    if (fullCups === 0) {
        percentage.style.visibility = "hidden";
        percentage.style.height = 0;
    } else {
        percentage.style.visibility = 'visible';
        // 最后乘以330px，这是占的比例
        percentage.style.height = `${fullCups / totalCups * 330}px`;
        // 下半部的比例文字
        percentage.innerText = `${fullCups / totalCups * 100}%`;
    }

    // 控制剩余部分
    if (fullCups === totalCups) {
        remained.style.visibility = 'hidden';
        remained.style.height = 0;
    } else {
        remained.style.visibility = 'visible';
        // 升的计算方法
        liters.innerText = `${2 - (250 * fullCups / 1000)}L`
    }

}
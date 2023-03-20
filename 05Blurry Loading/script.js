const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;

// 重复调用一个函数或代码片段，每次调用之间具有固定时间间隔，与clearInterval相关联
let int = setInterval(blurring, 30)

function blurring() {
    load++;

    if(load>99){
        clearInterval(int);
    }

    loadText.innerText = `${load}%`;
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

// 此函数可以无限复用，给定输入值，输入最小值，输入最大值，输出开始值，输出结束值
const scale = (num, in_min, in_max, out_start, out_end)=>{
    return ((num - in_min) * (out_end - out_start))/(in_max-in_min) + out_start
}
# 01 Expanding Cards

## 01 media query & responsive

```
@media (max-width:1024px){
    .container{
        width:100vw;
    }

    .panel:nth-of-type(4),
    .panel:nth-of-type(5){
        display: none;
    }
}
```

## 02 dom classList

```
panels.forEach(panel=>{
    panel.addEventListener('click', ()=>{
        removeActiveClasses();
        // 点击事件为盒子添加类别
        panel.classList.add('active');
    })
})
```

# 02 Progress Steps

## 01 JS control style

```
progress.style.width = (actives.length-1)/(circles.length-1) * 100 + '%'
```

## 02 transform transition

```
/* transform 是用来实现元素坐标空间的变化， translate 用来移动元素， transition 给元素的变化加上动画效果。 */
// The same selector
transform: translateY(-50%);
transition: 0.4s ease;
// Not the same selector
transition: transform 0.4s ease;
```

## 03 pseudo-element

```
/* :active 伪类匹配被用户激活的元素。它让页面能在浏览器监测到激活时给出反馈。当用鼠标交互时，它代表的是用户按下按键和松开按键之间的时间。 */
.btn:active{
    transform: scale(0.98);
}

/* :focus表示获得焦点的元素（如表单输入）。当用户点击或触摸元素或通过键盘的“tab”键选择它时会被触发。 */
.btn:focus{
    /* 与border类似，但outline 不占据空间，绘制于元素内容周围。 */
    outline: 0;
}

/* :disabled CSS 伪类表示任何被禁用的元素。如果一个元素不能被激活（如选择、点击或接受文本输入）或获取焦点，则该元素处于被禁用状态。 */
.btn:disabled{
    background-color: var(--line-border-empty);
    cursor: not-allowed;
}
```

## 04 disabled

```
prev.disabled = true;
```

# 03 Rotating Navigation

## 01 transform-origin

```
/* 从哪里开始移动 */
transform-origin: top left;
transform: rotate(90deg);
```

# 04 Hidden Navigation

## 01 toggle

```
// classList有toggle键
search.classList.toggle('active');
```

## 02 focus()

```
// 聚焦，一般用在文本框
input.focus();
```

# 05 Blurry Loading

## 01 center/cover

```
/* center/cover 居中平铺都完成 */
background: url('https://images.pexels.com/photos/15927957/pexels-photo-15927957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2') no-repeat center/cover;
```

## 02 calc()

```
/* 放大缩小图片，且与固定位置绑定，防止溢出 */
width: calc(100vw + 60px);
height: calc(100vh + 60px);
```

## 03 blur()

```
/* 高斯模糊输出:px */
filter: blur(0px);
```

## 04 setInterval()

```
// 重复调用一个函数或代码片段，每次调用之间具有固定时间间隔，与clearInterval相关联
let int = setInterval(blurring, 30)

clearInterval(int);
```

## 05 adjust range function

```
// 此函数可以无限复用，给定输入值，输入最小值，输入最大值，输出开始值，输出结束值
const scale = (num, in_min, in_max, out_start, out_end)=>{
    return ((num - in_min) * (out_end - out_start))/(in_max-in_min) + out_start
}
```

# 06 Scroll Animation 

## 01 window binds events

```
// scroll
window.addEventListener('scroll', checkBoxes);
```

## 02 innerHeight

```
// innerHeight 视口高度
const triggerBottom = window.innerHeight / 5 * 4;
```

## 03 getBoundingClientRect()

```
// getBoundingClientRect是返回一个对象，box有top、bottom、left、right几个参数，box的视口大小
const boxTop = box.getBoundingClientRect().top
```

## 04 box-shadow

```
/* x偏移量，y偏移量，阴影模糊半径，阴影颜色 */
box-shadow: 2px 4px 5px rgba(0,0,0,0.3);
```

# 07 Split Landing Page

## 01 rem

```
/* 1rem = 16px(default html root font-size) */
font-size: 4rem;
```

## 02 white-space

```
/* Deal with white space inside an element */
white-space: nowrap;
```

## 03 background-size

```
/* 平铺/充满，cotain是填充；平铺的缘故，会让mouseenter的时候，图片自动变大一点 */
background-size: cover;
```

## 04 ::before

```
.split.left::before{
    /* 清除浮动，还可以添加样式 */
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: var(--left-bg-color);
}
```

## 05 object-fit && object-position

```
// 裁剪图片位置
object-fit: cover;
object-position: 0% 60%;
```

# 08 Form Input Wave

## 01 innerHTML&innerText

```
// 分割innerText的文字，拆分一个dom节点，创建新的多个dom节点
label.innerHTML = label.innerText.split('').map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`).join('');
```

## 02 cubic-bezier(0.68, -0.55, 0.265, 1.55)

```
https://cubic-bezier.com/#.17,.67,.83,.67

/* progress和time的函数曲线，与ease，linear同等级 */
transition:0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

# 09 Sound Board

## 01 flex-wrap

```
/* 指定flex元素单行显示还是多行显示 */
flex-wrap: wrap;
```

## 02 batch create DOM nodes

```
sounds.forEach(sound => {
    // 创建DOM节点，并绑定事件
    const btn = document.createElement('button');
    btn.classList.add('btn');

    btn.innerText = sound;

    btn.addEventListener('click', () => {
        stopSongs();
    ...
```

## 03 HTMLMediaElement.play()

```
// HTMLMediaElement.play() 开始播放媒体，会返回一个promise对象
document.getElementById(sound).play();
```

## 04 appendChild()

```
// js生成的DOM节点插入原生节点
document.getElementById('buttons').appendChild(btn);
```

## 05 stop all audio

```
// 停止所有音频，不会单点停止某一个
function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound);

        // HTMLMediaElement.pause() 暂停音频播放
        song.pause();
        // HTMLMediaElement.currentTime 停止播放后归0
        song.currentTime = 0;
    })
}
```

## 06 HTMLMediaElement.pause()

```
song.pause();
```

## 07 HTMLMediaElement.currentTime

```
// HTMLMediaElement.currentTime 停止播放后归0
// 控制音频回放，实现可视化时间轴
song.currentTime = 0;
```

# 10 Dad Jokes

## 01 letter-space

```
/* 字母的间隙 */
letter-spacing: 2px;
```

## 02 box-shadow

```
/* offset-x | offset-y | blur-radius | color */
box-shadow: 0 10px 20px rgba(0, 0, 0,0.1), 0 6px 6px rgba(0, 0, 0, 0.1);
```

## 03 async/await

```
// Using Async/Await
// 必须使用异步函数，因为fetch发送请求是异步的，不然渲染不出来就结束了
async function generateJoke() {

    //发送请求配置
    const config = {
        headers: {
            Accept: 'application/json',
        }
    }

    // fetch也是异步的，异步用then可以用await替代
    const res = await fetch('https://icanhazdadjoke.com', config);

    // json也是异步的
    const data = await res.json();

    jokeEl.innerHTML = data.joke;
}
```

## 04 render/update

```
// 点击更新渲染
jokeBtn.addEventListener('click', generateJoke);

// 初次渲染
generateJoke();
```

# 11 Event KeyCodes

## 01 keydown

```
// 全局监听按键事件
window.addEventListener('keydown', ()=>{})
```

## 02 event.key&event.keyCode&event.code

```
insert.innerHTML = `
    <div class="key">
    ${ev.key === ' ' ? 'Space' : ev.key}
    <small>event.key</small>
    </div>

    <div class="key">
    ${ev.keyCode}
    <small>event.keyCode</small>
    </div>

    <div class="key">
    ${ev.code}
    <small>event.code</small>
    </div>
    `
```

# 12 FAQ Collapse

## 01 content special style

```
.faq.active::before,
.faq.active::after{
    /* before after 添加样式 */
    content:'\f075';
    font-family: 'Font Awesome 5 Free';
}
```

## 02 parentNode & toggle

```
toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        // 找父节点的class
        toggle.parentNode.classList.toggle('active')
    })
})
```

# 13 Random Choice Picker

## 01 textarea

```
/* textarea focus的时候也会有border */
textarea:focus{
    outline: none;
}
```

## 02 focus()

```
// 初次渲染就是focus到了textarea
textarea.focus()
```

## 03 createElement()

```
// 用dom操作来创建节点，而不是之前的innerHTML
const tagEl = document.createElement('span');
tagEl.classList.add('tag');
tagEl.innerText = tag;
```

## 04 appendChild()

```
// 分别加入进容器
tagsEl.appendChild(tagEl);
```

## 05 setInterval

```
// setInterval 重复调用一个函数或执行一个方法，具有间隔时间
const interval = setInterval(() => {
    const randomTag = pickRandomTag();

    if (randomTag !== undefined) {
        highlightTag(randomTag);

        setTimeout(() => {
            unHighlightTag(randomTag);
        }, 100);
    }
}, 100);
```

## 06 clearInterval

```
// 循环30次后，利用clearInterval清除setInterval，防止无限循环，并设置最后一次的随机选择到tag
setTimeout(() => {
    clearInterval(interval);

    // 独立interval的最后一次随机选择
    setTimeout(() => {
        const randomTag = pickRandomTag();

        highlightTag(randomTag);
    }, 100);
}, 100 * times);
```

## 07 Math.random()

```
// Math.random() 0-1 * tags.length 0-tags.length
return tags[Math.floor(Math.random() * tags.length)];
```

# 14 Animated Navigation

## 01 linear-gradient

```
/*  linear-gradient不加逗号 */
background-image: linear-gradient(
to bottom,
#eafbff 0%,
#eafbff 50%,
#5290f9 50%,
/* 最后一个一定不要加逗号 */
#5290f9 100%
);
```

## 02 transition & transform

```
/* transition -> width, 向宽度动画 */
transition: width 0.6s linear;

/* 各种transform和transition */
transform: rotateY(0deg);
opacity: 0;
transition: transform 0.6s linear, opacity 0.6s linear;

/* 转一圈，deg180转反停下来 */
transform: rotateY(360deg);
```

## 03 translate

```
/* translateY 负数是向上移动 */
transform: rotate(765deg) translateY(-5.5px);
```

## 04 css paint the line

```
/* 用纯css画直线 */
background-color: #5290f9;
height: 2px;
width: 20px;
```

## 05 list-style-type & text-decoration

```
/* 去除a的下划线 */
text-decoration: none;

/* cope with list pre-point */
list-style-type: none;
```

# 15 Incrementing Counter

## 01 media & flex-direction

```
@media (max-width: 580px){
    body{
        flex-direction: column;
    }
}
```

## 02 data-target

```
// 获取data-target属性
const target = +counter.getAttribute('data-target');
```

## 03 increase at the same rate

```
// 不同量，增加频率相同
const increment = target / 200;
```

## 04 recursion

```
if (c < target) {
    // 返回大于给定数字的整数，与floor相反
    counter.innerText = `${Math.ceil(c + increment)}`;
    setTimeout(updateCounter, 1);
} else {
    // 递归停止条件
    counter.innerText = target;
}
```

# 16 Drink Water

## 01 :root

```
/* 放全局变量 */
:root{
    --border-color: #144fc6;
    --fill-color:#6ab3f8;
}
```

## 02 water Cup

```
/* 下边弧形 */
border-radius: 0 0 40px 40px;
height: 330px;
width: 150px;
margin: 30px 0;
```

## 03 click again

```
// 控制在点击小杯子，则归零
if (idx === 7 && smallCups[idx].classList.contains('full')) idx--;
else if (smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) idx--;
```

## 04 dynamic control water part

```
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
```

## 05 dynamic control remained part

```
// 控制剩余部分
if (fullCups === totalCups) {
    remained.style.visibility = 'hidden';
    remained.style.height = 0;
} else {
    remained.style.visibility = 'visible';
    // 升的计算方法
    liters.innerText = `${2 - (250 * fullCups / 1000)}L`
}
```

# 17 Movie App

## 01 flex-end

```
display: flex;
/* 在右边 */
justify-content: flex-end;
```

## 02 ::placeholder

```
/* placeholder加颜色 */
.search::placeholder{
    color: #7378c5;
}
```

## 03 batch render

```
// 批量渲染逻辑，模版字符串，在纯js里面
movieEl.innerHTML = `
    <img src="${IMG_PATH + poster_path}" alt="${title}">
    <div class="movie-info">
    <h3>${title}</h3>
    <span class="${getClassByRate(vote_average)}">${vote_average}</span>
    </div>
    <div class="overview">
    <h3>Overview</h3>
    ${overview}</div>
`
main.appendChild(movieEl);
```

# 18 Background Slider

## 01 cover shadow

```
/* 加阴影 */
body::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: -1;
}
```

## 02 carousel style

```
/* 轮播图思想 */
.slide{
    opacity: 0;
    height: 100vh;
    width: 100vw;
    background-position: center centser;
    background-size: cover; 
    position: absolute;
    top:-15vh;
    left: -15vw;
    transition: 0.4s ease;
    z-index:1;
}

/* 轮播图思想2 */
.slide.active{
    opacity: 1;
}
```

## 03 JS style naming principles

```
// js里面的style的名称是驼峰命名法
body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
```

# 19 Theme Clock

## 01 needle css

```
/* 指针的画法 */
.needle {
  background-color: var(--primary-color);
  position: absolute;
  top: 50%;
  left: 50%;
  height: 65px;
  width: 3px;
  transform-origin: bottom center;
  transition: all 0.5s ease-in;
}

.needle.hour {
    /* translate(-50%, -100%)移动位置 rotate(0deg)初始化角度 */
  transform: translate(-50%, -100%) rotate(0deg);
}

.needle.minute {
  transform: translate(-50%, -100%) rotate(0deg);
  height: 100px;
}

.needle.second {
  transform: translate(-50%, -100%) rotate(0deg);
  height: 100px;
  background-color: #e74c3c;
}
```

## 02 ::after(inner point)

```
/* 只是为了点中加点 */
.center-point::after {
  content: '';
  background-color: var(--primary-color);
  width: 5px;
  height: 5px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
}
```

## 03 connect hour minute second

```
// 联动秒分时，动态rotate
hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock + minutes / 60, 0, 12, 0, 360)}deg)`
minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes + seconds / 60, 0, 60, 0, 360)}deg)`
secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`

timeEl.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`
dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
```

## 04 setInterval

```
setTime()

// 设置函数执行器
setInterval(setTime, 1000)
```

# 20 Button Ripple Effect

## 01 overflow: hidden

```
/* 隐藏侧边框 */
overflow: hidden;
```

## 02 animation & keyframes

```
animation: scale 0.5s ease-out;

/* keyframes是animation定义怎么动的，等同于transform之于transition，不过animation更复杂 */
@keyframes scale {
    from{
        /* transform: scale(x) 是指放大多少倍
           transform: translate(x,y) 是指向x和y平移多少
        */
        transform: translate(-50%,-50%) scale(0);
    }
    to {
        transform: translate(-50%,-50%) scale(3);
        opacity: 0;
    }
}
```

## 03 pageX & pageY

```
// 视口的x, y
const x = e.pageX;
const y = e.pageY;
```

## 04 offsetTop & offsetLeft

```
// button左上角的x, y
const buttonTop = e.target.offsetTop;
const buttonLeft = e.target.offsetLeft;
```

## 05 Element inner top & left

```
// button内部的top和left
const xInside = x - buttonLeft;
const yInside = y - buttonTop;
```

## 06 arrow function

```
button.addEventListener('click', function (e) {
  // 回调函数不能使用箭头函数，不然this不会指向button
  this.appendChild(circle);

})
```

# 21 Drag N Drop

## 01 draggable

```
<!-- draggable这里设置了true才能拖拽 -->
<div class="fill" draggable="true"></div>
```

## 02 drag series event

```
// 拖拽系列的DOM事件，开始拖，结束拖...
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

empty.addEventListener('dragover', dragOver);  empty.addEventListener('dragenter', dragEnter);
empty.addEventListener('dragleave', dragLeave);
empty.addEventListener('drop', dragDrop);
```

## 03 this.className

```
// className的添加需要加空格，不是classList的相加
this.className += ' hold';
```

## 04 append & appendChild

```
// 在可以使用 .appendChild 的情况下，可以使用 .append，但反过来不行。append可以添加DOMString，可以添加多个项目。appendChild有返回值，返回子节点
this.append(fill);
```

# 22 Drawing App

## 01 input type='color'

```
// 调色板
<input type="color" id="color" />
```

## 02 canvas

```
<canvas id="canvas" width="800" height="700"></canvas>
```

## 03  \> * :last-child

```
// 最后一个一级子元素
.toolbox > *:last-child{
    margin-left: auto;
}
```

## 04 offsetX & offsetY

```
// offsetX：距离点击最小的元素边缘（父元素）的横、纵坐标。offsetLeft,offsetTop 相对于最近的祖先定位元素。
// offsetLeft 和offsetX相似 注意区分 offsetLeft相对于offsetParent offsetParent的有定位，定位 ，定位 ，没有定位一直往上找，找到body 而offsetX是距离点击最小元素边缘 无定位要求

canvas.addEventListener('mousedown', (e) => {
    isPressed = true;

    x = e.offsetX;
    y = e.offsetY;
})
```

## 05 canvas functions

```
// canvas的一些方法

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2)
    ctx.fillStyle = color;
    ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
}

clearEl.addEventListener('click', () => ctx.clearRect(0, 0, canvas.width, canvas.height))
```

## 06 mousedown & mouseup & mousemove

```
canvas.addEventListener('mousedown', (e) => {
    isPressed = true;

    x = e.offsetX;
    y = e.offsetY;
})

document.addEventListener('mouseup', (e) => {
    isPressed = false;

    x = undefined;
    y = undefined;
})

canvas.addEventListener('mousemove', (e) => {
    if (isPressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;

        drawCircle(x2, y2);
        drawLine(x, y, x2, y2);

        x = x2;
        y = y2;
    }
})

```

# 23 Kinetic Loader

## 01 ::before & ::after

```
/* 变成两个三角形 */
.kinetic::after,
.kinetic::before 
{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    border: 50px solid transparent;
    border-bottom-color: #fff;
    animation: rotateA 2s linear infinite 0.5s;
}

.kinetic::before {
    transform: rotate(90deg);
    animation: rotateB 2s linear infinite;
}

```

## 02 @keyframes

```
/* 联动旋转 */
@keyframes rotateA {
    0%,
    25%{
        transform: rotate(0deg);
    }

    50%,
    75%{
        transform: rotate(180deg);
    }

    100%{
        transform: rotate(360deg);
    }
}

@keyframes rotateB {
    0%,
    25%{
        transform: rotate(90deg);
    }

    50%,
    75%{
        transform: rotate(270deg);
    }

    100%{
        transform: rotate(450deg);
    }
}
```


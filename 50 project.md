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


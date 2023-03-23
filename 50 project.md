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


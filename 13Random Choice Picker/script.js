const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

// 初次渲染就是focus到了textarea
textarea.focus()

// textarea的事件绑定
textarea.addEventListener("keyup", (ev) => {
    createTags(ev.target.value)

    if (ev.key === 'Enter') {
        setTimeout(() => {
            ev.target.value = ""
        }, 10);
        randomSelect();
    }
})

// 创建tag
function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim());

    tagsEl.innerHTML = '';

    tags.forEach(tag => {
        // 用dom操作来创建节点，而不是之前的innerHTML
        const tagEl = document.createElement('span');
        tagEl.classList.add('tag');
        tagEl.innerText = tag;
        // 分别加入进容器
        tagsEl.appendChild(tagEl);
    })
}

// 随机逻辑函数
function randomSelect() {
    const times = 30;

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

    // 循环30次后，利用clearInterval清除setInterval，防止无限循环，并设置最后一次的随机选择到tag
    setTimeout(() => {
        clearInterval(interval);

        // 独立interval的最后一次随机选择
        setTimeout(() => {
            const randomTag = pickRandomTag();

            highlightTag(randomTag);
        }, 100);
    }, 100 * times);
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag');
    // Math.random() 0-1 * tags.length 0-tags.length
    return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
    tag.classList.add('highlight');
}

function unHighlightTag(tag) {
    tag.classList.remove('highlight');
}
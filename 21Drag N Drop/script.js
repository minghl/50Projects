const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

// 拖拽系列的DOM事件，开始拖，结束拖...
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

for (const empty of empties) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}

function dragStart() {
    // className的添加需要加空格，不是classList的相加
    this.className += ' hold';
    setTimeout(() => {
        this.className = 'invisible'
    }, 0);
}

function dragEnd() {
    this.className = 'fill';
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
    this.className += ' hovered';
}

function dragLeave() {
    this.className = 'empty';
}

function dragDrop() {
    this.className = 'empty';
    console.log(this);
    // 在可以使用 .appendChild 的情况下，可以使用 .append，但反过来不行。append可以添加DOMString，可以添加多个项目。appendChild有返回值，返回子节点
    this.append(fill);
}
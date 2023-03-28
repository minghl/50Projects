const insert = document.getElementById('insert');

// 监听按键事件
window.addEventListener('keydown', (ev) => {
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
})
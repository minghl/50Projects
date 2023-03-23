const labels = document.querySelectorAll('.form-control label');

labels.forEach(label => {
    // 分割innerText的文字，拆分一个dom节点，创建新的多个dom节点
    label.innerHTML = label.innerText.split('').map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`).join('');
})
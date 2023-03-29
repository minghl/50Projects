const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        // 找父节点的class
        toggle.parentNode.classList.toggle('active')
    })
})
document.addEventListener('input', function(event) {
    if (event.target.classList.contains('editable')) {
        const value = event.target.textContent.trim();
        const colorPreview = event.target.nextElementSibling;
        if (/^#([0-9A-Fa-f]{3}){1,2}$/.test(value)) {
            colorPreview.style.backgroundColor = value;
        } else {
            colorPreview.style.backgroundColor = 'transparent';
        }
    }
});
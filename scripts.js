
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.toggle-abstract');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const abstract = button.nextElementSibling;
            if (abstract.style.display === 'block') {
                abstract.style.display = 'none';
                button.textContent = 'Abstract';
            } else {
                abstract.style.display = 'block';
                button.textContent = 'Abstract';
                // Re-renderiza el contenido LaTeX
                MathJax.typeset();
            }
        });
    });
});
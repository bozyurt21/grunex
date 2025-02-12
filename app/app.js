document.addEventListener("DOMContentLoaded", function () {
    const hiddenElements = document.querySelectorAll('.hidden');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    hiddenElements.forEach(el => observer.observe(el));
});
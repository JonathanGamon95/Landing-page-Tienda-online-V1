const animados = document.querySelectorAll('.animar');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const el = entry.target;
            const delay = el.dataset.delay || '0s';
            el.style.transitionDelay = delay; // 👈 aplica el delay
            el.classList.add('visible');
            observer.unobserve(el); // opcional: para animar una sola vez
        }
    });
});

animados.forEach(el => observer.observe(el));

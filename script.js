// Função para animar elementos quando entram na tela
function animateOnScroll(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('slide-in'); // Adiciona a classe 'slide-in'
            observer.unobserve(entry.target); // Interrompe a observação após a animação
        }
    });
}

// Cria um observador de interseção
const observer = new IntersectionObserver(animateOnScroll, {
    root: null, // O elemento raiz é o viewport
    threshold: 0.3, // Define o valor de visibilidade necessário para disparar a animação
});

// Elementos que você deseja animar quando eles entrarem na tela
const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');

elementsToAnimate.forEach(element => {
    observer.observe(element); // Começa a observar cada elemento
});

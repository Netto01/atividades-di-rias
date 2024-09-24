// Seleciona todas as cartas com a classe .flip-card
const flipCards = document.querySelectorAll('.flip-card');

// Adiciona o evento de clique a cada carta
flipCards.forEach(card => {
    card.addEventListener('click', () => {
        // Alterna a classe 'flipped' ao clicar na carta
        card.classList.toggle('flipped');
    });
});

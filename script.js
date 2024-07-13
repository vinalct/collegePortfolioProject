let typingInterval;

// Função que mostra o conteúdo e inicia o efeito de digitação
function showContent(contentId, textElementId = null) {
    clearTimeout(typingInterval);
    
    // Oculta todas as divs de conteúdo
    const contents = document.querySelectorAll('.content-item');
    contents.forEach(content => {
        content.style.display = 'none';
    });
    
    // Mostra a div de conteúdo correspondente
    const contentToShow = document.getElementById(contentId);
    contentToShow.style.display = 'block';

    if (textElementId) {
        const text = contentToShow.getAttribute('data-text');
        if (text) {
            resetAndType(textElementId, text);
        }
    }
}

// Função que reseta o conteúdo e aplica o efeito de digitação
function resetAndType(elementId, text) {
    const element = document.getElementById(elementId);
    element.innerHTML = ""; // Reseta o conteúdo

    let i = 0;
    const speed = 50; // Velocidade em milissegundos

    function typeWriter() {
        if (i < text.length) {
            if (text.charAt(i) === '<') {
                element.innerHTML += text.slice(i, text.indexOf('>', i) + 1);
                i = text.indexOf('>', i) + 1;
            } else {
                element.innerHTML += text.charAt(i);
                i++;
            }
            typingInterval = setTimeout(typeWriter, speed);
        }
    }

    typeWriter();
}

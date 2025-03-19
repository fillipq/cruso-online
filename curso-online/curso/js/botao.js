// Função para mostrar a área de vídeos com o efeito de transição dourada ao acessar o curso
document.getElementById("card-button").addEventListener("click", function () {
    const videoContainer = document.getElementById("video-container");
    const overlay = document.createElement("div");
    overlay.classList.add("golden-overlay");

    document.body.appendChild(overlay);  // Adiciona o overlay dourado

    // Iniciar a transição dourada e a animação da área de vídeos
    setTimeout(function () {
        // Exibe o efeito dourado
        overlay.style.opacity = "1";

        // Após o efeito dourado, move a área de vídeos para a tela
        setTimeout(function () {
            videoContainer.style.transform = "translateX(-100%)";  // Move a área de vídeos da direita para a esquerda
        }, 500);  // Espera meio segundo antes de mover a área de vídeos
    }, 100);  // Exibe o efeito dourado logo após o clique
});

// Função para voltar à tela inicial com o efeito de transição dourada
document.getElementById("back-button").addEventListener("click", function () {
    const videoContainer = document.getElementById("video-container");
    const overlay = document.querySelector(".golden-overlay");

    // Exibe novamente o overlay dourado e move a área de vídeos para fora da tela
    overlay.style.opacity = "1";  // Torna o efeito dourado visível

    // Mover a área de vídeos de volta para fora da tela (para a direita)
    setTimeout(function () {
        videoContainer.style.transform = "translateX(100%)";  // Move a área de vídeos de volta para a direita
    }, 500);  // Delay antes de mover a área de vídeos

    // Após a animação, remove o overlay dourado
    setTimeout(function () {
        overlay.remove();  // Remove o overlay dourado da tela
    }, 1500);  // Após 1.5 segundos, remove o overlay
});

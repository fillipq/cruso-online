
const videoContainer = document.getElementById("video-container");
const cardButton = document.getElementById("card-button");
const container = document.querySelector(".container");

cardButton.addEventListener("click", () => {
    // Animação para deslizar a área de vídeos
    container.style.transform = "translateX(-0%)"; // Move a página principal para a esquerda
    videoContainer.style.transform = "translateX(-100%)"; // Move a área de vídeos para a posição inicial
});



const videoPlayer = document.getElementById("video-player");
const videoSource = document.getElementById("video-source");
const videoTitle = document.getElementById("video-title"); // Título do vídeo
const playlistItems = document.querySelectorAll(".playlist li");

function loadAndPlayVideo(videoFile, title) {
    // Remover a classe 'playing' para iniciar o efeito de fade-out
    videoPlayer.classList.remove("playing");

    videoSource.src = videoFile;
    videoPlayer.load(); // Carrega o novo vídeo

    // Quando o vídeo for carregado, aplica a classe 'playing' para a animação de fade-in
    videoPlayer.addEventListener('loadeddata', () => {
        videoPlayer.classList.add("playing");
    });

    // Atualiza o título do vídeo
    videoTitle.textContent = title;
}

playlistItems.forEach((item) => {
    item.addEventListener("click", () => {
        const videoFile = item.getAttribute("data-video");
        const title = item.getAttribute("data-title");
        loadAndPlayVideo(videoFile, title); // Atualiza o vídeo e o título
    });
});

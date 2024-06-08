const botaoCamera = document.querySelector("[data-video-botao]");
const campoCamera = document.querySelector("[data-camera]");
const video = document.querySelector("[data-video]")
const tirarFoto = document.querySelector("[data-tirar-foto]")
const canvas = document.querySelector("[data-video-canvas]")
const mensagem = document.querySelector("[data-mensagem]")
const botaoEnviarFt = document.querySelector("[data-enviar]")

let imagemURL = "";

botaoCamera.addEventListener("click", async function () {
    const iniciarVideo = await navigator.mediaDevices.
    getUserMedia({video: true, audio: false})

    botaoCamera.style.display = "none";
    campoCamera.style.display = "block";

    video.srcObject = iniciarVideo;
})

tirarFoto.addEventListener("click", function() {
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
    
    imagemURL = canvas.toDataURL("image/jpeg");

    campoCamera.style.display = "none";
    mensagem.style.display = "block";
})

botaoEnviarFt.addEventListener("click", () => {
    const receberDadosExistentes = localStorage.getItem("cadastro");
    const converteORetorno = JSON.parse(receberDadosExistentes);

    converteORetorno.imagem = imagemURL;

    localStorage.setItem('cadastro', JSON.stringify(converteORetorno));

    window.location.href = "./abrir-conta-form-3.html"
})

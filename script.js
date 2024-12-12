function handleSubmit(event){event.preventDefault();const e=document.getElementById("leadForm"),t=document.getElementById("submitButton"),n=new XMLHttpRequest;n.open("POST",e.action,!0),n.setRequestHeader("Content-Type","application/x-www-form-urlencoded");const o=new FormData(e),a=new URLSearchParams(o).toString();n.onload=function(){200===n.status?(t.innerHTML="Enviado!",t.disabled=!0):alert("Erro ao enviar a mensagem.")},n.send(a)}
// Função do carrossel para alternar os banners
let currentSlide = 0;

function showNextSlide() {
    
    
const slides = document.querySelector('.carrossel-slides');
    const totalSlides = slides.children.length;

    currentSlide = (currentSlide + 

    currentSlide =
1) % totalSlides; // Loop entre os slides
    slides.
    
style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Troca de slide a cada 5 segundos
setInterval(showNextSlide, 5000);


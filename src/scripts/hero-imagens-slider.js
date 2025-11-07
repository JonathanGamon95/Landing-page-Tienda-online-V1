// Script del carrusel integrado SIN INDICADORES
class ImageGallery {
    constructor() {
        this.slides = document.querySelectorAll('#home_section .gallery-slide');
        this.prevBtn = document.querySelector('#home_section .prev-btn');
        this.nextBtn = document.querySelector('#home_section .next-btn');
        this.currentIndex = 0;
        this.autoPlayInterval = null;
        
        this.init();
    }
    
    init() {
        // Event listeners para botones
        this.prevBtn.addEventListener('click', () => this.prevSlide());
        this.nextBtn.addEventListener('click', () => this.nextSlide());
        
        // Auto-play
        this.startAutoPlay();
        
        // Pausar auto-play al interactuar
        this.galleryContainer = document.querySelector('#home_section .gallery-container');
        this.galleryContainer.addEventListener('mouseenter', () => this.stopAutoPlay());
        this.galleryContainer.addEventListener('mouseleave', () => this.startAutoPlay());
    }
    
    showSlide(index) {
        // Ocultar slide actual
        this.slides[this.currentIndex].classList.remove('active');
        
        // Mostrar nuevo slide
        this.currentIndex = index;
        this.slides[this.currentIndex].classList.add('active');
    }
    
    nextSlide() {
        const nextIndex = (this.currentIndex + 1) % this.slides.length;
        this.showSlide(nextIndex);
    }
    
    prevSlide() {
        const prevIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
        this.showSlide(prevIndex);
    }
    
    startAutoPlay() {
        this.stopAutoPlay();
        this.autoPlayInterval = setInterval(() => this.nextSlide(), 5000);
    }
    
    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    new ImageGallery();
});
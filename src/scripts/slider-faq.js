document.addEventListener('DOMContentLoaded', function() {
            const track = document.querySelector('.slider-track');
            const cards = document.querySelectorAll('.testimonial-card');
            const prevBtn = document.querySelector('.prev-btn');
            const nextBtn = document.querySelector('.next-btn');
            const indicatorsContainer = document.querySelector('.slider-indicators');
            
            let currentIndex = 0;
            let cardsPerView = 3; // Valor por defecto para escritorio
            
            // Función para actualizar cardsPerView según el tamaño de pantalla
            function updateCardsPerView() {
                if (window.innerWidth <= 768) {
                    cardsPerView = 1; // 1 tarjeta en móviles
                } else if (window.innerWidth <= 992) {
                    cardsPerView = 2; // 2 tarjetas en tablets
                } else {
                    cardsPerView = 3; // 3 tarjetas en escritorio
                }
                updateSlider();
            }
            
            // Función para actualizar el slider
            function updateSlider() {
                const cardWidth = cards[0].offsetWidth + 30; // Ancho de tarjeta + gap
                const translateX = -currentIndex * cardWidth;
                track.style.transform = `translateX(${translateX}px)`;
                
                updateIndicators();
            }
            
            // Función para actualizar los indicadores
            function updateIndicators() {
                const indicators = document.querySelectorAll('.indicator');
                const activeIndicator = Math.floor(currentIndex / cardsPerView);
                
                indicators.forEach((indicator, index) => {
                    indicator.classList.toggle('active', index === activeIndicator);
                });
            }
            
            // Eventos para los botones de navegación
            prevBtn.addEventListener('click', () => {
                if (currentIndex > 0) {
                    currentIndex--;
                    updateSlider();
                }
            });
            
            nextBtn.addEventListener('click', () => {
                const maxIndex = cards.length - cardsPerView;
                if (currentIndex < maxIndex) {
                    currentIndex++;
                    updateSlider();
                }
            });
            
            // Inicializar el slider
            updateCardsPerView();
            
            // Actualizar en cambio de tamaño de ventana
            window.addEventListener('resize', updateCardsPerView);
        });
document.addEventListener('DOMContentLoaded', function() {
    const diasElement = document.getElementById('dias');
    const horasElement = document.getElementById('horas');
    const minutosElement = document.getElementById('minutos');
    const segundosElement = document.getElementById('segundos');
    const avisameBtn = document.getElementById('avisameBtn');
    const avisameModal = document.getElementById('avisameModal');
    const closeButton = avisameModal.querySelector('.close-button');

    const festivalDate = new Date('2025-07-06T00:00:00+02:00').getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const difference = festivalDate - now;

        if (difference > 0) {
            const dias = Math.floor(difference / (1000 * 60 * 60 * 24));
            const horas = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutos = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const segundos = Math.floor((difference % (1000 * 60)) / 1000);

            diasElement.textContent = String(dias).padStart(2, '0');
            horasElement.textContent = String(horas).padStart(2, '0');
            minutosElement.textContent = String(minutos).padStart(2, '0');
            segundosElement.textContent = String(segundos).padStart(2, '0');
        } else {
            diasElement.textContent = '00';
            horasElement.textContent = '00';
            minutosElement.textContent = '00';
            segundosElement.textContent = '00';
            clearInterval(countdownInterval);
        }
    }

    const countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown();

    avisameBtn.addEventListener('click', function() {
        avisameModal.style.display = "flex";
    });

    closeButton.addEventListener('click', function() {
        avisameModal.style.display = "none";
    });

    window.addEventListener('click', function(event) {
        if (event.target == avisameModal) {
            avisameModal.style.display = "none";
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {

    // --- DATI PER LE FINESTRE ---
    const riskData = {
        seismic: {
            title: 'RISCHIO SISMICO',
            description: 'La terra trema, la consapevolezza protegge. Scopri le norme vitali di comportamento per prepararti a un terremoto.',
            videoUrl: 'https://www.youtube.com/embed/h4_l_dLGk70'
        },
        hydro: {
            title: 'RISCHIO ALLUVIONE',
            description: 'Acqua e terra possono diventare una minaccia. Impara a riconoscere i segnali di alluvioni e a proteggere la tua casa e la tua vita.',
            videoUrl: 'https://www.youtube.com/embed/KgmvTMTg2PI'
        },
        fire: {
            title: 'RISCHIO INCENDI',
            description: 'Il fuoco distrugge il nostro patrimonio più prezioso. La tua attenzione è la nostra più grande risorsa contro gli incendi boschivi.',
            videoUrl: 'https://www.youtube.com/embed/Ul9DTVZMHvw'
        }
    };

    // --- ELEMENTI DEL DOM ---
    const riskButtons = document.querySelectorAll('.risk-button');
    const infoCard = document.getElementById('info-card');
    const cardContent = document.getElementById('card-content');
    const closeCardButton = document.querySelector('.close-card');

    const videoOverlay = document.getElementById('video-overlay');
    const videoPlayer = document.getElementById('video-player');
    const closeVideoButton = document.querySelector('.close-video');

    // Elementi per le Info Generali
    const infoButton = document.getElementById('info-button');
    const infoOverlay = document.getElementById('info-overlay');
    const closeInfoButton = document.querySelector('.close-info');

    // --- LOGICA PER LE FINESTRE DEI RISCHI ---
    riskButtons.forEach(button => {
        button.addEventListener('click', () => {
            const riskKey = button.dataset.risk;
            const data = riskData[riskKey];

            cardContent.innerHTML = `
                <h2>${data.title}</h2>
                <p>${data.description}</p>
                <button class="btn-video" data-video="${data.videoUrl}">
                    <i class="fas fa-play"></i> GUARDA IL VIDEO
                </button>
            `;
            
            infoCard.classList.add('show');
        });
    });

    closeCardButton.addEventListener('click', () => {
        infoCard.classList.remove('show');
    });
    
    // --- LOGICA PER IL VIDEO PLAYER ---
    document.addEventListener('click', function(e) {
        if (e.target && e.target.classList.contains('btn-video')) {
            const videoUrl = e.target.dataset.video;
            videoPlayer.src = videoUrl + "?autoplay=1"; // Aggiunto autoplay
            videoOverlay.classList.add('show');
        }
    });

    const closeVideo = () => {
        videoOverlay.classList.remove('show');
        videoPlayer.src = ''; // Interrompe la riproduzione
    };

    closeVideoButton.addEventListener('click', closeVideo);
    videoOverlay.addEventListener('click', (e) => {
        if(e.target === videoOverlay) {
             closeVideo();
        }
    });

    // --- LOGICA PER LE INFO GENERALI ---
    infoButton.addEventListener('click', () => {
        infoOverlay.classList.add('show');
    });

    const closeInfo = () => {
        infoOverlay.classList.remove('show');
    };

    closeInfoButton.addEventListener('click', closeInfo);
    infoOverlay.addEventListener('click', (e) => {
        if(e.target === infoOverlay) {
             closeInfo();
        }
    });
});

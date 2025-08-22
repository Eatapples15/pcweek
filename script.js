document.addEventListener('DOMContentLoaded', () => {

    const riskData = {
        seismic: {
            title: 'RISCHIO SISMICO',
            description: 'La terra trema, la consapevolezza protegge. Un terremoto non è prevedibile, ma prepararsi è un dovere. Scopri le norme vitali di comportamento.',
            videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' // SOSTITUISCI CON IL TUO VIDEO
        },
        hydro: {
            title: 'RISCHIO IDROGEOLOGICO',
            description: 'Acqua e terra possono diventare una minaccia. Impara a riconoscere i segnali di frane e alluvioni e a proteggere la tua casa e la tua vita.',
            videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_IDRO' // SOSTITUISCI
        },
        fire: {
            title: 'RISCHIO INCENDI',
            description: 'Il fuoco distrugge il nostro patrimonio più prezioso. Il 99% degli incendi è causato dall\'uomo. La tua attenzione è la nostra più grande risorsa.',
            videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_INCENDI' // SOSTITUISCI
        }
    };

    const riskButtons = document.querySelectorAll('.risk-button');
    const infoCard = document.getElementById('info-card');
    const cardContent = document.getElementById('card-content');
    const closeCardButton = document.querySelector('.close-card');

    const videoOverlay = document.getElementById('video-overlay');
    const videoPlayer = document.getElementById('video-player');
    const closeVideoButton = document.querySelector('.close-video');

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
    
    // Event delegation for video button
    document.addEventListener('click', function(e) {
        if (e.target && e.target.classList.contains('btn-video')) {
            const videoUrl = e.target.dataset.video;
            videoPlayer.src = videoUrl;
            videoOverlay.classList.add('show');
        }
    });

    closeVideoButton.addEventListener('click', () => {
        videoOverlay.classList.remove('show');
        videoPlayer.src = ''; // Interrompe la riproduzione
    });
    
    videoOverlay.addEventListener('click', (e) => {
        if(e.target === videoOverlay) {
             videoOverlay.classList.remove('show');
             videoPlayer.src = '';
        }
    });
});

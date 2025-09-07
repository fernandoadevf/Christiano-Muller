// Configuração dos links (personalizável)
const linksConfig = {
    instagram: {
        title: 'Instagram',
        url: 'https://instagram.com/fernandoarantes.ia',
        icon: 'fab fa-instagram'
    },
    whatsapp: {
        title: 'WhatsApp',
        url: 'https://wa.me/5511999999999',
        icon: 'fab fa-whatsapp'
    },
    website: {
        title: 'novaai-tecnologia.vercel.app',
        url: 'https://novaai-tecnologia.vercel.app',
        icon: 'fas fa-globe'
    },
    consultoria: {
        title: 'Consultoria de IA',
        url: 'https://calendly.com/ainova-adm/consultoria-ia',
        icon: 'fas fa-robot'
    }
};

// Configuração do perfil
const profileConfig = {
    username: 'fernandoarantes.ia',
    bio: 'Criando conteúdo, apps e automações que fazem diferença.',
    profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    socialLinks: {
        instagram: 'https://instagram.com/fernandoarantes.ia',
        whatsapp: 'https://wa.me/5511999999999'
    }
};

// Carregar configurações externas se disponível
function loadExternalConfig() {
    if (typeof PROFILE_CONFIG !== 'undefined') {
        Object.assign(profileConfig, PROFILE_CONFIG);
    }
    if (typeof LINKS_CONFIG !== 'undefined') {
        Object.assign(linksConfig, LINKS_CONFIG);
    }
}

// Elementos DOM
const elements = {
    profileImage: document.getElementById('profileImage'),
    username: document.querySelector('.username'),
    bio: document.querySelector('.bio'),
    instagramLink: document.getElementById('instagramLink'),
    whatsappLink: document.getElementById('whatsappLink'),
    websiteLink: document.getElementById('websiteLink'),
    consultoriaLink: document.getElementById('consultoriaLink'),
    linkModal: document.getElementById('linkModal'),
    closeModal: document.getElementById('closeModal'),
    cancelEdit: document.getElementById('cancelEdit'),
    saveLink: document.getElementById('saveLink'),
    linkTitle: document.getElementById('linkTitle'),
    linkUrl: document.getElementById('linkUrl'),
    linkIcon: document.getElementById('linkIcon')
};

// Estado da aplicação
let editingLink = null;



// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    loadExternalConfig();
    initializeApp();
    setupEventListeners();
    


// Inicializar aplicação
function initializeApp() {
    // Aplicar configurações do perfil
    elements.username.textContent = profileConfig.username;
    elements.bio.textContent = profileConfig.bio;
    elements.profileImage.src = profileConfig.profileImage;
    
    // Aplicar configurações dos links
    updateLinks();
    
    // Adicionar animações de entrada
    addEntranceAnimations();
    

}



// Inicializar player do Spotify
function initializeSpotifyPlayer() {
    const accessToken = localStorage.getItem('spotify_access_token');
    if (!accessToken) return;

    // Verificar se o SDK está carregado
    if (typeof Spotify === 'undefined') {
        showSpotifyError('SDK do Spotify não carregado');
        return;
    }

    try {
        spotifyPlayer = new Spotify.Player({
            name: 'Linktree Spotify Player',
            getOAuthToken: cb => { cb(accessToken); }
        });

        // Event listeners do player
        spotifyPlayer.addListener('ready', ({ device_id }) => {
            deviceId = device_id;
            updatePlayerStatus('Conectado ao Spotify', 'success');
            showPlayerContent();
            getCurrentTrack();
        });

        spotifyPlayer.addListener('not_ready', () => {
            updatePlayerStatus('Dispositivo não está pronto', 'error');
        });

        spotifyPlayer.addListener('initialization_error', ({ message }) => {
            showSpotifyError(`Erro de inicialização: ${message}`);
        });

        spotifyPlayer.addListener('authentication_error', ({ message }) => {
            showSpotifyError(`Erro de autenticação: ${message}`);
        });

        spotifyPlayer.addListener('account_error', ({ message }) => {
            showSpotifyError(`Erro de conta: ${message}`);
        });

        spotifyPlayer.addListener('playback_error', ({ message }) => {
            showSpotifyError(`Erro de reprodução: ${message}`);
        });

        // Eventos de playback
        spotifyPlayer.addListener('player_state_changed', state => {
            if (state) {
                updatePlaybackState(state);
            }
        });

        // Conectar ao player
        spotifyPlayer.connect();

    } catch (error) {
        showSpotifyError(`Erro ao criar player: ${error.message}`);
    }
}

// Obter música atual
async function getCurrentTrack() {
    const accessToken = localStorage.getItem('spotify_access_token');
    if (!accessToken) return;

    try {
        const response = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });

        if (response.ok) {
            const data = await response.json();
            if (data.item) {
                updateTrackInfo(data.item);
                updatePlaybackState(data);
            }
        }
    } catch (error) {
        console.error('Erro ao obter música atual:', error);
    }
}

// Atualizar informações da música
function updateTrackInfo(track) {
    currentTrack = track;
    
    elements.trackName.textContent = track.name;
    elements.trackArtist.textContent = track.artists.map(artist => artist.name).join(', ');
    elements.trackAlbum.textContent = track.album.name;
    
    // Atualizar capa do álbum
    if (track.album.images.length > 0) {
        const img = document.createElement('img');
        img.src = track.album.images[0].url;
        img.alt = track.album.name;
        elements.albumArt.innerHTML = '';
        elements.albumArt.appendChild(img);
    }
}

// Atualizar estado de reprodução
function updatePlaybackState(state) {
    isPlaying = !state.paused;
    
    // Atualizar botão de play/pause
    if (isPlaying) {
        elements.playIcon.className = 'fas fa-pause';
    } else {
        elements.playIcon.className = 'fas fa-play';
    }
    
    // Atualizar progresso
    if (state.item) {
        const progress = (state.position / state.item.duration_ms) * 100;
        elements.progressFill.style.width = `${progress}%`;
        
        // Atualizar tempo
        elements.currentTime.textContent = formatTime(state.position);
        elements.totalTime.textContent = formatTime(state.item.duration_ms);
    }
}

// Alternar play/pause
async function togglePlay() {
    if (!deviceId) return;
    
    const accessToken = localStorage.getItem('spotify_access_token');
    if (!accessToken) return;

    try {
        const endpoint = isPlaying ? 'pause' : 'play';
        await fetch(`https://api.spotify.com/v1/me/player/${endpoint}`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                device_id: deviceId
            })
        });
    } catch (error) {
        console.error('Erro ao alternar reprodução:', error);
    }
}

// Música anterior
async function previousTrack() {
    if (!deviceId) return;
    
    const accessToken = localStorage.getItem('spotify_access_token');
    if (!accessToken) return;

    try {
        await fetch('https://api.spotify.com/v1/me/player/previous', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                device_id: deviceId
            })
        });
    } catch (error) {
        console.error('Erro ao pular para música anterior:', error);
    }
}

// Próxima música
async function nextTrack() {
    if (!deviceId) return;
    
    const accessToken = localStorage.getItem('spotify_access_token');
    if (!accessToken) return;

    try {
        await fetch('https://api.spotify.com/v1/me/player/next', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                device_id: deviceId
            })
        });
    } catch (error) {
        console.error('Erro ao pular para próxima música:', error);
    }
}

// Formatar tempo
function formatTime(ms) {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

// Atualizar status do player
function updatePlayerStatus(message, type = 'info') {
    elements.playerStatus.innerHTML = `<i class="fas fa-spotify"></i><span>${message}</span>`;
    elements.playerStatus.className = `player-status ${type}`;
}

// Mostrar conteúdo do player
function showPlayerContent() {
    elements.playerContent.style.display = 'block';
    elements.playerError.style.display = 'none';
}

// Mostrar erro do Spotify
function showSpotifyError(message) {
    elements.playerError.querySelector('p').textContent = message;
    elements.playerError.style.display = 'block';
    elements.playerContent.style.display = 'none';
    updatePlayerStatus('Erro de conexão', 'error');
}

// Tentar conexão novamente
function retryConnection() {
    localStorage.removeItem('spotify_access_token');
    elements.playerError.style.display = 'none';
    updatePlayerStatus('Conectando ao Spotify...', 'info');
    connectToSpotify();
}

// Configurar event listeners
function setupEventListeners() {
    // Links de redes sociais
    elements.instagramIcon.addEventListener('click', (e) => {
        e.preventDefault();
        openLink(profileConfig.socialLinks.instagram);
    });
    
    elements.whatsappIcon.addEventListener('click', (e) => {
        e.preventDefault();
        openLink(profileConfig.socialLinks.whatsapp);
    });
    
    // Links de redes sociais
    elements.instagramIcon.addEventListener('click', (e) => {
        e.preventDefault();
        openLink(profileConfig.socialLinks.instagram);
    });
    
    elements.whatsappIcon.addEventListener('click', (e) => {
        e.preventDefault();
        openLink(profileConfig.socialLinks.whatsapp);
    });
    
    // Links principais
    elements.instagramLink.addEventListener('click', (e) => {
        e.preventDefault();
        openLink(linksConfig.instagram.url);
    });
    
    elements.whatsappLink.addEventListener('click', (e) => {
        e.preventDefault();
        openLink(linksConfig.whatsapp.url);
    });
    
    elements.websiteLink.addEventListener('click', (e) => {
        e.preventDefault();
        openLink(linksConfig.website.url);
    });
    
    elements.consultoriaLink.addEventListener('click', (e) => {
        e.preventDefault();
        openLink(linksConfig.consultoria.url);
    });
    
    // Modal
    elements.closeModal.addEventListener('click', closeModal);
    elements.cancelEdit.addEventListener('click', closeModal);
    elements.saveLink.addEventListener('click', saveLinkChanges);
    
    // Fechar modal ao clicar fora
    window.addEventListener('click', (e) => {
        if (e.target === elements.linkModal) {
            closeModal();
        }
    });
    
    // Adicionar funcionalidade de edição aos links (clique longo)
    setupLinkEditing();
}

// Atualizar links com configurações
function updateLinks() {
    elements.instagramLink.querySelector('span').textContent = linksConfig.instagram.title;
    elements.whatsappLink.querySelector('span').textContent = linksConfig.whatsapp.title;
    elements.websiteLink.querySelector('span').textContent = linksConfig.website.title;
    elements.consultoriaLink.querySelector('span').textContent = linksConfig.consultoria.title;
}

// Adicionar animações de entrada
function addEntranceAnimations() {
    const sections = document.querySelectorAll('.profile-section, .links-section, .cta-section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}







// Abrir link
function openLink(url) {
    // Adicionar efeito de clique
    const link = event.currentTarget;
    link.style.transform = 'scale(0.95)';
    setTimeout(() => {
        link.style.transform = '';
        window.open(url, '_blank');
    }, 150);
}

// Configurar edição de links
function setupLinkEditing() {
    const links = [elements.instagramLink, elements.whatsappLink, elements.websiteLink, elements.consultoriaLink];
    
    links.forEach((link, index) => {
        let pressTimer;
        
        link.addEventListener('mousedown', () => {
            pressTimer = setTimeout(() => {
                openEditModal(index);
            }, 500);
        });
        
        link.addEventListener('mouseup', () => {
            clearTimeout(pressTimer);
        });
        
        link.addEventListener('mouseleave', () => {
            clearTimeout(pressTimer);
        });
        
        // Para dispositivos móveis
        link.addEventListener('touchstart', () => {
            pressTimer = setTimeout(() => {
                openEditModal(index);
            }, 500);
        });
        
        link.addEventListener('touchend', () => {
            clearTimeout(pressTimer);
        });
    });
}

// Abrir modal de edição
function openEditModal(linkIndex) {
    const linkKeys = ['instagram', 'whatsapp', 'website', 'consultoria'];
    const linkKey = linkKeys[linkIndex];
    const link = linksConfig[linkKey];
    
    editingLink = linkKey;
    elements.linkTitle.value = link.title;
    elements.linkUrl.value = link.url;
    elements.linkIcon.value = link.icon;
    
    elements.linkModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Foco no primeiro campo
    setTimeout(() => {
        elements.linkTitle.focus();
    }, 100);
}

// Fechar modal
function closeModal() {
    elements.linkModal.style.display = 'none';
    document.body.style.overflow = '';
    editingLink = null;
    
    // Limpar campos
    elements.linkTitle.value = '';
    elements.linkUrl.value = '';
    elements.linkIcon.value = 'fas fa-link';
}

// Salvar alterações do link
function saveLinkChanges() {
    if (!editingLink) return;
    
    const title = elements.linkTitle.value.trim();
    const url = elements.linkUrl.value.trim();
    const icon = elements.linkIcon.value;
    
    if (!title || !url) {
        showNotification('Por favor, preencha todos os campos!', 'error');
        return;
    }
    
    // Validar URL
    try {
        new URL(url);
    } catch {
        showNotification('Por favor, insira uma URL válida!', 'error');
        return;
    }
    
    // Atualizar configuração
    linksConfig[editingLink] = { title, url, icon };
    
    // Atualizar interface
    updateLinks();
    
    // Salvar no localStorage
    localStorage.setItem('linksConfig', JSON.stringify(linksConfig));
    
    closeModal();
    showNotification('Link atualizado com sucesso!');
}

// Copiar para área de transferência
function copyToClipboard(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text);
    } else {
        // Fallback para navegadores antigos
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
    }
}

// Mostrar notificação
function showNotification(message, type = 'success') {
    // Remover notificação existente
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Criar nova notificação
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Estilos da notificação
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '16px 24px',
        borderRadius: '8px',
        color: type === 'error' ? '#ffffff' : '#000000',
        background: type === 'error' ? '#ff4444' : '#ffffff',
        border: '1px solid #333333',
        zIndex: '10000',
        fontSize: '14px',
        fontWeight: '500',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
        transform: 'translateX(100%)',
        transition: 'transform 0.3s ease'
    });
    
    document.body.appendChild(notification);
    
    // Animar entrada
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remover após 3 segundos
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 3000);
}

// Carregar configurações salvas
function loadSavedConfig() {
    const savedLinks = localStorage.getItem('linksConfig');
    if (savedLinks) {
        try {
            const parsed = JSON.parse(savedLinks);
            Object.assign(linksConfig, parsed);
            updateLinks();
        } catch (error) {
            console.error('Erro ao carregar configurações salvas:', error);
        }
    }
}

// Carregar configurações ao inicializar
loadSavedConfig();

// Adicionar efeitos de hover para dispositivos móveis
if ('ontouchstart' in window) {
    document.addEventListener('touchstart', function() {}, {passive: true});
}

// Adicionar suporte para PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registrado:', registration);
            })
            .catch(error => {
                console.log('SW falhou:', error);
            });
    });
}

// Adicionar analytics básico (opcional)
function trackEvent(eventName, properties = {}) {
    // Aqui você pode integrar com Google Analytics, Mixpanel, etc.
    console.log('Evento:', eventName, properties);
}

// Rastrear cliques nos links
document.addEventListener('click', (e) => {
    if (e.target.closest('.link-item')) {
        const linkText = e.target.closest('.link-item').querySelector('span').textContent;
        trackEvent('link_click', { link: linkText });
    }
});

// Adicionar suporte para teclado
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
    
    if (e.key === 'Enter' && e.target.closest('.link-item')) {
        e.target.closest('.link-item').click();
    }
});



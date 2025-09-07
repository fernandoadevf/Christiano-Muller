// ========================================
// CONFIGURAÇÃO DO LINKTREE PERSONALIZADO
// ========================================
// 
// Este arquivo contém todas as configurações que você pode personalizar
// sem precisar mexer no código principal.
// 
// Para usar, renomeie este arquivo para 'config.js' e edite as informações abaixo.

// Configuração do Perfil
const PROFILE_CONFIG = {
    // Seu nome de usuário (aparece como título principal)
    username: 'Fernando Arantes',
    
    // Sua descrição/bio (aparece abaixo do nome)
    bio: 'Criando conteúdo, apps e automações que fazem diferença.',
    
    // URL da sua foto de perfil (recomendado: 150x150px)
    profileImage: './images/fernando.jpg',
    
    // Player do Spotify (iframe)
    spotify: {
        title: '🎵 Música da Semana',
        // Player oficial do Spotify via iframe
        // Para trocar a música, altere o trackId na URL do iframe
        trackId: '62MEz6nR7fEtrUVwGLLNxq'
    },
    
    // Links das suas redes sociais (aparecem como ícones circulares)
    socialLinks: {
        instagram: 'https://instagram.com/fernandoarantes.ia',
        whatsapp: 'https://wa.me/5547991036084',
        // Adicione mais redes sociais aqui:
        // youtube: 'https://youtube.com/@seu-canal',
        // linkedin: 'https://linkedin.com/in/seu-perfil',
        // twitter: 'https://twitter.com/seu-usuario',
        // tiktok: 'https://tiktok.com/@seu-usuario'
    }
};

// Configuração dos Links Principais
const LINKS_CONFIG = {
    // Link do Instagram
    instagram: {
        title: 'Instagram',
        url: 'https://instagram.com/fernandoarantes.ia',
        icon: 'fab fa-instagram',
        color: '#E4405F' // Cor personalizada (opcional)
    },
    
    // Link do WhatsApp
    whatsapp: {
        title: 'WhatsApp',
        url: 'https://wa.me/5547991036084',
        icon: 'fab fa-whatsapp',
        color: '#25D366'
    },
    
    // Link do seu website
    website: {
        title: 'Automatize seu Negócio',
        url: 'https://novaai-tecnologia.vercel.app',
        icon: 'fas fa-globe',
        color: '#007ACC'
    },
    
    // Link de consultoria de IA
    consultoria: {
        title: 'Consultoria de IA',
        url: 'https://calendly.com/ainova-adm/consultoria-ia',
        icon: 'fas fa-robot',
        color: '#FF6B6B'
    },
    
    // Adicione mais links aqui:
    /*
    youtube: {
        title: 'YouTube',
        url: 'https://youtube.com/@seu-canal',
        icon: 'fab fa-youtube',
        color: '#FF0000'
    },
    
    linkedin: {
        title: 'LinkedIn',
        url: 'https://linkedin.com/in/seu-perfil',
        icon: 'fab fa-linkedin',
        color: '#0A66C2'
    },
    
    portfolio: {
        title: 'Portfólio',
        url: 'https://seu-portfolio.com',
        icon: 'fas fa-briefcase',
        color: '#6C5CE7'
    },
    
    blog: {
        title: 'Blog',
        url: 'https://seu-blog.com',
        icon: 'fas fa-pen-fancy',
        color: '#00B894'
    },
    
    podcast: {
        title: 'Podcast',
        url: 'https://seu-podcast.com',
        icon: 'fas fa-podcast',
        color: '#FF6B6B'
    },
    
    newsletter: {
        title: 'Newsletter',
        url: 'https://seu-newsletter.com',
        icon: 'fas fa-envelope',
        color: '#4ECDC4'
    }
    */
};

// Configuração do Botão CTA (Call to Action)
const CTA_CONFIG = {
    // Texto do botão
    text: 'Junte-se a fernandoarantes.ia no Linktree',
    
    // URL para onde o botão leva
    url: 'https://linktr.ee',
    
    // Cor de fundo do botão (opcional)
    backgroundColor: '#ffffff',
    
    // Cor do texto do botão (opcional)
    textColor: '#000000'
};

// Configuração do Tema
const THEME_CONFIG = {
    // Tema padrão ('dark' ou 'light')
    defaultTheme: 'dark',
    
    // Cores personalizadas do tema escuro
    darkTheme: {
        background: '#000000',
        text: '#ffffff',
        linkBackground: '#1a1a1a',
        linkBorder: '#333333',
        linkHover: '#2a2a2a'
    },
    
    // Cores personalizadas do tema claro
    lightTheme: {
        background: '#ffffff',
        text: '#000000',
        linkBackground: '#f5f5f5',
        linkBorder: '#e0e0e0',
        linkHover: '#e8e8e8'
    }
};

// Configuração das Animações
const ANIMATION_CONFIG = {
    // Habilitar/desabilitar animações
    enabled: true,
    
    // Duração das animações (em milissegundos)
    duration: 600,
    
    // Delay entre as animações dos elementos
    staggerDelay: 200,
    
    // Tipo de easing das animações
    easing: 'ease-out'
};

// Configuração das Notificações
const NOTIFICATION_CONFIG = {
    // Duração das notificações (em milissegundos)
    duration: 3000,
    
    // Posição das notificações ('top-right', 'top-left', 'bottom-right', 'bottom-left')
    position: 'top-right',
    
    // Habilitar/desabilitar notificações
    enabled: true
};

// Configuração do Analytics (opcional)
const ANALYTICS_CONFIG = {
    // Habilitar/desabilitar tracking de eventos
    enabled: false,
    
    // Google Analytics ID (se tiver)
    googleAnalyticsId: '',
    
    // Mixpanel Token (se tiver)
    mixpanelToken: '',
    
    // Eventos para rastrear
    trackEvents: [
        'link_click',
        'theme_change',
        'share_click',
        'profile_click'
    ]
};

// Configuração do SEO
const SEO_CONFIG = {
    // Título da página
    pageTitle: 'fernandoarantes.ia | Linktree Personalizado',
    
    // Meta descrição
    metaDescription: 'Criando conteúdo, apps e automações que fazem diferença. Acesse todos os meus links importantes em um só lugar.',
    
    // Palavras-chave
    keywords: 'fernandoarantes, linktree, links, redes sociais, portfolio, tecnologia, automação',
    
    // URL da imagem de compartilhamento (Open Graph)
    ogImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=630&fit=crop&crop=face',
    
    // URL do site
    siteUrl: 'https://seu-dominio.com'
};

// Configuração do Footer
const FOOTER_CONFIG = {
    // Links do footer
    links: [
        {
            text: 'Cookie Preferences',
            url: '#',
            icon: 'fas fa-cookie-bite'
        },
        {
            text: 'Report',
            url: '#',
            icon: 'fas fa-flag'
        },
        {
            text: 'Privacy',
            url: '#',
            icon: 'fas fa-shield-alt'
        }
    ],
    
    // Texto de copyright
    copyright: '© 2024 fernandoarantes.ia. Todos os direitos reservados.',
    
    // Habilitar/desabilitar footer
    enabled: true
};

// Configuração de Funcionalidades
const FEATURES_CONFIG = {
    // Habilitar/desabilitar funcionalidades
    themeToggle: true,
    shareButton: true,
    linkEditing: true,
    notifications: true,
    animations: true,
    responsive: true,
    
    // Configuração da edição de links
    linkEditingConfig: {
        // Tempo de clique longo para abrir modal (em milissegundos)
        longPressDelay: 500,
        
        // Habilitar validação de URLs
        urlValidation: true,
        
        // Permitir edição de ícones
        allowIconEditing: true
    }
};

// ========================================
// INSTRUÇÕES DE USO
// ========================================
//
// 1. Edite as configurações acima conforme sua necessidade
// 2. Salve o arquivo
// 3. Abra o index.html no navegador
// 4. Seus links e configurações estarão aplicados
//
// ========================================
// NOTAS IMPORTANTES
// ========================================
//
// - Todas as URLs devem começar com 'https://'
// - As imagens devem ser de boa qualidade e otimizadas
// - Teste em diferentes dispositivos para garantir responsividade
// - Mantenha backup das suas configurações
//
// ========================================

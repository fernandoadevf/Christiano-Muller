import React from 'react';
import { ChevronRight } from 'lucide-react';
import { FaInstagram, FaTiktok, FaWhatsapp, FaYoutube } from 'react-icons/fa';

interface LinkItem {
  id: string;
  title: string;
  url: string;
  icon: React.ReactNode;
  color: string;
}

const links: LinkItem[] = [
  {
    id: 'instagram',
    title: 'Instagram',
    url: 'https://www.instagram.com/christiano.muller/',
    icon: <FaInstagram className="w-5 h-5" />,
    color: '#E4405F'
  },
  {
    id: 'whatsapp',
    title: 'Investimentos no Paraguai',
    url: 'https://wa.link/o73kip',
    icon: <FaWhatsapp className="w-5 h-5" />,
    color: '#25D366'
  },
  {
    id: 'tiktok',
    title: 'TikTok @riosemuller',
    url: 'https://www.tiktok.com/@riosemuller',
    icon: <FaTiktok className="w-5 h-5" />,
    color: '#007ACC'
  },
  {
    id: 'tiktok2',
    title: 'TikTok Christiano Muller',
    url: 'https://www.tiktok.com/@christianomullerd',
    icon: <FaTiktok className="w-5 h-5" />,
    color: '#007ACC'
  },
  {
    id: 'youtube',
    title: 'Youtube',
    url: 'https://www.youtube.com/@RiosM%C3%BCller',
    icon: <FaYoutube className="w-5 h-5" />,
    color: '#FF6B6B'
  }
];

const Linktree: React.FC = () => {
  const handleLinkClick = (url: string) => {
    window.open(url, '_blank');
  };

  const renderIcon = (icon: React.ReactNode, color: string) => {
    if (React.isValidElement(icon)) {
      return React.cloneElement(icon, {
        className: "w-5 h-5",
        style: { color }
      } as any);
    }
    return icon;
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full space-y-6 z-10">
        {/* Seção do perfil */}
        <div className="text-center space-y-4">
          <div className="relative">
            <div className="w-24 h-24 rounded-full mx-auto border-4 border-white/20 shadow-2xl overflow-hidden">
              <img 
                src="/images/teste22.png" 
                alt="Christiano Muller" 
                className="w-full h-full object-cover object-center scale-125"
              />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-white">Christiano Muller</h1>
          <p className="text-white/80 text-sm leading-relaxed">
          O seu assessor de investimentos no Paraguai 🇧🇷🇵🇾.
          </p>
        </div>

        {/* Player removido conforme solicitado */}

        {/* Links */}
        <div className="space-y-3">
          {links.map((link) => (
            <button
              key={link.id}
              className="w-full h-16 bg-white/10 backdrop-blur-lg border border-white/20 text-white hover:bg-white/20 hover:border-white/40 transition-all duration-300 group relative overflow-hidden rounded-2xl"
              onClick={() => handleLinkClick(link.url)}
            >
              <span className="flex items-center justify-between w-full px-6">
                <span className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg" style={{ backgroundColor: `${link.color}20` }}>
                    {renderIcon(link.icon, link.color)}
                  </div>
                  <span className="font-medium">{link.title}</span>
                </span>
                
                {/* Efeito de seta que desliza */}
                <div className="relative">
                  <ChevronRight className="w-5 h-5 transition-all duration-500 group-hover:translate-x-1 group-hover:scale-110" />
                </div>
              </span>
              
              {/* Efeito de brilho que desliza */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </button>
          ))}
        </div>

        {/* Footer */}
        <footer className="text-center pt-6">
          <p className="text-white/60 text-xs">
            Feito por{' '}
            <a href="#" className="text-white/80 hover:text-white transition-colors">
              Fernando Arantes
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Linktree;

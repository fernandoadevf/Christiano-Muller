import React, { useEffect, useRef, useState } from 'react'

const BackgroundVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
   
    // Configurações iniciais críticas para autoplay
    video.muted = true
    video.defaultMuted = true
    video.playsInline = true
    video.setAttribute('playsinline', '')
    video.setAttribute('webkit-playsinline', '')
    video.setAttribute('muted', '')
    
    // Função para tentar reproduzir com várias estratégias
    const attemptPlay = async () => {
      video.muted = true
      
      try {
        await video.play()
        setIsPlaying(true)
        console.log('Vídeo iniciado com sucesso')
      } catch {
        console.log('Falha ao iniciar vídeo')
        setIsPlaying(false)
      }
    }
    
    // Eventos para tentar reproduzir em vários momentos
    const events = ['loadedmetadata', 'canplay', 'canplaythrough']
    events.forEach(event => {
      video.addEventListener(event, () => attemptPlay())
    })
    
    // Tenta reproduzir quando a visibilidade muda
    const handleVisibility = () => {
      if (!document.hidden && !isPlaying) {
        attemptPlay()
      }
    }
    document.addEventListener('visibilitychange', handleVisibility)
    
    // Tenta reproduzir imediatamente
    attemptPlay()
    
    // Tenta novamente após um pequeno atraso (para iOS)
    const timer = setTimeout(() => {
      if (!isPlaying) attemptPlay()
    }, 500)
    
    return () => {
      events.forEach(event => {
        video.removeEventListener(event, () => attemptPlay())
      })
      document.removeEventListener('visibilitychange', handleVisibility)
      clearTimeout(timer)
    }
  }, [])




  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center">
      <video
        ref={videoRef}
        className="bg-video w-auto h-auto max-w-full max-h-full object-contain opacity-50"
        src="/videos/teste-23s-muted.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        controls={false}
        controlsList="nodownload nofullscreen noplaybackrate"
        disablePictureInPicture
      >
        <source src="/videos/teste-23s-muted.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/40" />
    </div>
  )
}

export default BackgroundVideo
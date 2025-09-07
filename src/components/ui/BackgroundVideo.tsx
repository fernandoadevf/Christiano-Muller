import React, { useEffect, useRef } from 'react'

const BackgroundVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Tenta tocar o vídeo automaticamente
    const tryPlay = async () => {
      try {
        video.muted = true        // precisa estar mutado
        video.playsInline = true   // obrigatório no mobile
        await video.play()
      } catch {
        // se falhar, não quebra nada
      }
    }

    void tryPlay()
  }, [])

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center">
      <video
        ref={videoRef}
        className="bg-video w-auto h-auto max-w-full max-h-full object-contain opacity-50"
        src="/videos/teste-23s-muted.mp4"
        autoPlay
        muted           // mutado por padrão
        loop
        playsInline     // ESSENCIAL para mobile
        preload="auto"
        controls={false}
        controlsList="nodownload nofullscreen noplaybackrate"
        disablePictureInPicture
      />
      <div className="absolute inset-0 bg-black/40" />
    </div>
  )
}

export default BackgroundVideo
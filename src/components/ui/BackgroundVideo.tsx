import React, { useEffect, useRef } from 'react'

const BackgroundVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const setInlineProps = () => {
      try {
        video.muted = true
        video.playsInline = true as unknown as boolean
        // Garantir atributos inline específicos de mobile
        video.setAttribute('playsinline', '')
        video.setAttribute('webkit-playsinline', '')
        video.setAttribute('muted', '')
        video.setAttribute('autoplay', '')
        video.setAttribute('loop', '')
      } catch {}
    }

    const tryPlay = async () => {
      setInlineProps()
      try {
        await video.play()
      } catch {
        // autoplay silencioso pode ser bloqueado, garantimos muted e playsInline
        video.muted = true
        try { await video.play() } catch {}
      }
    }

    const handleCanPlay = () => { void tryPlay() }
    const handleLoadedMetadata = () => { void tryPlay() }
    const handleVisibility = () => { if (!document.hidden) void tryPlay() }
    const handleInteraction = () => { void tryPlay() }

    video.addEventListener('canplay', handleCanPlay)
    video.addEventListener('loadedmetadata', handleLoadedMetadata)
    document.addEventListener('visibilitychange', handleVisibility)
    document.addEventListener('touchstart', handleInteraction, { passive: true, once: true } as AddEventListenerOptions)
    document.addEventListener('click', handleInteraction, { once: true } as AddEventListenerOptions)

    // Dispara uma primeira tentativa
    void tryPlay()

    return () => {
      video.removeEventListener('canplay', handleCanPlay)
      video.removeEventListener('loadedmetadata', handleLoadedMetadata)
      document.removeEventListener('visibilitychange', handleVisibility)
      document.removeEventListener('touchstart', handleInteraction as EventListener)
      document.removeEventListener('click', handleInteraction as EventListener)
    }
  }, [])

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center">
      <video
        ref={videoRef}
        className="w-auto h-auto max-w-full max-h-full object-contain opacity-50"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        controls={false}
        controlsList="nodownload nofullscreen noplaybackrate"
        disablePictureInPicture
      >
        <source src="/videos/teste-23s.mp4" type="video/mp4" />
     
      </video>
      <div className="absolute inset-0 bg-black/40" />
    </div>
  )
}

export default BackgroundVideo



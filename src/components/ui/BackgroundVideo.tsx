import React, { useEffect, useRef } from 'react'

const BackgroundVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const tryPlay = async () => {
      try {
        await video.play()
      } catch {
        // autoplay silencioso pode ser bloqueado, garantimos muted e playsInline
        video.muted = true
        try { await video.play() } catch {}
      }
    }

    // Inicia somente em mobile; tailwind cuidará da visibilidade
    tryPlay()
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
        preload="metadata"
       
      >
        <source src="/videos/teste-23s.mp4" type="video/mp4" />
     
      </video>
      <div className="absolute inset-0 bg-black/40" />
    </div>
  )
}

export default BackgroundVideo



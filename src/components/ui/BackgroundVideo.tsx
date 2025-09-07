import React, { useEffect, useRef } from 'react'

const BackgroundVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const setInlineProps = () => {
      try {
        video.muted = true
        video.playsInline = true
        video.setAttribute('loop', '')
      } catch {}
    }

    const tryPlay = async () => {
      setInlineProps()
      try {
        await video.play()
      } catch {
        video.muted = true
        try { await video.play() } catch {}
      }
    }

    const handleVisibility = () => { if (!document.hidden) void tryPlay() }
    document.addEventListener('visibilitychange', handleVisibility)

    // Dispara uma primeira tentativa
    void tryPlay()

    return () => {
      document.removeEventListener('visibilitychange', handleVisibility)
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



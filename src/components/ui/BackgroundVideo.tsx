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


export default BackgroundVideo
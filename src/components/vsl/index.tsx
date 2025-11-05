import React, { useRef, useEffect, useState } from 'react'
import { VslContent } from './styles'

export function Vsl() {
  const meuIframeRef = useRef<HTMLIFrameElement>(null)
  const [iframeHeight, setIframeHeight] = useState('')

  // Função para ajustar a altura do iframe com base na largura
  const ajustarAltura = () => {
    if (meuIframeRef.current) {
      const width = meuIframeRef.current.clientWidth // Obter a largura do iframe
      const scaleFactor = 0.56267 // Fator de escala de 10%, você pode ajustar conforme necessário
      const newHeight = `${width * scaleFactor}px` // Calcula a nova altura em pixels
      setIframeHeight(newHeight) // Define a nova altura para o estado
    }
  }

  // Chamando a função ajustarAltura quando o componente for renderizado e toda vez que o tamanho da janela mudar
  useEffect(() => {
    ajustarAltura()
    const handleResize = () => ajustarAltura()
    window.addEventListener('resize', handleResize)

    // Remover o listener quando o componente for desmontado para evitar memory leaks
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <VslContent>
      <iframe
        ref={meuIframeRef}
        src="https://player-vz-38f826c0-ab4.tv.pandavideo.com.br/embed/?v=9277ebb8-021e-4e28-8250-6a2f489c5603"
        id="panda-9277ebb8-021e-4e28-8250-6a2f489c5603"
        referrerPolicy="origin"
        style={{
          height: iframeHeight,
          border: 'none',
        }}
      />
    </VslContent>
  )
}

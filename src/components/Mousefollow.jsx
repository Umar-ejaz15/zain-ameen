import React, { useState, useEffect } from 'react'

const MouseFollow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHoveringText, setIsHoveringText] = useState(false)
  const [isMoving, setIsMoving] = useState(false)

  useEffect(() => {
    let timeoutId
    let animationFrameId

    const handleMouseMove = (e) => {
      setIsMoving(true)
      clearTimeout(timeoutId)
      
      timeoutId = setTimeout(() => {
        setIsMoving(false)
      }, 100)

      // Use requestAnimationFrame for smoother updates
      cancelAnimationFrame(animationFrameId)
      animationFrameId = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY })
        const hoveredElement = document.elementFromPoint(e.clientX, e.clientY)
        if (hoveredElement?.tagName === 'P' || 
            hoveredElement?.tagName === 'H1' || 
            hoveredElement?.tagName === 'H2' || 
            hoveredElement?.tagName === 'H3' || 
            hoveredElement?.tagName === 'SPAN' ||
            hoveredElement?.tagName === 'A' ||
            hoveredElement?.tagName === 'BUTTON' ||
            hoveredElement?.tagName === 'INPUT') {
          setIsHoveringText(true)
        } else {
          setIsHoveringText(false)
        }
      })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      clearTimeout(timeoutId)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div 
      className="fixed z-50 pointer-events-none select-none rounded-full bg-white/60 will-change-transform"
      style={{ 
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: isHoveringText ? '50px' : '22px',
        height: isHoveringText ? '50px' : '22px',
        opacity: isMoving ? 0.9 : 0.6,
        transform: `translate(-50%, -50%) scale(${isMoving ? 0.8 : 1})`,
        transition: 'width 0.3s ease-out, height 0.3s ease-out, opacity 0.2s ease-out, transform 0.2s ease-out',
        mixBlendMode: 'difference',
        backdropFilter: 'invert(1)',
      }}
    />
  )
}

export default MouseFollow
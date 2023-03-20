import React from 'react'
import { useCanvas } from './CanvasContext'

export const ClearCanvasButton = () => {
  const { clearCanvas } = useCanvas()

  return <button style={{marginRight : "10%",marginTop:"5%",marginLeft:"337px"}} onClick={clearCanvas}>clear canvas</button>
}
import React, { useEffect } from "react";
import { useCanvas } from "./CanvasContext";

export function Canvas(props) {
  const image = props;
  console.log(image)
  const {
    canvasRef,
    prepareCanvas,
    startDrawing,
    finishDrawing,
    draw,
  } = useCanvas();

  useEffect(() => {
    prepareCanvas();
  }, []);

  return (
    <canvas
      onMouseDown={startDrawing}
      onMouseUp={finishDrawing}
      onMouseMove={draw}
      ref={canvasRef}
      image={image}
    />
  );
}
import React, { useEffect } from "react";
import { useCanvas } from "./CanvasContext";

export function Canvas(props) {
  const image = props;
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

  useEffect(() => {
    copyImageToCanvas()
  }, [image]);

  function copyImageToCanvas() {
    let image = document.querySelector("img");

    let canvas = document.querySelector("canvas");

    let ctx = canvas.getContext("2d");

    ctx.drawImage(image, 0, 0,);

  }

  const saveImageToLocal = (event) => {
    let link = event.currentTarget;
    link.setAttribute('download', 'canvas.png');
    let image = canvasRef.current.toDataURL('image/png');
    link.setAttribute('href', image);
  };

  return (
    <div>
      <canvas
        onMouseDown={startDrawing}
        onMouseUp={finishDrawing}
        onMouseMove={draw}
        ref={canvasRef}
      >
      </canvas>
      <a id="download_image_link" href="download_link" onClick={saveImageToLocal}>Download Image</a>
    </div>
  );
}
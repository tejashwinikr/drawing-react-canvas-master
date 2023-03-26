import React, { useState } from 'react'
import { Canvas } from './Canvas'
import { ClearCanvasButton } from './ClearCanvasButton';

function App() {
  const [imgs, setImgs] = useState()

  const handleFile = (e) => {

    const data = new FileReader()
    data.addEventListener('load', () => {
      setImgs(data.result)
    })
    data.readAsDataURL(e.target.files[0])
  }

  //console.log(imgs)
  return (
    <>
      <form className='file-form'>
        <input type="file" name="picture" onChange={e => handleFile(e)}>
        </input>
      </form>
      <img src={imgs} alt="imag" height="200px" width="200px">
      </img>
      <div className='canvas-container'>
        <Canvas image={imgs} />
        <ClearCanvasButton />
      </div>

    </>
  );
}

export default App;

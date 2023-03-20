import React from 'react'
import { useState } from "react";
import { Canvas } from './Canvas'
import { ClearCanvasButton } from './ClearCanvasButton';

function App() {
  const [imgs,setImgs] =useState()
  const [imageuploaded,setImageUploaded] = useState();


  const handleFile =(e) =>{
    setImageUploaded(e.target.files)
    console.log(e.target.files);
    console.log(imageuploaded)
   
    console.log(e.target.files)
        const data = new FileReader()
        data.addEventListener('load',()=>{
            setImgs(data.result)
        })
        data.readAsDataURL(e.target.files[0])
    }

    console.log(imgs)
  return (
    <>
      <form>
      <input type="file" name="picture" onChange={e => handleFile(e)}>
      
      </input>
    </form>
 

    <img src={imgs} alt="imag" height="200px" width="200px">
    </img>
      <Canvas image={imgs}/>
      <ClearCanvasButton/>
    </>
  );
}

export default App;

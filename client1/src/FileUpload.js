import React, { useState } from 'react'
import axios from 'axios'

function FileUpload() {
    const [file,setFile]=useState()
    const upload = () => {
        const formData = new FormData();
        formData.append('file', file);
        axios.post('http://localhost:5000/upload',formData )
        .then( res => {
            alert("file Uploaded successfully.");
            setFile(null);
    })
        .catch(er => console.log(er))
      }
  return (
    <div>
      <input type="file" onChange={(e) => setFile(e.target.files[0])}/>
      <button type="button" onClick={upload}>Upload</button>
    </div>
  )
}

export default FileUpload
import React, { useState } from "react";
import axios from "axios";

function FileUploaded() {
  const [file, setFile] = useState();

  function handleChange(event) {
    //setFile(event.target.files[0])
    // setFile(URL.createObjectURL(event.target.files[0]));

    setFile({
      /* contains the preview, if you want to show the picture to the user
         you can access it with this.state.currentPicture
     */
      // picturePreview : URL.createObjectURL(e.target.files[0]),
      /* this contains the file we want to send */
      file: event.target.files[0],
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const url = 'https://e984-103-169-236-82.in.ngrok.io/upload';
    // const formData = new FormData();
    // formData.append('file', file);
    // console.log(file);
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials':true
      },
    };

    
    const formData = new FormData();
    
    formData.append("image", file);
    // formData.append('fileName', file.name);
    axios.post(url, formData, config).then((response) => {
        console.log(response);
      });


    // for (var key of formData.entries()) {
    //   console.log(key[0] + ", " + key[1]);
    // }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>React File Upload</h1>

        <input type="file" onChange={handleChange} />
        <img src={file} alt="uploaded" className="imageuploaded" />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default FileUploaded;

//   const submitForm = () => {
//     const formData = new FormData();
//     formData.append("name", name);
//     formData.append("file", selectedFile);

//   const [name, setName] = useState("");
//       <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />

// import React, {useRef} from 'react'

// export default FileUploader = ({onFileSelect}) => {
//     const fileInput = useRef(null)

//     const handleFileInput = (e) => {
//         const file = e.target.files[0];
//         if (file.size > 1024)
//           onFileSelect({ error: "File size cannot exceed more than 1MB" });
//         else onFileSelectSuccess(file);
//     }

//     return (
//         <div className='file-uploader'>
//             <input type="file" onChange={handleFileInput}>
//             <button onClick={e => fileInput.current && fileInput.current.click()} className="btn btn-primary">
//         </button></input>
//         </div>
//     )
// }
// import "./App.css";
// import { useState } from "react";
// import FileUploaded from "./FileUploaded";
// import axios from 'axios'

// function App() {

//   const submitForm = () => {
//     const formData = new FormData();
//     formData.append("name", name);
//     formData.append("file", selectedFile);

//     axios
//       .post(UPLOAD_URL, formData)
//       .then((res) => {
//         alert("File Upload success");
//       })
//       .catch((err) => alert("File Upload Error"));
//   };

//   const [name, setName] = useState("");
//   const [selectedFile, setSelectedFile] = useState(null);
//   return (
//     <div className="App">
//       {/* <header className="App-header">please work please please </header> */}
//       Enter text
//       <br></br>
//       <br></br>
//       <br></br>
//       <form>
//       <br></br>

//         input here
//         <br></br>

//       <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//       <br></br>
//       <br></br>

//       <FileUploaded
//           onFileSelectSuccess={(file) => setSelectedFile(file)}
//           onFileSelectError={({ error }) => alert(error)}
//         />

//         <button onClick={submitForm}>Submit</button>
//       </form>
//     </div>
//   );
// }

// export default App;

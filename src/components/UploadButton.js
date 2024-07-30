import React, { useRef, useState } from 'react';

// Viewport3D Component
function Upload() {
  const fileInputRef = useRef(null);

  const handleUpload = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    // Do something with the uploaded file
    console.log(file);
  };
  return (
    <div>
      <button className="upload" onClick={handleUpload}>
        Upload Scan
      </button>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
    </div>
  );
}

export default Upload;
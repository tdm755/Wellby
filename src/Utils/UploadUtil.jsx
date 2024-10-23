import React, { useState, useRef } from 'react';
import DownloadIcon from '../../public/assets/SVG/download-icon.svg';
import UploadIcon from '../../public/assets/SVG/upload-icon.svg';

function UploadUtil({ initialFileName = '', uploadLabel = 'Upload File' }) {
  const [file, setFile] = useState(initialFileName ? { name: initialFileName } : null);
  const [preview, setPreview] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      generatePreview(selectedFile);
    }
  };

  const generatePreview = (file) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      if (file.type.startsWith('image/')) {
        setPreview(e.target.result);
      } else if (file.type === 'application/pdf') {
        setPreview(e.target.result);
      } else {
        setPreview(null);
      }
    };

    if (file.type.startsWith('image/') || file.type === 'application/pdf') {
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };

  const handleDownload = () => {
    if (file) {
      const url = URL.createObjectURL(file);
      const a = document.createElement('a');
      a.href = url;
      a.download = file.name;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };

  return (
    <div className="border border-[#C8C8C8] rounded-lg">
      <div className="w-full h-20 flex justify-center items-center overflow-hidden">
        {file ? (
          preview ? (
            file.type.startsWith('image/') ? (
              <img src={preview} alt="File preview" className="max-w-full max-h-full object-contain" />
            ) : (
              <iframe src={preview} className="w-full h-full" title="PDF Preview" />
            )
          ) : (
            <div className="text-md font-medium">{file.name}</div>
          )
        ) : (
          <div className="text-md text-[#C8C8C8] font-medium text-center">{uploadLabel}</div>
        )}
      </div>
      <div className="bg-[#EEEEEE] w-full h-10 flex justify-between items-center gap-2 px-2 rounded-b-lg">
        <div className="text-sm font-medium truncate flex-grow">{file ? file.name : ''}</div>
        <div className="flex gap-2 flex-shrink-0">
          {file && (
            <img
              src={DownloadIcon}
              alt="download"
              className="w-6 h-6 cursor-pointer"
              onClick={handleDownload}
            />
          )}
          <label htmlFor="file-upload" className="cursor-pointer">
            <img src={UploadIcon} alt="upload" className="w-6 h-6" />
          </label>
          <input
            id="file-upload"
            type="file"
            onChange={handleFileChange}
            className="hidden"
            ref={fileInputRef}
          />
        </div>
      </div>
    </div>
  );
}

export default UploadUtil;

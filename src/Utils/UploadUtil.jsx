import { useState, useRef, useId } from 'react';
import DownloadIcon from '../../public/assets/SVG/download-icon.svg';
import UploadIcon from '../../public/assets/SVG/upload-icon.svg';
import ViewIcon from '../../public/assets/SVG/view-icon.svg';
import PropTypes from 'prop-types';

function UploadUtil({ uploadLabel,  ReadOnlyOf = false }) {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const fileInputRef = useRef(null);
  const uniqueId = useId();

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
    <div className="border border-[#C8C8C8] rounded-lg overflow-hidden w-full">
      <div className="w-full h-20 flex justify-center items-center overflow-hidden">
        {file ? (
          preview ? (
            file.type.startsWith('image/') ? (
              <img src={preview} alt="File preview" className="w-full  object-contain" />
            ) : (
              <iframe src={preview} className="w-full h-full" title="PDF Preview" />
            )
          ) : (
            <div className="text-md font-medium">{file.name}</div>
          )
        ) : (
          <div className="text-[13px] tracking-[0.20em] font-normal text-[#C8C8C8] text-center">{uploadLabel}</div>
        )}
      </div>
      <div className="bg-[#EEEEEE] w-full h-10 flex justify-between items-center gap-2 px-2 rounded-b-lg">
        <div className="text-sm font-medium truncate flex-grow">{file ? file.name : ''}</div>
        <div className="flex gap-2 flex-shrink-0">  
          {file && (
            <>
              <img
                src={ViewIcon} // Use ViewIcon for viewing
                alt="view"
                className="w-6 h-6 cursor-pointer"
                onClick={() => {
                  const url = URL.createObjectURL(file); // Create a temporary URL for the file
                  window.open(url, '_blank'); // Open the document in a new tab
                  URL.revokeObjectURL(url); // Clean up the URL after opening
                }} 
              />
              <img
                src={DownloadIcon}
                alt="download"
                className="w-6 h-6 cursor-pointer"
                onClick={handleDownload}
              />
            </>
          )}
          {!ReadOnlyOf && ( // Only show upload option if ReadOnlyOf is false
            <>
              <label htmlFor={`file-upload-${uniqueId}`} className="cursor-pointer">
                <img src={UploadIcon} alt="upload" className="w-6 h-6" />
              </label>
              <input
                id={`file-upload-${uniqueId}`}
                type="file"
                onChange={handleFileChange}
                className="hidden"
                ref={fileInputRef}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

UploadUtil.propTypes = {
  uploadLabel: PropTypes.string,
};

export default UploadUtil;

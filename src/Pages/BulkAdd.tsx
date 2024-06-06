import React from 'react';
import { useNavigate } from 'react-router-dom';

const BulkAdd: React.FC = () => {
  const navigate = useNavigate();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    console.log('Files uploaded:', files);
  };

  return (
    <div className="max-h-screen flex flex-col items-center justify-center">
      <div className="flex justify-between items-center w-full max-w-4xl p-4">
        <h1 className="font-semibold">Download CSV Template</h1>
        <button
          onClick={() => navigate('/*')}
          type="button"
          className="text-white bg-CustomYellow px-4 py-2 my-3 ml-3 focus:outline-none rounded-lg text-sm font-semibold text-center transition-transform duration-300 ease-in-out transform hover:scale-105"
        >
          Download
        </button>
      </div>

      <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg">
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 flex flex-col items-center">
          <svg
            className="w-12 h-12 mb-4 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9.5V15.5M12 9.5L10 11.5M12 9.5L14 11.5M8.4 19C5.41766 19 3 16.6044 3 13.6493C3 11.2001 4.8 8.9375 7.5 8.5C8.34694 6.48637 10.3514 5 12.6893 5C15.684 5 18.1317 7.32251 18.3 10.25C19.8893 10.9449 21 12.6503 21 14.4969C21 16.9839 18.9853 19 16.5 19L8.4 19Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            />
          </svg>
          <p className="text-gray-500">Drag and Drop here</p>
          <p className="text-gray-500">or</p>
          <label
            className="bg-CustomYellow text-white px-4 py-2 rounded-md cursor-pointer mt-4
            focus:outline-none text-sm font-semibold text-center transition-transform
            duration-300 ease-in-out transform hover:scale-105"
            htmlFor="file-upload"
          >
            Select file
          </label>
          <input
            id="file-upload"
            type="file"
            className="hidden"
            onChange={handleFileUpload}
          />
        </div>
      </div>
      
      <button className="bg-CustomYellow text-white px-8 py-2 rounded-md mt-9
      focus:outline-none text-sm font-semibold text-center transition-transform 
      duration-300 ease-in-out transform hover:scale-105">
        Upload
      </button>
    </div>
  );
};

export default BulkAdd;

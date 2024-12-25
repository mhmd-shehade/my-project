import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai'; // Import a spinner icon from Ant Design icons

function Loader() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <AiOutlineLoading3Quarters className="text-blue-600 text-4xl animate-spin" />
    </div>
  );
}

export default Loader;

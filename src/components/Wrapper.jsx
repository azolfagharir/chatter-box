// src/components/Wrapper.jsx
import React from 'react';

const Wrapper = ({ children }) => {
  return (
    <div className="bg-MyOwn h-[100vh] w-full flex flex-col">
      {children}
    </div>
  );
};

export default Wrapper;

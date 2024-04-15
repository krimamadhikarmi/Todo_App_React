import React from 'react';

export function Tittle() {
  return (
    <div className="header py-6 ">
      <h1
        className="text-5xl text-center text-white ml-16 font-bold"
        style={{ fontFamily: "Sedan, serif" }}
      >
         Todo App 
         <i class="fa-solid fa-check mt-2 ml-4"></i>
      </h1>
    </div>
  );
}

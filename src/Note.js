import React, { useState } from "react";

export default function Note(props) {
 
 
  return (
    <div className="bg-blue-300 flex flex-col justify-between mt-4 px-4 py-4 rounded-md w-[400px] h-[200px]">
      <div className="flex justify-between">
        <p className="font-bold text-xl">{props.note.text}</p>
        <button
          className="font-bold text-xl hover:scale-105 ease-in-out cursor-pointer rounded-lg text-blue-100 bg-blue-600 px-2"
          onClick={() => props.sendDeleteID(props.note.id)}>
          X
        </button>
      </div>
      <div
        className="flex
       justify-between">
        <p className="font-bold text-lg text-gray-500">{props.note.time}</p>
        <button className="font-bold text-xl hover:scale-105 ease-in-out rounded-lg cursor-pointer text-blue-100 bg-blue-600 px-2" onClick={()=>props.sendEditID(props.note.id)}>
          Edit
        </button>
      </div>
    </div>
  );
}

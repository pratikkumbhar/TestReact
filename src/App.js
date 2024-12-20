import React, { useState } from "react";
import Note from "./Note";
export default function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  function sendDeleteID(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  function sendEditID(id) {
    todos.map((todo,index)=>{
      if(todo.id==id){
        document.querySelector("input").value = todo.text;
        document.querySelector("#button").innerHTML = "Update";
      }
    })
  }
  const createNote = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        time: `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
        text: text,
      },
    ]);

    document.querySelector("input").value = "";
    setText("");
    console.log(todos);
  };
  return (
    <section className="w-full h-[100vh] bg-slate-300 p-10">
      <section className="text-bold text-2xl">
        <h1>Notes</h1>
        <div className="">
          <input
            className="rounded mt-5 px-2 py-1 text-gray-800"
            type="text"
            id="inputID"
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <button
            className="text-2xl px-2 py-1 mx-5 bg-blue-500 text-white rounded-lg"
            onClick={(e) => createNote(e)}
            id="button"
          >
            ADD NOTE
          </button>
        </div>
      </section>
      <section className="my-8 flex gap-2 flex-wrap">
        {todos.map((todo, index) => {
          return (
            <>
              <Note
                note={todo}
                key={index}
                sendDeleteID={sendDeleteID}
                sendEditID={sendEditID}
              />
              ;
            </>
          );
        })}
      </section>
    </section>
  );
}

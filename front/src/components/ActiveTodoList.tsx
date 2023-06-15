import React, { useState } from "react";

interface ActiveTodoListProps {
  id: number;
  title: string;
  markComplete: (id: number) => void;
  deleteTodo: (id: number) => void;
  updateTodo: (id: number, title: string) => void;
}

const ActiveTodoList = (props: ActiveTodoListProps) => {
  const [editing, setEditing] = useState(false);
  const [newTodo, setNewTodo] = useState(props.title);

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    props.updateTodo(props.id, newTodo);
    console.log("TODO "+ newTodo)
    setEditing(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  return (
    <li className="border-gray-400  flex flex-row">
      <div className="select-none bg-white flex flex-1 items-center p-4 transition duration-500 ease-in-out transform hover:-translate-y-2 rounded-2xl border-2 p-6 hover:shadow-2xl border-red-400">
        {editing ? (
          <input
            type="text"
            value={newTodo}
            onChange={handleInputChange}
            className="flex-1 pl-1 mr-16 font-medium"
          />
        ) : (
          <div className="flex-1 pl-1 mr-16 font-medium">{props.title}</div>
        )}
        <button
          onClick={() => props.markComplete(props.id)}
          className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Done
        </button>
        {editing ? (
          <button
            onClick={handleSaveClick}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Save
          </button>
        ) : (
          <button
            onClick={handleEditClick}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Edit
          </button>
        )}
        <button
          onClick={() => props.deleteTodo(props.id)}
          className="bg-red-500 hover:bg-red-700 ml-2 text-white font-bold py-2 px-4 rounded-full"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default ActiveTodoList;

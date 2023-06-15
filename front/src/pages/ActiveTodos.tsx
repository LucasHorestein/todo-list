import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import ActiveTodoList from "../components/ActiveTodoList";
import custom_axios from "../axios/AxiosSetup";
import { toast } from "react-toastify";
import { ApiConstants } from "../api/ApiConstants";
interface TodoModel {
  title: string;
  id: number;
}
function ActiveTodos() {
  const [todos, setTodos] = React.useState<TodoModel[]>([]);
  const title: any = React.useRef();

  const getAllNotCompletedTodos = async () => {
    const response = await custom_axios.get(ApiConstants.TODO.FIND_NOT_COMPLETED(), { headers: { Authorization: "Bearer " + localStorage.getItem("token") } });
    console.log(response);
    setTodos(response.data);
  };

  const saveTodo = async () => {
    if (title.current.value == "") {
      toast.info("Please Provide Title");
      return;
    }
    const response = await custom_axios.post(
      ApiConstants.TODO.ADD(),
      {
        title: title.current.value,
      },
      { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }
    );
    getAllNotCompletedTodos();
    title.current.value = "";
    toast.success("Todo Added Scuessfully!!");
  };

  React.useEffect(() => {
    if (todos.length == 0) getAllNotCompletedTodos();
  }, []);
  return (
    <div>
      <NavBar></NavBar>
      <div className="container mb-2 flex mx-auto w-full items-center justify-center">
        <ul className="flex flex-col p-4">
          <span className="text-black text-2xl ">Enter Todo : </span>
          <input ref={title} className="mt-2 p-2  rounded-xl "></input>
          <button onClick={saveTodo} className="w-36 px-2 py-4 text-white mx-auto mb-12 mt-2 bg-green-400 rounded-xl hover:bg-green-500 text-2xl">
            Save
          </button>

          {todos.map((todo) => {
            return (
              <ActiveTodoList
                key={todo.id}
                deleteTodo={async () => {
                  const response = await custom_axios.delete(ApiConstants.TODO.DELETE(todo.id), { headers: { Authorization: "Bearer " + localStorage.getItem("token") } });
                  getAllNotCompletedTodos();
                  toast.success("Deleted Sucessfully");
                }}
                updateTodo={async (id: number, title: string) => {
                  const response = await custom_axios.put(ApiConstants.TODO.UPDATE(todo.id), { title });
                  getAllNotCompletedTodos();
                  toast.success("Update Sucessfully");
                }}
                markComplete={async () => {
                  const response = await custom_axios.patch(ApiConstants.TODO.MARK_COMPLETE(todo.id), {}, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } });
                  getAllNotCompletedTodos();
                  toast.success("Marked Completed");
                }}
                id={todo.id}
                title={todo.title}
              ></ActiveTodoList>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ActiveTodos;

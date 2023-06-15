import { BrowserRouter, Routes, Route } from "react-router-dom";
import ActiveTodos from "./pages/ActiveTodos";
import CompeletedTodos from "./pages/CompletedTodos";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";

const Routing = () => {
  return (
    <div>
      <BrowserRouter>
        <ToastContainer autoClose={3000} position={"top-center"} hideProgressBar={true} />
        <Routes>
          <Route
            path="/active"
            element={
                <ActiveTodos />
            }
          />
          <Route
            path="/completed"
            element={
                <CompeletedTodos />
            }
          />
          <Route
            path="/"
            element={
                <ActiveTodos /> 
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routing;

import React from "react";
//mport SignUpForm from "./SignUpForm.js";
//import ToDoList from "./ToDoList.js";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Jeopardy from "./components/Jeopardy";

function App() {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="./jeopardy">
          Jeopardy
        </a>
      </nav>

      <BrowserRouter>
        <Routes>
          <Route path="/jeopardy" element={<Jeopardy />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

// class App extends React.Component {
//   render() {
//     return <ToDoList />;
//   }
// }

export default App;

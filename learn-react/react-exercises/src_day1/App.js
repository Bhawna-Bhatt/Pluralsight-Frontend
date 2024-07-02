import logo from './logo.svg';
import './App.css';
//import Hello from "./Hello";
//import ToDoApp from "./ToDoApp";
import Counter from "./Counter";

function App() {
  return (
    <div className="App">
      {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          I have tested it.
        </p>
        <Hello></Hello>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          <ToDoApp 
          name="Bhawna"
          weather = {{
            currentCity: "Cleveland",
            description: "Sunny",
            temperature: 76
          }}
          toDos = {[
            "learn React",
            "eat",
            "sleep",
            "practice React",
            "watch React Pluralsight videos",
            "practice JavaScript",
          ]}
          />
        </div>

        </header> */}
        <Counter 
          counter1 ={5}
        />
         <Counter 
          counter1 ={0}
        />
         <Counter 
          counter1 ={15}
        />
         <Counter 
          counter1 ={3}
        />
        

    </div>
  );
}

export default App;

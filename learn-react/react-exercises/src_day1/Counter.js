import { useState } from "react";
import Container from "react-bootstrap/Container";

function Counter({ counter1 = 0 }) {
  let [counter, setCounter] = useState(counter1);
  let [msg, setMsg] = useState("Everything looks good");
  let [pcolor, setPcolor] = useState("text-success");
  let [show, setShow] = useState("d-none");

  function incrementCount() {
    if (counter === 10) {
      setPcolor((pcolor = "text-danger"));
    }
    if (counter !== 20) {
      setCounter(counter + 1);
    } else {
      setMsg("Can't go beyond 20");
    }
    setShow("d-inline");
  }

  function decrementCount() {
    if (counter !== 0) {
      setCounter(counter - 1);
    } else {
      setMsg("Can't go beyond 0");
    }
    if (counter < 12) {
      setPcolor((pcolor = "text-success"));
    }
    setShow("d-line");
  }

  function resetValue() {
    setCounter(counter1);
  }

  return (
    <>
      <Container className={pcolor}>
        {" "}
        <p>Counter : {counter}</p>
        <p>{msg}</p>
        <button className="btn  bg-success" onClick={incrementCount}>
          Increase by 1
        </button>
        <br />
        <br />
        <button className="btn bg-success" onClick={decrementCount}>
          Decrease by 1
        </button>
        <br />
        <br />
        <button className={`btn bg-success ${show}`} onClick={resetValue}>
          Reset
        </button>
      </Container>
    </>
  );
}

export default Counter;

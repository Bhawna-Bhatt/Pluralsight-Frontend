import { useEffect, useState, useRef } from "react";

function Jeopardy(props) {
  let [score, setScore] = useState(0);
  let [jeopardyData, setJeopardyData] = useState({});
  let [isLoading, setIsLoading] = useState(true);
  let userscore = useRef(0);
  console.log(userscore.current);

  //when the component mounts, get a the first question
  useEffect(() => {
    isLoading = setIsLoading(true);
    //get a new random question from the API and add it to the data object in state
    async function getNewQuestion() {
      console.log("in jeopardy");
      //use fetch to make an API call and get a random Jeopardy question (returns a promise)
      const response = await fetch(`https://jservice.xyz/api/random-clue`);
      //on success of the fetch request, turn the response that came back into JSON
      let data = await response.json();
      //on success of turnig the response into JSON (data we can work with), lets add that data to state

      //put the data in the console just so we can see it
      console.log("data from the api", data);

      //update state with the data from the API causing the page to re-render
      setJeopardyData(data);
      setIsLoading(false);
      console.log(jeopardyData);
      let x = jeopardyData.value;
      //userscore.current = userscore.current + Number(jeopardyData.value);
      console.log("userscore", x);
      //handle any errors/failures with getting data from the API
    }

    getNewQuestion();

    userscore.current = userscore.current + jeopardyData.value;
  }, []);

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }

  //present the results to the user
  return (
    <div>
      {/* Displaying the question to help you get started */}
      Question: {jeopardyData.question}
      <hr />
      Category Title : {jeopardyData.category["title"]}
      <hr />
      Value : {jeopardyData.value}
      <hr />
      Score : {userscore.current}
    </div>
  );
}

export default Jeopardy;

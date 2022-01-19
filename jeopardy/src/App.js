import { useState } from "react";
import "./App.css";
import Questions from "./Questions";

function App() {
  const [question, setQuestion] = useState([
    { question: "none", category: "none" },
  ]);
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const getQuestion = () => {
    fetch("http://jservice.io/api/random")
      .then((res) => res.json())
      .then((data) => {
        setQuestion(data);
        console.log(question);
      });
  };
  const get10Questions = () => {
    fetch("http://jservice.io/api/random?count=10")
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data);
        console.log(questions);
      });
  };
  const Decrease = () => {
    setScore((prevscore) => prevscore - question[0].value);
  };
  const Increase = () => {
    setScore((prevscore) => prevscore + question[0].value);
  };
  const Reset = () => {
    setScore(0);
  };
  const Increase2 = (value) => {
    setScore((prevscore) => prevscore + value);
  };
  const Decrease2 = (value) => {
    setScore((prevscore) => prevscore - value);
  };
  return (
    <div className="App">
      <p>{score}</p>
      <button onClick={Decrease}>Decrease</button>
      <button onClick={Increase}>Increase</button>
      <button onClick={Reset}>Reset</button>
      <p>Category: {question[0].category.title}</p>
      <p>Question: {question[0].question}</p>
      <p>Points: {question[0].value}</p>
      <p>Answer: {question[0].answer}</p>
      <button onClick={getQuestion}>Get Question</button>
      <button onClick={get10Questions}>Get More Questions</button>
      {questions.map((data, index) => {
        return (
          <Questions
            data={data}
            key={index}
            Increase={Increase2}
            Decrease={Decrease2}
          />
        );
      })}
    </div>
  );
}

export default App;

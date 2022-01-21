import { useState } from "react";

function Questions(props) {
  const [status, setStatus] = useState(false);
  const reveal = () => {
    setStatus((prevStatus) => !prevStatus);
  };
  const Decrease = () => {
    props.Decrease(props.data.value);
  };
  const Increase = () => {
    props.Increase(props.data.value);
  };
  return (
    <div>
      <p>Category: {props.data.category.title}</p>
      <p>Question: {props.data.question}</p>
      <p>Points: {props.data.value}</p>
      <p>Answer: {status && props.data.answer}</p>
      <button onClick={reveal}>Reveal Answer</button>
      <button onClick={Decrease}>Decrease</button>
      <button onClick={Increase}>Increase</button>
    </div>
  );
}

export default Questions;

import React from "react";
import "./styles.css";

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

export default function App() {
  const [temp, setTemp] = React.useState("");

  function handleChange(e) {
    // console.log(e.target.value)
    setTemp(e.target.value);
  }
  // const temperature = temp; // we can use this way or we can use directly temp variable

  return (
    <fieldset>
      <legend>Enter Temperature in celsius:</legend>
      <input onChange={handleChange} value={temp} />
      <BoilingVerdict celsius={parseFloat(temp)} />
    </fieldset>
  );
}

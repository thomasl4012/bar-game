import "./App.css";
import { Form } from "./components/form/form.component";
import { useState } from "react";
function App() {
  const [state, setstate] = useState("");
  const [counter, setCounter] = useState(1);
  const [romanCounter, setromanCounter] = useState("I");
  const [gameState, setGameState] = useState(true);

  // const handleChange = (e) => {
  //   e.preventDefault();

  //
  // };

  const handleClick = (e) => {
    e.preventDefault();
    const value = e.target.innerText;

    if (value !== romanCounter[0]) {
      setGameState(false);
    }

    if (romanCounter.length > 1) {
      let removedItem = romanCounter.slice(1);
      setromanCounter(removedItem);
    } else {
      setCounter(counter + 1);
      setromanCounter(romanize(counter + 1).split(""));
    }

    setstate(value);
  };

  const romanize = (num) => {
    if (isNaN(num)) return NaN;
    var digits = String(+num).split(""),
      key = [
        "",
        "C",
        "CC",
        "CCC",
        "CD",
        "D",
        "DC",
        "DCC",
        "DCCC",
        "CM",
        "",
        "X",
        "XX",
        "XXX",
        "XL",
        "L",
        "LX",
        "LXX",
        "LXXX",
        "XC",
        "",
        "I",
        "II",
        "III",
        "IV",
        "V",
        "VI",
        "VII",
        "VIII",
        "IX",
      ],
      roman = "",
      i = 3;
    while (i--) roman = (key[+digits.pop() + i * 10] || "") + roman;
    return Array(+digits.join("") + 1).join("M") + roman;
  };

  return (
    <div className="App">
      <div>What's next element ?</div>
      <Form
        handleClick={handleClick}
        gameState={gameState}
        value={state}
        number={counter}
        roman={romanCounter[0]}
      />
    </div>
  );
}

export default App;

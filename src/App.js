import "./App.css";
import { Form } from "./components/form/form.component";
import { useState, useEffect, useRef } from "react";
function App() {
  const [state, setstate] = useState("");
  const [counter, setCounter] = useState(1);
  const [romanCounter, setromanCounter] = useState("I");
  const [gameState, setGameState] = useState(true);
  const [time, setTime] = useState(10);
  const [css, setCss] = useState(false);

  const timer = useRef(null); // we can save timer in useRef and pass it to child

  useEffect(() => {
    // useRef value stored in .current property
    timer.current = setInterval(() => setTime(time - 1), 1000);
    if (time <= 0) {
      setstate("nothing");
      clearInterval(timer.current);
      setGameState(false);
    }
    // clear on component unmount
    return () => {
      clearInterval(timer.current);
    };
  }, [time]);

  const resetTimer = () => {
    clearInterval(timer.current);
    setTime(10);
  };

  const handleClick = (e) => {
    resetTimer();
    e.preventDefault();

    const value = e.target.innerText;
    if (value !== romanCounter[0]) {
      setGameState(false);
      setTime("");
    } else {
      setCss(true);
      setstate(value);
      setTimeout(() => setCss(false), 200);
      // clear on component unmount
    }

    if (romanCounter.length > 1) {
      let removedItem = romanCounter.slice(1);
      setromanCounter(removedItem);
    } else {
      setCounter(counter + 1);
      setromanCounter(romanize(counter + 1).split(""));
    }
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
    <div className={"App " + (css ? "good" : "")}>
      <div>
        Time left : <b>{time}</b>
      </div>
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

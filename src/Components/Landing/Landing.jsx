import React, { useState } from "react";
import "../Landing/Landing.css";
function Landing() {
  const [Value, setValue] = useState([]);
  const [Result, setResult] = useState("");
  const onclicked = (button) => {
    if (button === "=") {
      try {
        const result = eval(Value);
        setResult(result);
        setValue(result.toString());
      } catch (error) {
        setResult("Error");
      }
    } else if (button === "AC") {
      setResult("");
      setValue("");
    } else if (button === "DEL") {
      setValue(Value.slice(0, -1));
    } else {
      setValue(Value + button);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "100px",
      }}
    >
      <div className="main-cont">
        <div>
          <div>
            <p
              style={{
                fontSize: "30px",
                margin: "10px",
                fontFamily: "cursive",
                color: "darkblue",
              }}
            >
              Calculator
            </p>
            <input className="input-1" value={Value} type="text" readOnly />
          </div>
          <div
            style={{
              marginLeft: "40px",
            }}
          >
            <div>
              <button className="btn-number" onClick={() => onclicked("AC")}>
                AC
              </button>
              <button className="btn-number" onClick={() => onclicked("DEL")}>
                DEL
              </button>
              <button className="btn-number" onClick={() => onclicked("%")}>
                %
              </button>
              <button className="btn-number" onClick={() => onclicked("/")}>
                /
              </button>
            </div>
            <div>
              <button className="btn-number" onClick={() => onclicked("7")}>
                7
              </button>
              <button className="btn-number" onClick={() => onclicked("8")}>
                8
              </button>
              <button className="btn-number" onClick={() => onclicked("9")}>
                9
              </button>
              <button className="btn-number" onClick={() => onclicked("*")}>
                *
              </button>
            </div>
            <div>
              <button className="btn-number" onClick={() => onclicked("4")}>
                4
              </button>
              <button className="btn-number" onClick={() => onclicked("5")}>
                5
              </button>
              <button className="btn-number" onClick={() => onclicked("6")}>
                6
              </button>
              <button className="btn-number" onClick={() => onclicked("+")}>
                +
              </button>
            </div>
            <div>
              <button className="btn-number" onClick={() => onclicked("1")}>
                1
              </button>
              <button className="btn-number" onClick={() => onclicked("2")}>
                2
              </button>
              <button className="btn-number" onClick={() => onclicked("3")}>
                3
              </button>
              <button className="btn-number" onClick={() => onclicked("-")}>
                -
              </button>
            </div>
            <div>
              <button className="btn-number" onClick={() => onclicked("0")}>
                0
              </button>
              <button className="btn-number" onClick={() => onclicked(".")}>
                .
              </button>
              <button
                style={{
                  marginLeft: "80px",
                  backgroundColor: "rgba(200, 157, 200, 0.56)",
                }}
                className="btn-number"
                onClick={() => onclicked("=")}
              >
                =
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;

import { CallMerge } from "@material-ui/icons";
import React, { useState } from "react";

export const MiniCal = () => {
  const [valueA, setValueA] = useState(0);
  const [valueB, setValueB] = useState(0);

  const [resultado, setResultado] = useState(0);
  function sumar() {
    setResultado(parseInt(valueA) + parseInt(valueB));
  }

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Digite numero A"
          onChange={(e) => {
            setValueA(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Digite numero B"
          onChange={(e) => {
            setValueB(e.target.value);
          }}
        />
        <button onClick={sumar}>Submit</button>
      </div>

      <p>{resultado}</p>
    </div>
  );
};

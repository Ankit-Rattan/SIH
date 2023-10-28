import React from "react";
import data from "../data/optionData";

export default function OptionsList(props) {
  const optionElements = data.map((data) => {
    return (
      <div key={data.id} className={data.classname}>
        <h3>{data.name}</h3>
        <p>{data.text}</p>
        <button>Proceed</button>
      </div>
    );
  });
  return <div className="options-list">{optionElements}</div>;
}

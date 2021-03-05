import React from "react";
import { Picky } from "react-picky";
import "react-picky/dist/picky.css";
import { options } from "./data";

function ReactPicky() {
  const [multiValue, setMultiValue] = React.useState([]);
  return (
    <div className="container">
      <div className="col">
        <h3>Multi select</h3>
        <Picky
          options={options}
          labelKey="label"
          valueKey="value"
          multiple={true}
          includeFilter
          numberDisplayed={1}
          // includeSelectAll
          value={multiValue}
          onChange={setMultiValue}
        />
      </div>
    </div>
  );
}

export default ReactPicky;

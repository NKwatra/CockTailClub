import React, { useState } from "react";

const useDropdown = (label, defaultState, data) => {
  const id = `use-dropdown-${label.replace(/\s/, "").toLowerCase()}`;
  const [state, setState] = useState(defaultState);
  const Dropdown = () => {
    return (
      <div className="form-group">
        <label htmlFor={id} className="full-width">
          <span className="h5">{label}</span>
          <select
            id={id}
            value={state}
            onChange={e => setState(e.target.value)}
            onBlur={e => setState(e.target.value)}
            className="form-control mt-2 full-width"
          >
            <option key={-1} value="None">
              None
            </option>
            {data.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>
    );
  };

  return [state, Dropdown];
};

export default useDropdown;

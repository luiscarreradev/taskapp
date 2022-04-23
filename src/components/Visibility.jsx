import React from 'react';

const Visibility = props => {
  return (
    <div>
      <input 
        type="checkbox"
        className="form-check-input"
        checked={props.isChecked}
        onChange={e => props.handleCheck(e.target.checked)}
        />
        <label htmlFor="form-check-input">
          Show {props.description}
        </label>
    </div>
  );
}

export default Visibility;
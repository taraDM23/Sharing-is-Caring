import React from "react";

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="10" {...props} />
    </div>
  );
}

/* export function Checkbox(props) {
  return (
    <div className="form-group">
      <input type="checkbox" className="form-control" {...props}></input>
    </div>
  );
} */

export function Image(props) {
  return (
    <div className="form-group">
      <img className="form-control" rows="20" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
      {props.children} 
    </button>
  );
}

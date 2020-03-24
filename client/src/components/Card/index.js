import React from "react";
import "./style.css";

export function Card(children) {
  return (
    <div
      className="card-body"
      style={{}}
    >
      {children}
    </div>
  );
}

export function Cardbtn(children) {
  return (
    <div
      className="btn btn-sm btn-outline-secondary"
      style={{}}
    >
      {children}
    </div>
  );
}

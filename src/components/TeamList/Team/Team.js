import React from "react";

export default function Team(props) {
  return (
    <div>
      <h3 style={{ background: props.color }}>{props.name}</h3>
    </div>
  );
}

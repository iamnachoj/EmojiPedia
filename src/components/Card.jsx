import React from "react";

export default function Card(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="default">
          {props.emoji}
        </span>
        <span>{props.name}</span>
      </dt>
      <dd>{props.description}</dd>
    </div>
  );
}

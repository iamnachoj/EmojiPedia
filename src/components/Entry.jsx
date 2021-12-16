import React from "react";
import Card from "./card";
import JSONDATA from "../emojipedia";

export default function Entry() {
  return (
    <dl className="dictionary">
      {JSONDATA.map((val) => {
        return (
          <Card
            key={val.id}
            emoji={val.emoji}
            name={val.name}
            description={val.meaning}
          />
        );
      })}
    </dl>
  );
}

import { React, useState } from "react";
import data from "./ListData.json";
import Link from "next/link";
function List(props) {
  const filteredData = data.filter((el) => {
    if (props.input === "") {
      return el;
    } else {
      return el.text.toLowerCase().includes(props.input);
    }
  });
  return (
    <ul>
      {filteredData.map((item) => (
        <a href={item.path}>
          <li key={item.id}>{item.text}</li>
        </a>
      ))}
    </ul>
  );
}

export default List;

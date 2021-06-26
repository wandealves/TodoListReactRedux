import React from "react";
import { useSelector } from "react-redux";

import ListItem from "./ListItem";

function List(props) {
  const items = useSelector(state=>state);
  return (
    <ul>
      {items.map((item, index) => (
        <ListItem key={index} item={item}></ListItem>
      ))}
    </ul>
  );
}

export default List;

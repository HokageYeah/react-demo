import React, { memo, useState, useRef } from "react";
import type { ReactNode, FC } from "react";
import { UseStatesStyle } from "./style";

interface Iprops {
  children?: ReactNode;
}

const ReactClosureTrap: FC<Iprops> = memo((props) => {
  const { children } = props;
  const [items, setItems] = useState<any[]>([{ key: 0, text: "item" }]);
  const itemsRef = useRef<any>();
  itemsRef.current = items;
  console.log(itemsRef.current);
  function addItem() {
    setItems((items) => [...itemsRef.current, { key: items.length, text: "item" }]);
  }
  // useRef解决闭包陷阱
  function alertFn() {
    setTimeout(() => {
      alert(JSON.stringify(itemsRef.current));
    }, 1500);
  }
  return (
    <div className="modelCell">
      <UseStatesStyle>
        <h1>ReactClosureTrap(闭包陷阱) {JSON.stringify(items)}</h1>
        <button onClick={addItem}>Add Item</button>
        <button onClick={alertFn}>alertFn</button>
      </UseStatesStyle>
    </div>
  );
});

export default ReactClosureTrap;

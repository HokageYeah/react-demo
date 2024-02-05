import React, { memo, useState, useDeferredValue } from "react";
import type { ReactNode, FC } from "react";
import { UseStatesStyle } from "./style";

interface Iprops {
  children?: ReactNode;
}

const ReactUseDeferredValue: FC<Iprops> = memo((props) => {
  const { children } = props;
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");
  console.log("ReactUseDeferredValue:children----", children);
  const deferredSearch = useDeferredValue(search);

  const handleTextChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setText(e.target.value);
  };

  const handleSearchClick = () => {
    setSearch(text);
  };

  const expensiveSearchFunction = (query: string) => {
    // 模拟耗时计算
    return `Results for: ${query}`;
  };

  // 模拟耗时计算
  const searchResults = expensiveSearchFunction(deferredSearch);

  return (
    <div className="modelCell">
      <UseStatesStyle>
        <h1>ReactUseDeferredValue</h1>
        <input type="text" value={text} onChange={handleTextChange} />
        <button onClick={handleSearchClick}>Search</button>
        <div>{searchResults}</div>
      </UseStatesStyle>
    </div>
  );
});

export default ReactUseDeferredValue;

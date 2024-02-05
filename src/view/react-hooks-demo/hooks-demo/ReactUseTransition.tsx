import React, { memo, useState } from "react";
import type { ReactNode, FC } from "react";
import { UseStatesStyle } from "./style";
//创建了一个简单的列表，点击按钮时会向列表添加项目。我们使用 useTransition 为列表项创建过渡效果
import { animated, useTransition } from "react-spring";

interface Iprops {
  children?: ReactNode;
}

const ReactUseTransition: FC<Iprops> = memo((props) => {
  const { children } = props;
  console.log("ReactUseTransition:children----", children);
  const [items, setItems] = useState<any>([]);
  const transitions = useTransition(items, {
    keys: (item: any) => item.key,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });
  const addItem = () => {
    const newItem = { key: Date.now(), text: "New Item" };
    setItems([...items, newItem]);
  };
  return (
    <div className="modelCell">
      <UseStatesStyle>
        <h1>ReactUseTransition</h1>
        <button onClick={addItem}>Add Item</button>
        <ul>
          {transitions((styles, item) => (
            <animated.li style={styles} key={item.key}>
              {item.text}
            </animated.li>
          ))}
        </ul>
      </UseStatesStyle>
    </div>
  );
});

export default ReactUseTransition;

// items：一个数组，表示要为其创建过渡的元素。通常，这是一个用于渲染列表项目的数组，但它也可以是单个组件。
// keys：一个函数，用于为每个元素生成唯一键。这些键用于在重新渲染时识别元素，以便应用适当的过渡。通常，你可以使用项目的唯一属性（如 id）作为键。
// config：一个配置对象，用于定义过渡动画的属性。配置对象可以包含以下属性：
// from：一个对象，描述元素进入过渡的初始状态。
// enter：一个对象，描述元素进入过渡的最终状态。
// update（可选）：一个对象，描述元素更新过渡的最终状态。
// leave：一个对象，描述元素离开过渡的最终状态。
// 其他 react-spring 支持的动画属性。

import React, { PureComponent } from "react";
import { UseStatesStyle } from "./style";

export class ReactSetState extends PureComponent {
  constructor(props: any) {
    super(props);
    this.state = { count: 0 };
  }
  setCountFC() {
    this.setState(
      (state: any, props) => {
        return { count: state.count + 1 };
      },
      () => {
        console.log("setCountFC--1-", (this.state as any).count);
      }
    );
    console.log("setCountFC---state---", (this.state as any).count);
    this.setState(
      (state: any, props) => {
        return { count: state.count + 1 };
      },
      () => {
        console.log("setCountFC--2-", (this.state as any).count);
      }
    );
    this.setState(
      (state: any, props) => {
        return { count: state.count + 1 };
      },
      () => {
        console.log("setCountFC--3-", (this.state as any).count);
      }
    );
  }
  setCountState(count: number) {
    this.setState({ count: count + 1 });
    this.setState({ count: count + 2 });
  }
  // 简写形式
  //   state = { count: 0 };
  render() {
    const { count } = this.state as any;
    return (
      <div className="modelCell">
        <UseStatesStyle>
          <p>setState:{count}</p>
          <button onClick={() => this.setCountState(count)}>Increment++</button>
          <button onClick={() => this.setCountFC()}>IncrementSetFun++</button>
        </UseStatesStyle>
      </div>
    );
  }
}

export default ReactSetState;

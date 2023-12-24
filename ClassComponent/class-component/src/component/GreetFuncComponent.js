import React from "react";

class GreetClassComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello {this.props.name} from Class Component</h1>
        {this.props.children}
      </div>
    );
  }
}

export default GreetClassComponent;
import React from 'react';

import Show from './show'

class Clicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showComponent: false
    }
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick() {
    console.log("The value of showCompont was: ", this.state.showComponent)
    this.setState({
      showComponent: !this.state.showComponent
    })
  }
  render() {
    return(
      <div>
        <h2>Hello World</h2>
        <div>
          { this.props.handSomethingDown }
          {this.props.anotherProp}
        </div>

        <button onClick={this.onButtonClick}>
          Click me to change the showComponent value
        </button>

        {
          this.state.showComponent ? <Show /> : null
        }
      </div>
    )
  }
}

export default Clicker;
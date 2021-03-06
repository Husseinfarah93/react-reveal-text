import React from 'react';

class TestWrapper extends React.Component {

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
      show: false,
    };
  }

  onClick() {
    this.setState({ show: !this.state.show });
  }

  render() {
    const { show } = this.state;
    const { children, ...other } = this.props;

    const child = React.Children.only(children);
    const ChildComponent = React.cloneElement(child, { show, ...other });

    return (
      <div>
        { ChildComponent }
        <button onClick={this.onClick}>Toggle Show</button>
      </div>
    );
  }
}

TestWrapper.propTypes = {
  children: React.PropTypes.element,
};

export default TestWrapper;

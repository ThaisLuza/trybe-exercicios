import React from 'react';

class Title extends React.Component {
  render() {
    const prop = this.props;

    return <h1>{prop.titulo}</h1>;
  }
}

export default Title;

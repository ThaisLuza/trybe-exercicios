import React, { Component } from 'react';

class Pokemon extends Component {
  render() {
    const data = this.props.data;
    return (
      <div className='card'>
        <article>
          <h2>{data.name}</h2>
          <p>{data.type}</p>
          <p> Average weight: &nbsp;
            {data.averageWeight.value}
            {data.averageWeight.measurementUnit}
          </p>
          <img src={data.image} alt='' />
        </article>
      </div>
    );
  }
}

export default Pokemon;

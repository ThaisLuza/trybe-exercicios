import React, { Component } from "react";
import Pokemon from "./Pokemon";

class Pokedex extends Component {
  render() {
    const data = this.props.data
    return(
      <div className='pokedex'>
        {data.map((item)=> <Pokemon key={item.id} data={item}/>
    )}
      </div>
    )
  }
}

export default Pokedex;
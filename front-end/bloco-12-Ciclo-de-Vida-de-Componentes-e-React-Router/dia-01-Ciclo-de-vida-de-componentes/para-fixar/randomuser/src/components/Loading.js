import React, { Component } from 'react';
import { BiLoader } from 'react-icons/bi' 

class Loading extends Component {
  render() {
    return (
      <section>
        <BiLoader />
      </section>
    )
  }
}

export default Loading;
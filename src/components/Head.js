import React from 'react';
import '../styles/head.scss';
import img from '../assets/shoppoingCar.jpg';

class Head extends React.Component {
  render() {
    return (
      <div>
        <h1 className="store">store</h1>
        <img src={img}></img>
      </div>
    );
  }
}
export default Head;

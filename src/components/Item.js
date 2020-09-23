import React from 'react';
import '../styles/item.scss';

class Item extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        { categroy: '', name: '', price: '' },
        { categroy: '', name: '', price: '' },
        { categroy: '', name: '', price: '' },
        { categroy: '', name: '', price: '' },
        { categroy: '', name: '', price: '' },
        { categroy: '', name: '', price: '' },
      ],
    };
  }

  render() {
    return <div className="item"></div>;
  }
}
export default Item;

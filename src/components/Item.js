import React from 'react';
import '../styles/item.scss';
import img from '../assets/products_image_placeholder.png';
const url = 'http://localhost:3000/products';

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

  componentDidMount() {
    async function fetchData(url) {
      const result = await fetch(url).then((response) => response.json);
      return result;
    }
    fetchData(url)
      .then(url)
      .then((result) => {
        this.setState({
          products: result,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="item">
        <p>iphone</p>
        <div className="iphoneItems">
          <p className="iphone11">iPhone11</p>
          <img src={img}></img>
          <p className="iphoneXS">iPhoneXS</p>
          <button>add to cart</button>
          <p className="iphoneSE">iPhoneSE</p>
          <button>add to cart</button>
        </div>

        <p>HUAWEI</p>
        <div className="huaWeiItems">
          <p className="HUAWEI P40 Pro+">HUAWEI P40 Pro+</p>
          <img src={img}></img>
          <p className="HUAWEI Mate 30">HUAWEI Mate 30</p>
          <button>add to cart</button>
          <p className="HUAWEI nova 7">HUAWEI nova 7</p>
          <button>add to cart</button>
        </div>
      </div>
    );
  }
}
export default Item;

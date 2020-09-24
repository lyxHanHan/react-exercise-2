import React from 'react';
import '../styles/item.scss';
import img from '../assets/products_image_placeholder.png';
// const url = 'http://localhost:3000/products';

// class Item extends React.Component {
//   render() {
// constructor() {
//       super();
//       this.state = {
//         products: [
//           { categroy: '', name: '', price: '' },
//           { categroy: '', name: '', price: '' },
//           { categroy: '', name: '', price: '' },
//           { categroy: '', name: '', price: '' },
//           { categroy: '', name: '', price: '' },
//           { categroy: '', name: '', price: '' },
//         ]
//       };
//     }

// componentDidMount(){
//         async function fetchData(url){
//           const result = await fetch(url).then(response => response.json);
//           return result;
//         }
//         fetchData(url).then(url).then(
//           (result)=>{
//             this.setState({
//               products:result
//             }
//             )
//           }
//         ).catch((error) => {
//           console.log(error);
//         });
//       }
//   render() {
//       return (
//          <div className="item">
//           <p>iphone</p>
//           <div className = 'iphoneItems'>
//           <p className = {'Name'}>{this.state.products[0].name}></p>
//           <img src={img}></img>
//           <p className = {'price'}>{this.state.products[0].price}></p>
//           <button>add to cart</button>
//           </div>
//           </div>);
//           }
//       }
//     }
// export default Item;

class Item extends React.Component {
  render() {
    return (
      <div>
        <h1 className="store">store</h1>
        <img src={img}></img>
      </div>
    );
  }
}
export default Item;

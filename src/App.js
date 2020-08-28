import React from 'react';
import data from './data.json';
import Products from './component/products';
import Filter from './component/Filter';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      size: "",
      sort: "",
    };
  }
  sortProducts(event) {
    //implements
    console.log(event.target.value);
  }
  filterProducts(event) {
    //implements
    console.log(event.target.value);

  }
  render() {
  return (
      <div className="grid-container">
        <header>
        <a href="/">Green fashion </a>
        </header>
        <main>
        <div className="content">
        <div className="main">
          <Filter
          count = {this.state.products.length}>
          size =  {this.state.size}
          sort =  {this.state.sort}
          filterProducts = {this.filterProducts}
          sortProducts = {this.sortProducts}
          </Filter>
          <Products products ={this.state.products}></Products>
          </div>
          <div className="sidebar">
              cart item
          </div>
          </div>
          </main>
         <footer>
          All right is reserved
        </footer>
        </div>
   
    );
  }
}

export default App;

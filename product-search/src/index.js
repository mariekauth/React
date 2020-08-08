import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function ProductTable(props) {
    return (
        <div class="product-table">
            <div class="product-category-row"></div>
            <div class="product-row"></div>
            <div class="product-row"></div>
            <div class="product-row"></div>
            <div class="product-category-row"></div>
            <div class="product-row"></div>
            <div class="product-row"></div>
            <div class="product-row"></div>
        </div>
    );
}

function FilterableProductTable(props) {
    return (
        <div class="filterable-product-table">
            <div class="search-bar">
                Search Box<br />
                Only show products in stock
            </div>
            <ProductTable />
        </div>
    );
}

class Home extends React.Component { 
    renderFilterableProductTable() {
      return (
        <FilterableProductTable />
      );
    }

    render() {
      return (
        <div class="main-container">
          {this.renderFilterableProductTable()}
        </div>
      );
    }
  }

  /*
- FilterableProductTable
  - SearchBar
  - ProductTable
    - ProductCategoryRow
    - ProductRow
  */

ReactDOM.render(<Home />, document.getElementById("root"));
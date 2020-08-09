import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function ProductRow(props) {
    return (
        <div class="product-row"><span class={props.inStock ? "in-stock" : "out-of-stock"}>{props.name}</span><span class="price">{props.price}</span></div>
    );
}

function ProductCategoryRow(props) {
    return (
        <div class="product-category-row">{props.name}</div>
    );
}

function ProductTable(props) {
    return (
        <div class="product-table">
            <div class="product-header-row">Name<span class="price">Price</span></div>
            <div class="product-category-row">Sporting Goods</div>
            <div class="product-row"><span class="in-stock">Football</span><span class="price">$49.99</span></div>
            <div class="product-row"><span class="in-stock">Baseball</span><span class="price">$9.99</span></div>
            <div class="product-row"><span class="out-of-stock">Basketball</span><span class="price">$29.99</span></div>
            <div class="product-category-row">Electronics</div>
            <div class="product-row"><span class="in-stock">iPod Touch</span><span class="price">$99.99</span></div>
            <div class="product-row"><span class="out-of-stock">iPhone 5</span><span class="price">$399.99</span></div>
            <div class="product-row"><span class="in-stock">Nexus 7</span><span class="price">$199.99</span></div>
        </div>
    );
}

function SearchBar(props) {
    return (
        <div class="search-bar">
        <input type="text" name="productSearch" placeholder="Search..." value="" /><br />
        <input type="checkbox" name="showOnlyProductsInStock" />
        Only show products in stock
    </div>
    );
}

function FilterableProductTable(props) {
    return (
        <div class="filterable-product-table">
            <SearchBar />
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

  /*
  [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];
  */

ReactDOM.render(<Home />, document.getElementById("root"));
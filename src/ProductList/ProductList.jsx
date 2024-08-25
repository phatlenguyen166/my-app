import React, { Component } from 'react'
import ProductItem from './ProductItem'

export class ProductList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      productList: [
        {
          id: '1a',
          name: 'Sony',
          avatar: '😊'
        },
        {
          id: '2b',
          name: 'Iphone',
          avatar: '123'
        },
        {
          id: '3c',
          name: 'Samsung',
          avatar: 'fdsf'
        }
      ]
    }
  }

  orderProductList = () => {
    this.setState((prevState) => {
      return {
        productList: prevState.productList.sort((a, b) => {
          if (a.name > b.name) return 1
          if (a.name < b.name) return -1
          return 0
        })
      }
    })
  }

  addProduct = () => {
    this.setState((prevState) => {
      return {
        productList: [
          { id: '4d', name: 'Huwei', avatar: '❤️' },
          ...prevState.productList
        ]
      }
    })
  }
  render() {
    const list = this.state.productList.map((product) => (
      <ProductItem product={product} key={product.id} />
    ))
    return (
      <div>
        <h1>ProductList</h1>
        <button onClick={this.addProduct}>Add</button>
        <button onClick={this.orderProductList}>Order Product List</button>
        <div className='product-list'></div>
        {list}
      </div>
    )
  }
}

export default ProductList

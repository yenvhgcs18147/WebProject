import React, { Component } from 'react'

export default function ItemProduct (props) {
  const {product} = props;
    return (
      <div class="item">
        <a href={'/product/${product.id}'}>
          <img class="img-item" src={product.image}/>
          <div>
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            {/*
            <button className="btn-item">
              ADD TO CART
            </button>
            */}
          </div>
        </a>
      </div>
    )
}



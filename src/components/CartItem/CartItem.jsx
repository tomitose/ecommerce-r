import React from 'react'

const CartItem = ({items}) => {

  return (
        <div class="card mb-3" style={{maxWidth:"540px;"}}>
    <div class="row g-0">
        <div class="col-md-4">
        <img src={items.img} class="img-fluid rounded-start" alt="..."/>
        </div>
        <div class="col-md-8">
        <div class="card-body">
            <h5 class="card-title">{items.name}</h5>
        </div>
        </div>
    </div>
    </div>
  )
}

export default CartItem
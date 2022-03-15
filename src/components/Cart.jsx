import { useCartContext } from '../context/CartContext'
import CartItem from './CartItem/CartItem'

const Cart = () => {
    
   const {cartList} = useCartContext()

  return (
    <div>
      {cartList.lenght < 1 ? <h3>No Products in the Cart</h3> : cartList.map((items) => (
        <CartItem key={items.id} items={items} />
      ))}
    </div>
  )
}

export default Cart
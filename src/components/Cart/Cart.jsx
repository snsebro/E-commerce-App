import React from 'react'
import {connect} from 'react-redux'
import CustomButton from '../CustomButton/CutomButtom'
import CartItem from '../CartItem/CartItem'

import './Cart.scss'

const Cart = ({cartItems}) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {
        cartItems.map(cartItem => <CartItem key={cartItems.id} item={cartItem}/>)
      }
    </div>
      <CustomButton>
        GO TO CHECKOUT
      </CustomButton>
  </div>
)

const mapStateToProps = ({cart: {cartItems}}) => ({
  cartItems
})

export default connect(mapStateToProps)(Cart)
import React from 'react'
import { connect } from 'react-redux'
import {selectCartItems} from '../../redux/cart/cart.selectors'
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

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state)
})

export default connect(mapStateToProps)(Cart)
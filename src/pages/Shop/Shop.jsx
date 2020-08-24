import React from 'react'
import { Route } from 'react-router-dom'

import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview'
import Category from '../Category/Category'


const Shop = ({match}) => (
      <div className='shop-page'>
    < Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:categoryId`} component={Category}/>
      </div>
    )
  

// const mapStateToProps = state => {
//   return {
//     collections: state.shop.collections
//   }
// }


export default Shop

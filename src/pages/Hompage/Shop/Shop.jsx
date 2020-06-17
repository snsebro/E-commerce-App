import React, { Component } from 'react'
import CollectionPreview from '../../../components/CollectionPreview/CollectionPreview'

const collections = require('../../../collections')

export default class Shop extends Component {
  constructor() {
    super()
    this.state = {
      collections: collections
    }
  }
  render() {
    const { collections } = this.state
    return (
      <div className='shop-page'>
        {
          collections.map(({id, ...otherCollectionProps}) => (
        <CollectionPreview key={id} {...otherCollectionProps}/>
          ))
        }
      </div>
    )
  }
}

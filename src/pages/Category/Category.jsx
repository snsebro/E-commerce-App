import React from "react";
import { connect } from "react-redux";
import { selectCategory } from "../../redux/shop/shop.selectors";


import "./Category.scss";
import CollectionItem from "../../components/CollectionItem/CollectionItem";

const Category = ({ category }) => {
  const {title, items} = category
  return (<div className="category">
    <h2 className='title'>{title}</h2>
    <div className="items">
      {
        items.map(item => <CollectionItem key={item.id} item={item}/>)
      }
    </div>
  </div>)
};

const mapStateToProps = (state, ownProps) => ({
  category: selectCategory(ownProps.match.params.categoryId)(state)
})

export default connect(mapStateToProps)(Category);

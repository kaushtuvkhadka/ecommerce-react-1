import React, { useContext } from 'react'
import './CSS/ShopCat.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_i from '../Components/assets/dropdown_icon.png'
import Item from '../Components/Item/Item'

const ShopCat = (props) => {
  const {all_product} = useContext(ShopContext);
  console.log(all_product);
  return (
    <div className='shop-category'>
        <img className='shopcategory-banner' src={props.banner} alt="" />
        <div className="shopcategory-indexsort">
          <p>
            <span>showing 1-12</span> out of 36 products
          </p>
          <div className="shopcategory-sort">
            Sort by <img src={dropdown_i} alt="" />
          </div>
        </div>
        <div className="shopcategory-products">
          {all_product.map((item,index)=>{
            if(props.category === item.category){
              return <Item 
                key={index} 
                id={item.id} 
                name={item.name} 
                image={item.image} 
                new_price={item.new_price} 
                old_price={item.old_price} />
            } else{
              return null;
            }
          })}
        </div>
        <div className="shopcategory-loadmore">
          Explore More
        </div>
    </div>
  )
}

export default ShopCat
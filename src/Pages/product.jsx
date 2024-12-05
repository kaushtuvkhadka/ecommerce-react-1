import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum';

const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();//to get product id for finding prduct from all product and asign them to a var
  const product = all_product.find((e)=> e.id === Number(productId))//when this is true the product of prodcutId stored to product for displaying
  return (
    <div>
      <Breadcrum Product = {Product} />
    </div>
  )
}

export default Product
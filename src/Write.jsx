import app from "./firebaseConfig";
import { getDatabase, ref, set, push } from "firebase/database";
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

async function WriteProduct(props) {
    
    console.log("inside");
    let img = props.image;
    let name = props.name;
    let category = props.category;
    let price = props.new_price;
    let old_price = props.old_price;

    const db = getDatabase(app);
    const newDocRef = push(ref(db, `products/${category}`));
    set(newDocRef, {
      img: img,
      name: name,
      category: category,
      price: price,
      oldPrice: old_price
    }).then( () => {
      console.log("data saved successfully")
    }).catch((error) => {
      console.log("error: ", error.message);
    })
  
 
  

 
}

WriteProduct.propTypes = {
    img: PropTypes.string,
    name: PropTypes.string,
    category: PropTypes.string,
    price: PropTypes.number,
    oldPrice: PropTypes.number
}

export default WriteProduct
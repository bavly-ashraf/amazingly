import React, {useState} from "react";
import './Welcome.css';
import products from '../Products/products.json';
import Navbar from '../Navbar';

function Welcome() {

    const [selectedProduct, setSelectedProduct] = useState([]);
    
     const productHandler = (e) => {
        //e.preventDefault();
        //localStorage.setItem('selectedproduct', e);
        setSelectedProduct([...selectedProduct,e]);
        localStorage.setItem('cartList', JSON.stringify(selectedProduct));
        //console.log(e);
        //return e;
    }
    //console.log(selectedProduct)
    console.log(JSON.parse(localStorage.getItem('cartList')))
    return (
        <div className="bckgrnddiv">
            <Navbar />
            <h1 className='h1welcome2'>Welcome Back!</h1>
<div className='productsdiv'>

  {products.map(product => {
    return (
      <div key={ product.id } >
        <h3>{ product.title }</h3>
        <img src={require(`../Images/${ product.image }.jpg`)} alt={ product.title } className="prodimg"></img>
        <p>{ product.description }</p>
        <p>EGP{ product.price }</p>
        <p>
          <button className="addbtn" onClick={() => productHandler(product)}>Add to Cart</button>
        </p>
      </div>
    );
  })}
</div>
</div>
    );
  }
  
  export default Welcome;
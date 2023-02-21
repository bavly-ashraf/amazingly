import React, { useState , useEffect } from 'react';
import './shoppingCart.css'
import Navbar from '../Navbar';
//import { useLocation } from 'react-router-dom';

function ShoppingCart() {
    //{items.map(item => <div>{item.title}</div>)}
    const [arr, setArr] = useState([]);
    //const location = useLocation();
    useEffect(() => {
        /*if (location.state.selectedProduct !== [])
        {
        setArr(location.state.selectedProduct);
        }*/
const data = JSON.parse(localStorage.getItem('cartList'));
const existingItems = JSON.parse(localStorage.getItem('existingitems'));
console.log(existingItems)
//setArr(data);
if (existingItems !== null)
{
    const update = [...existingItems,...data];
    localStorage.setItem('cartList', JSON.stringify(update));
    setArr(update);
}
else
{
    localStorage.setItem('existingitems', JSON.stringify(data))
    setArr(data);
}
      },[]);

      const deleteAll = () => {
localStorage.setItem('cartList', JSON.stringify([]));
localStorage.setItem('existingitems', JSON.stringify([]));
setArr([]);
      }

      const deleteItem = (e) => {
const filteredArr = arr.filter((item) => (item !== e));
//console.log(filteredArr);
setArr(filteredArr);
localStorage.setItem('cartList',JSON.stringify(filteredArr));
localStorage.setItem('existingitems', JSON.stringify(filteredArr));
      }
    
      console.log(arr);

    return (
<div className='bckgrnddivcart'>
    <Navbar />
    <h1 className='shoph1'>Shopping Cart</h1>
    {arr.map((item, idx) => 
    (<div className='productscart' key={item} >
        <h3>{ item.title }</h3>
        <p>EGP{ item.price }</p>
        <button className='dltitembtn' onClick={() => deleteItem(item)}>Delete Item</button>
    </div>
    ))}
    <button className='rmvbtn' onClick={deleteAll}>Remove All</button>
</div>
    );
  }
  
  export default ShoppingCart;
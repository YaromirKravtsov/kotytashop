import React from 'react';
import CartItemComponent from './CartItemComponent';
const CartListComponent = ({cartProducts,incrementProduct,decrementProduct}) => {
    return (
        <>
            {cartProducts?.map((product,index)=>(
          
                <CartItemComponent key  ={index} product ={product} incrementProduct = {incrementProduct} decrementProduct={decrementProduct}/>
            ))}
        </>
    );
}

export default CartListComponent;

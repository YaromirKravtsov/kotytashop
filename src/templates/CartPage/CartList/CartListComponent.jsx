import React from 'react';
import CartItemComponent from './CartItemComponent';
const CartListComponent = ({cartProducts,incrementProduct,decrementProduct,deleteProduct}) => {
    return (
        <>
            {cartProducts?.map((product,index)=>(
          
                <CartItemComponent key  ={product.id+product.option} product ={product} incrementProduct = {incrementProduct} decrementProduct={decrementProduct} deleteProduct ={deleteProduct}/>
            ))}
        </>
    );
}

export default CartListComponent;

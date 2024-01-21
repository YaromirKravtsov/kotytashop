import React from 'react';
import style from './CartPageComponent.module.css'
const CartPageComponent = () => {
    return (
        <>
               <div class={style.cart}>
            <div class="container">
                <div class = {style.cart__row}>
                    <div class={style.cartTitle}>
                        Товари у вашому кошику
                    </div>
                    <div class={style.cart__top}>
                        <div class={style.cart__topName}>Товар</div>
                        <div class={style.cart__topQuantity}>Кількість</div>
                        <div class={style.cart__topPrice}>Ціна</div>
                    </div>
                    <div class={style.cart__main}>
                        
                        {/* <?php
                        global $woocommerce;
                        $cart = $woocommerce->cart;
                        
                        if ($cart->get_cart_contents_count() > 0) {
                            $totalPrice;
                            $totalPrice = 0;

                            foreach ( WC()->cart->get_cart() as $cart_item_key => $cart_item ) {
                                $_product = $cart_item['data'];
                                $product_image = $_product->get_image_id();
                                $product_image = wp_get_attachment_url($product_image);
                                $totalPrice+=intval(($_product->get_price()))*$cart_item['quantity'];
                                $selected_attribute = $cart_item['selected_attribute'];
                                  
                            ?> */}
                            <div class={style.cartProduct} data-product_id = "<?php echo $cart_item['product_id'] ?>">
                            <img src="<?php echo $product_image ?>" alt="<?php echo  $_product->get_title(); if (!empty($selected_attribute))  echo esc_html($selected_attribute); ?>" class="product-img"/>
                            <div class={style.counterPriceAdaptive}>
                             {/*    <div class="product-title"><?php echo  $_product->get_title(); if (!empty($selected_attribute))  echo '</br> <span style = "color:#979797;">'.esc_html($selected_attribute)."</span>";?></div>
                                <?php 
                                   
                                       
                                
                                   
                                ?> */}
                                <div class={style.counter}>
                                    <div class={`${style.counterMinus} ${style.quantityDecrease}`} id="counterMinus">-</div>
                                    <div class={`${style.counterValue} ${style.basket__cardQuantityValue}`} id="counterValue">{/* <?php echo  $cart_item['quantity'] ?> */}</div>
                                    <div class={`${style.counterPlus}  ${style.quantityIncrease}`} id="counterPlus">+</div>
                                </div>
                            </div>
                            <div class={style.productPrice} data-single_price = "<?php echo  intval(($_product->get_price())) ?>">{/*  <?php echo  intval(($_product->get_price()))*$cart_item['quantity']?> ₴  */} </div>
                            <div class={`${style.productDelete} ${style.removeButton}`} >
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="27" viewBox="0 0 25 27" fill="none">
                                    <path d="M15.375 10.7222V20.4444M9.625 10.7222V20.4444M3.875 5.16667V21.5556C3.875 23.1113 3.875 23.8886 4.18836 24.4828C4.46399 25.0054 4.90349 25.4312 5.44446 25.6975C6.05885 26 6.86355 26 8.47056 26H16.5294C18.1364 26 18.94 26 19.5544 25.6975C20.0953 25.4312 20.5363 25.0054 20.812 24.4828C21.125 23.8891 21.125 23.1125 21.125 21.5598V5.16667M3.875 5.16667H6.75M3.875 5.16667H1M6.75 5.16667H18.25M6.75 5.16667C6.75 3.87238 6.75 3.22556 6.96885 2.71509C7.26064 2.03445 7.81996 1.49337 8.52441 1.21145C9.05276 1 9.72292 1 11.0625 1H13.9375C15.2771 1 15.9469 1 16.4752 1.21145C17.1797 1.49337 17.7392 2.03445 18.031 2.71509C18.2499 3.22556 18.25 3.87239 18.25 5.16667M18.25 5.16667H21.125M21.125 5.16667H24" stroke="black" stroke-opacity="0.64" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                        </div>
                      {/*   <?php 
                                }
                            } else {
                                echo '<div class="empty-cart">Кошик порожній</div>';
                            }
                            ?> */}
                    </div>
                    <div class={style.cartSubmit}>
                        <div class={style.cartTotalPrice}>Загальна вартість: &nbsp; <span id="totalPrice"> {/* <?php  if(gettype($totalPrice) == "NULL") echo '0'.'₴'; else echo $totalPrice." ₴" ?> */} </span></div>
                        <a href = "" class={style.cartContinueBtn}>Продовжити покупки</a>
                        <a href="#" class ={style.cartPlaceOrderBtn}>Оформити заказ</a>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default CartPageComponent;

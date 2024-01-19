import React from 'react';

const MySuccess = () => {
    return (
        <div class="success">
        <div class="success_icon">
        <img src="<?php echo get_template_directory_uri()?>/assets/img/single-page/cat-animation.gif" alt="" loading="lazy"/>
        </div>
        <div class="success__text">Товар успішно додано до кошика!</div>
        <div class="success--btn__row">
            <a href = "<?php echo get_permalink(get_page_by_path('Catalog')); ?>"  class ="success__cshp" >Продовжити покупки</a>
            <a href="<?php echo wc_get_cart_url(); ?>" class="success__vica">Переглянути кошик</a>
        </div>
    </div>
    );
}

export default MySuccess;

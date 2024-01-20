const hostUrl = 'http://kotyatashop.com/wp-json/api';

export const fetchProductsApi = async () => {
  try{
    const response = await fetch(`${hostUrl}/get-short-products`)
    const data = await response.json();

    return data;
  }catch(e){
    console.log(e);
    throw e;
  }
}

export const getHomeProd = async() => {/* get-home-products */
  try{
    const response = await fetch(`${hostUrl}/get-home-products`)
    const data = await response.json();
    if (!response.ok) {
      throw new Error('Network response was not ok: ' + response.statusText);
    }
    return data;
  }catch(e){
    console.log(e);
    throw e;
  }
}

export const getProductBySlug = async(slug) => {
  try{
    const response = await fetch(`${hostUrl}/get-product-by-slug?slug=${slug}`)
    const data = await response.json();
    if (!response.ok) {
      throw new Error('Network response was not ok: ' + response.statusText);
    }
    return data;
  }catch(e){
    console.log(e);
    throw e;
  }
}
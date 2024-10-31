import { CartItem } from '~/context/cartContext'; // Adjust path as needed

export const filterCartItems = (cart: CartItem[], allProducts) => {
    const filteredList = cart.map(item => {
        console.log('cart item ==-=-=-=>', item);
        const product = allProducts.find(prod => prod.stripePriceId === item.priceId)
        return {...item, ...product}
    })
    return filteredList
  };
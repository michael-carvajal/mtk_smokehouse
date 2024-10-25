import React from 'react';

interface CartItem {
    priceId: string;
    quantity: number;
}

interface CartQuantityProps {
    cart: CartItem[];
}

const CartQuantity: React.FC<CartQuantityProps> = ({ cart }) => {
    // Sum up the total quantity from the cart
    const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

    // Only display if there are items in the cart
    if (totalQuantity === 0) {
        return null; // Don't render anything if the cart is empty
    }

    return (
        <div style={{
            position: 'relative',
            display: 'inline-block'
        }}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-shopping-cart"
                style={{ width: 24, height: 24 }}
            >
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l.89 5.34a2 2 0 002 1.66h11.72a2 2 0 001.99-1.75l1.38-9.25H5.21"></path>
            </svg>
            <div
                style={{
                    position: 'absolute',
                    top: '-10px',
                    right: '-10px',
                    backgroundColor: 'gray',
                    color: 'white',
                    borderRadius: '50%',
                    width: '20px',
                    height: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '12px',
                    fontWeight: 'bold',
                }}
            >
                {totalQuantity}
            </div>
        </div>
    );
};

export default CartQuantity;

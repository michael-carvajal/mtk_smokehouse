
    import React from 'react';
    //import './Navigation.css';

    function Navigation({ isLoaded }){

      return (
        <header className='flex   md:flex-col md:items-center'>
          <div className='h-24 ml-[45%] md:m-0 flex-grow'>MTK Logo</div>
          <ul className='hidden md:flex text-xl justify-around w-full'>
            <li>Home</li>
            <li>Our Roots</li>
            <li>Products</li>
            <li>Contact Us</li>
            <li>Order Online!</li>
          </ul>
          <div>
            <i className='fa fa-bars text-5xl md:hidden'></i>
          </div>
        </header>
      );
    }

    export default Navigation;
                  
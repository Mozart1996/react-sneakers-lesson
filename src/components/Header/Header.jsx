import React from 'react'
import './Header.scss'

const Header = () => {
   return(
      <header className="header">
         <div className="header__title">
            <img className='sneakers-logo' src='/img/logo.png'  />
            <div>
               <h3>React Sneakers</h3>
               <p>Магазин найкращих кросівок</p>
            </div>
         </div>
         <div className='header__icons'>
            <div className='shopping-cart'>
               <img src="/img/trash.svg" alt="" />
               <span>1205 грн</span>
            </div>
            <img src="/img/heart.svg" alt="" />
            <img src="/img/user.svg" alt="" />
         </div>
      </header>
   )
}

export default Header
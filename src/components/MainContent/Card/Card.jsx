import React from 'react'
import './Card.scss'

const Card = () => {
   return (
      <div className='card'>
         <img className="good-like active" src="/img/heart-shoe.png" alt="" />
         <img className="good-photo" src="/img/shoe1.jpg" alt="" />
         <div className='good-info'>
            <p>Чоловічі кросівки</p>
            <p>Nike Blazer Mid Suede</p>
         </div>
         <div className='price-info'>
            <div className='price'>
               <p>Ціна</p>
               <span>12 999 грн.</span>
            </div>
            <button className='addBtn'>
               <img src="/img/plus.png" alt="" />
            </button>
         </div>
      </div>
   )
}

export default Card

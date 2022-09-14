import React from 'react'
import Card from './Card/Card.jsx'
import './MainContent.scss'

const MainContent = () => {
   return(
      <>
         <div className='goods__header'>
            <h1>Всі кросівки</h1>
            <input className='search_input' type="text"
            placeholder='Пошук...' />
         </div>
         <div className="goods__list">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
         </div>
      </>
   )
}

export default MainContent
import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import img1 from '../../../Assets/Images/leaderboarding.avif';
import img2 from '../../../Assets/Images/filterranking.avif';
import img3 from '../../../Assets/Images/data analytics.avif';
import img4 from '../../../Assets/Images/carprice.avif';


function Cards() {
  return (
    <div className='cards'>
      <h1>Check out our features now!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          <CardItem
              src={img4}
              text='Predict resale value of your Vehicle!'
              label='Predict price'
              path='/'
            />
            </ul>
            
          <ul className='cards__items'>
            <CardItem
              src={img1}
              text='Put an eye on who is leading the market!'
              label='Leaderboard'
              path='/'
            />
            <CardItem
              src={img3}
              text='Get insights from the Analytics page!'
              label='Data Analytics'
              path='/'
            />
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

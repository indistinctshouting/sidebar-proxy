import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import style from './Summary.css';

library.add(faDollarSign);

const Price = (props) => {
  let prices, price1;
  let color2, color3, color4;
  if (!!props.priceRange) {
    prices = props.priceRange.replace('$','').split('-');
    price1 = parseInt(prices[0]);
    console.log(price1);
    if (price1 >= 15) {
      color2 = style.greentext;
    } 
    if (price1 >= 30) {
      color3 = style.greentext;
    }
    if (price1 >= 60) {
      color4 = style.greentext;
    }
  }

  return (
  <li className={style.container}>
      <div className={style.summaryiconsmall}>
        <FontAwesomeIcon icon="dollar-sign" className={style.greentext}/>
        <FontAwesomeIcon icon="dollar-sign" className={color2}/>
        <FontAwesomeIcon icon="dollar-sign" className={color3}/>
        <FontAwesomeIcon icon="dollar-sign" className={color4}/>
      </div>
      <div className={style.summarydiv}>
        <span>Price Range </span>
        <span className={style.bolded}>{props.priceRange}</span>
      </div>
    </li>
  )
}

export default Price;
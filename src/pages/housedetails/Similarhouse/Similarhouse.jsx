import React, { useState, useEffect } from 'react';
import Newlist from '../../newlylisted/Newlist';
import "./Simplehouse.scss"
export const CardItem = ({
    id,
    posted,
    price,
    bed,
    lock,
    sqft,
    place,
    location,
    category,
  
  }) => {
    return (
        <div className='similarhouse'>
            <span>{price}</span>
        </div>
    )}
{Newlist.map((item) => (
    <CardItem
      id={item.id}
      posted={item.posted}
      price={item.price}
      bed={item.bed}
      lock={item.lock}
      sqft={item.sqft}
      place={item.place}
      location={item.location}
      category={item.category}
      images={item.images}
      newlylisted={item.newlylisted}
    />
  ))}
const Similarhouse = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') { 
      if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
        setShow(false); 
      } else { // if scroll up show the navbar
        setShow(true);  
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY); 
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
        <nav className={`active ${show && 'hidden'}`}>
        <CardItem/>
        </nav>
  );
};

export default Similarhouse;
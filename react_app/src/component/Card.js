import React from "react";

export default function(prop){
 return (
    <div className='item'>
       <img src={prop.cards.img}/>
       <h3 className='title'>{prop.cards.title}</h3>
       <p className='pargraph'>{prop.cards.description}</p>
       <p><a href={prop.cards.href} className='ul_two' >اعرف اكثر</a></p>
    </div>




 );
}
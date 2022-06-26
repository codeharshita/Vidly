import React from 'react';
import { genres } from '../../services/fakeGenreService';

const Listgroup = (props) => {

    const {items, textProperty, valueProperty}=props; //Object destructuring.


    return <ul className="list-group">
        {items.map( item => 
        <li key={item[valueProperty]} className="list-group-item">
            {item[textProperty]}
         </li> )}
        
    </ul>;
};
 
export default Listgroup;
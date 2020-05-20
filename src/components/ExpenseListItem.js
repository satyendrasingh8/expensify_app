import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

 const ExpenseListItem = ({id,description,amount,createdAt}) =>(
    <div>
    <Link to={`/edit/${id}`}>
<h2>{description} </h2>
   </Link>
  <p>
  {numeral(amount/100).format('$0,0.00')} 
    <strong> -  </ strong>
   {moment(createdAt).format('ddd MMM Do,YYYY')}  
   </p>

    </div>
);

export default ExpenseListItem;
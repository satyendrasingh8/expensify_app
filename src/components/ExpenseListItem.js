import React from 'react';
import {Link} from 'react-router-dom';




 const ExpenseListItem = ({id,description,amount,createdAt}) =>(
    <div>
    <Link to={`/edit/${id}`}>
<h2>{description} </h2>
   </Link>
<p>{amount} - {createdAt} </p>

    </div>
);

export default ExpenseListItem;
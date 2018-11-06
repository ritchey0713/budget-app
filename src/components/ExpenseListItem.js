import React from 'react'
import { Link } from 'react-router-dom';

export const ExpenseListItem = ({ description, amount, createdAt, id }) => (
  <div>
    <ul>
    <Link to={`/edit/${id}`} >
      <li><h3> {description}</h3> </li>
    </Link>
    <li> {amount} </li>
    <li> {createdAt} </li>
    
    </ul>
  </div>
)

export default ExpenseListItem

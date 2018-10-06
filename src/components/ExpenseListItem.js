import React from 'react'
import { connect } from 'react-redux'
import { removeExpense } from '../actions/expenses'
import { Link } from 'react-router-dom';
const ExpenseListItem = ({ dispatch, description, amount, createdAt, id }) => (
  <div>
    <ul>
    <Link to={`/edit/${id}`} >
      <li><h3> {description}</h3> </li>
    </Link>
    <li> {amount} </li>
    <li> {createdAt} </li>
    <button onClick={() => {
      dispatch(removeExpense({ id }))
    }}> &times; </button>
    </ul>
  </div>
)

export default connect()(ExpenseListItem)

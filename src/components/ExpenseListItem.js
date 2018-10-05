import React from 'react'
import { connect } from 'react-redux'
import { removeExpense } from '../actions/expenses'

const ExpenseListItem = ({ dispatch, description, amount, createdAt, id }) => (
  <div>
    <ul>
    <li><h3> {description}</h3> </li>
    <li> {amount} </li>
    <li> {createdAt} </li>
    <button onClick={() => {
      dispatch(removeExpense({ id }))
    }}> &times; </button>
    </ul>
  </div>
)

export default connect()(ExpenseListItem)

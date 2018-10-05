import React from 'react'

// const ExpenseListItem = (props) => (
//   <div>
//     <ul>
//     <li><h3> {props.expense.description}</h3> </li>
//     <li> {props.expense.amount} </li>
//     <li> {props.expense.createdAt} </li>
//     </ul>
//   </div>
// )
//
// export default ExpenseListItem

const ExpenseListItem = ({ description, amount, createdAt }) => (
  <div>
    <ul>
    <li><h3> {description}</h3> </li>
    <li> {amount} </li>
    <li> {createdAt} </li>
    </ul>
  </div>
)

export default ExpenseListItem

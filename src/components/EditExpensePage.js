import React from 'react';
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm';
import { removeExpense } from '../actions/expenses'
import { editExpense } from './../actions/expenses';




export class EditExpensePage extends React.Component {
  
  onSubmit = (expense) => {
    this.props.editExpense(this.props.expense.id, expense)
    this.props.history.push('/')
  }

  onClick = (expense) => {
    this.props.removeExpense({id: this.props.expense.id})
    this.props.history.push('/')
  }

  render(){
    return(
      <div>
        <ExpenseForm
          expense={this.props.expense}
          onSubmit={this.onSubmit} />
          <button onClick={this.onClick}> &times; </button>
    </div>
    )
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  editExpense: (id, expense) => dispatch(editExpense(id, expense)),
  removeExpense: (id) => dispatch(removeExpense(id))
})

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => (expense.id === props.match.params.id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)


import React, { Component } from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'
import 'react-dates/initialize';

// const date = new Date();
const now = moment();
console.log(now.format("MMM Do, YYYY"))

class ExpenseForm extends Component {
  state = {
    description: '',
    note: '',
    amount: "",
    createdAt: moment(),
    calanderFocused: false
  }
  onDescriptionChange = (e) => {
    const description = e.target.value
    this.setState(() => ({ description }))
  }

  onNoteChange = (e) => {
    const note = e.target.value
    this.setState(() => ({ note }))
  }

  onAmountChange = (e) => {
    const amount = e.target.value
    if(amount.match(/^\d*(\.\d{0,2})?$/)){
      this.setState(() => ({ amount }))
    }
  }

  onDateChange = (createdAt) => {
    this.setState(() => ({
      createdAt
    }))
  }

  onFocusChange = ({ focused }) => {
    this.setState(() => ({
      calanderFocused: focused
    }))
  }

  render(){
    return(
      <div>
      <form>
        <input
          type="text"
          placeholder="Description"
          autoFocus
          value={this.state.description}
          onChange={this.onDescriptionChange}
        />
        <input
          type="text"
          placeholder="Amount"
          value={this.state.amount}
          onChange={this.onAmountChange}
        />
        <SingleDatePicker
          date={this.state.createdAt}
          onDateChange={this.onDateChange}
          focused={this.state.calanderFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false }
        />
        <textarea
          placeholder="Add a note for the expense (OPTIONAL)"
          value={this.state.note}
          onChange={this.onNoteChange}
          >
        </textarea>
        <button>Add Expense</button>
          </form>
      </div>
    )
  }
}

export default ExpenseForm

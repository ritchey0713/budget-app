import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters'
import { DateRangePicker } from 'react-dates'


export class ExpenseListFilters extends Component {
  state = {
    calendarFocused: null,

  }

  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate)
    this.props.setEndDate(endDate)
  }

  onFocusChange = (calendarFocused) => {
      this.setState(() => ({ calendarFocused }))
  }
  
  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value)
  }

  onSelectChange = (e) => {
    if (e.target.value === "date"){
      this.props.sortByDate()
    }else if(e.target.value === "amount"){
      this.props.sortByAmount()
    }
  }

  render(){
    return (
      <div>
      <input
        type="text"
        value={this.props.filters.text} onChange={this.onTextChange}/>

      <select
        value={this.props.filters.onSortBy} 
        onChange={this.onSelectChange}>
        <option value="date">Date</option>
        <option value="amount">Amount</option>
      </select>

        <DateRangePicker 
          startDate={this.props.filters.startDate}
          startDateId={"Start Date"}
          endDateId={"End Date"}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
          showClearDates={true}
        />
    
    </div>
    )
  }
}


const mapStateToProps = (state) =>( {
    filters: state.filters
  }
)

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount()),
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters)

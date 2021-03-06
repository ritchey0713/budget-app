import React from 'react'
import { shallow } from 'enzyme';
import moment from 'moment'
import { ExpenseListFilters } from './../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixture/filters'


let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper

beforeEach(() => {
  setTextFilter = jest.fn(),
  sortByDate = jest.fn(),
  sortByAmount = jest.fn(),
  setStartDate = jest.fn(),
  setEndDate = jest.fn()
  wrapper = shallow(
    <ExpenseListFilters 
    filters={filters}
    setTextFilter={setTextFilter}
    sortByAmount={sortByAmount}
    sortByDate={sortByDate}
    setEndDate={setEndDate}
    setStartDate={setStartDate}
    />
  )
})




test('should match snapshot', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should match snapshot with alt data', () => {
  wrapper.setProps({
    filters: altFilters
  })
  expect(wrapper).toMatchSnapshot()
})

test('should handle sort Text change', () => {
  const value = 'Phone'
  wrapper.find('input').at(0).simulate('change', {
    target: { value }
  })
  expect(setTextFilter).toHaveBeenLastCalledWith(value)
})

test('should handle sort by date', () => {
  const value = 'date'
  wrapper.setProps({
    filters: altFilters
  })
  wrapper.find('select').simulate('change', {
    target: { value }
  })
  expect(sortByDate).toHaveBeenCalled()
})

test('should sort by amount', () => {
  const value = 'amount'
  wrapper.setProps({
    filters: altFilters
  })
  wrapper.find('select').simulate('change', {
    target: { value }
  })
  expect(sortByAmount).toHaveBeenCalled()
})

test('should handle date changes', () => {
  const startDate = moment(0).add(4, 'days')
  const endDate = moment(0).add(3, "years")
  wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({startDate, endDate})
  expect(setStartDate).toHaveBeenCalledWith(startDate)
  expect(setEndDate).toHaveBeenCalledWith(endDate)
})

test('should focus calender', () => {
  const calenderFocused = 'startDate'
  wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(calenderFocused)
  expect(wrapper.state('calendarFocused')).toBe(calenderFocused)
})
import React from 'react'
import { shallow } from 'enzyme';
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
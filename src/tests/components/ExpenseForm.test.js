import React from 'react'
import { shallow } from 'enzyme'
import ExpenseForm from './../../components/ExpenseForm';
import expenses from '../fixture/expenses'
import moment from 'moment'

test('should render form correctly', () => {
  const wrapper = shallow(<ExpenseForm />)
  expect(wrapper).toMatchSnapshot()
})

test('should render expense form with data', () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[0]}/>)
  expect(wrapper).toMatchSnapshot()
})

test('should render error for bad submit', () => {
  const wrapper = shallow(<ExpenseForm/>)
  expect(wrapper).toMatchSnapshot()
  wrapper.find('form').simulate('submit', {
    preventDefault: () => { }
  })
  expect(wrapper.state('error').length).toBeGreaterThan(0)
  expect(wrapper).toMatchSnapshot()
})

test('should set desc on change ', () => {
  const value = 'New Description'
  const wrapper = shallow(<ExpenseForm/>)
  wrapper.find('input').at(0).simulate('change', {
    target: { value }
  })
  expect(wrapper.state('description')).toBe(value)
})

test('should set note on textarea change', () => {
  const value = 'New Note'
  const wrapper = shallow(<ExpenseForm/>)
  wrapper.find('textarea').simulate('change', {
    target: { value }
  })
  expect(wrapper.state('note')).toBe(value)
})

test('should set amount on change', () => {
  const value = '22.15'
  const wrapper = shallow(<ExpenseForm/>)
  wrapper.find('input').at(1).simulate('change', {
    target: { value }
  })
  expect(wrapper.state('amount')).toBe(value)
})

test('should not set amount with bad data', () => {
  const value = '22.1555'
  const wrapper = shallow(<ExpenseForm/>)
  wrapper.find('input').at(1).simulate('change', {
    target: { value }
  })
  expect(wrapper.state('amount')).toBe("")
})

test('should call onSubmit prop for valid form submit', () => {
  const onSubmitSpy = jest.fn()
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>)
  wrapper.find('form').simulate('submit', {
    preventDefault: () => { }
  })
  expect(wrapper.state('error')).toBe("")
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description: expenses[0].description,
    amount: expenses[0].amount,
    note: expenses[0].note,
    createdAt: expenses[0].createdAt
  })
})

test('should set new date on date change', () => {
  const now = moment()
  const wrapper = shallow(<ExpenseForm/>)
  wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now)
  expect(wrapper.state('createdAt')).toEqual(now)
})

test('should set calender focus on change', () => {
  const focused = true
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')({ focused })
  expect(wrapper.state('calanderFocused')).toEqual(true)
})
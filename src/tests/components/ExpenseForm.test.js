import React from 'react'
import { shallow } from 'enzyme'
import ExpenseForm from './../../components/ExpenseForm';
import expenses from '../fixture/expenses'

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
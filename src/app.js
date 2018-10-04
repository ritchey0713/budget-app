import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
const store = configureStore();

store.dispatch(addExpense({ description: "Water Bill", amount: 1000, createdAt: -221000 }));
store.dispatch(addExpense({ description: "Gas Bill", amount: 1000, createdAt: -100 }));
store.dispatch(setTextFilter("gas"))

const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses)

ReactDOM.render(<AppRouter />, document.getElementById('app'));

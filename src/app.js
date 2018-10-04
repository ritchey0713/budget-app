import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
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

setTimeout(() => {
  store.dispatch(setTextFilter("water"))
}, 3000)

const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses)

const jsx = (
  <Provider store={store}>
    <AppRouter  />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));

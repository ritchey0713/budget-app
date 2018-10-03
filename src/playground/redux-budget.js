import { createStore, combineReducers } from 'redux';

const expensesDefaultState = []

const expensesReducer = (state = expensesDefaultState, action) => {
  switch(action.type) {
    default:
    return state
  }
}

const filtersDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined
}

const filtersReducer = (state = filtersDefaultState, action) => {
  switch(action.type){
    default: 
    return state
  }
}

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
)

console.log(store.getState())

const demoState = {
  expenses: [{
    id: "234234234",
    description: "Rent",
    note: "Final payment for apartment",
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: "amount", // date or amount
    startDate: undefined,
    endDate: undefined
  }
}
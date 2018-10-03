import { createStore, combineReducers } from 'redux';
import uuid from 'uuid'

const addExpense = (
  { description = "", 
    note = "", 
    amount = 0, 
    createdAt = 0 
  } = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt

  }
})

const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id
})

const expensesDefaultState = []

const expensesReducer = (state = expensesDefaultState, action) => {
  switch(action.type) {
    case "ADD_EXPENSE":
      return [
        ...state,
        action.expense
      ]
    case "REMOVE_EXPENSE": 
      return state.filter(({ id }) => id !== action.id
      ) 

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

store.subscribe(() => {
  console.log(store.getState())
})

const expense1 = store.dispatch(addExpense({ description: "Rent", amount: 100 }));
store.dispatch(addExpense({ description: "Coffee", amount: 300 }));
store.dispatch(addExpense({ description: "Keyboard", amount: 10000 }));

store.dispatch(removeExpense({ id: expense1.expense.id }))

console.log(expense1)
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
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

const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
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
    case "EDIT_EXPENSE":
      return state.map((expense) => {
        if(expense.id === action.id){
          return {
            ...expense,
            ...action.updates
          }
        }else{
          return expense
        }
      })  

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

const setTextFilter = (text = "") => ({
  type: "SET_TEXT",
  text
})

const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT"
})

const sortByDate = () => ({
  type: "SORT_BY_DATE"
})

const setStartDate = (date) => ({
  type: "SET_START_DATE",
  date
})

const setEndDate = (date) => ({
  type: "SET_END_DATE",
  date
})

const filtersReducer = (state = filtersDefaultState, action) => {
  switch(action.type){
    case "SET_TEXT":
    return {
      ...state,
      text: action.text
    }
    case "SORT_BY_AMOUNT":
    return {
      ...state,
      sortBy: "Amount"
    }
    case "SORT_BY_DATE":
    return { 
      ...state,
      sortBy: "Date"
    }
    case "SET_START_DATE":
    return {
      ...state,
      startDate: action.date
    }
    case "SET_END_DATE":
    return {
      ...state, 
      endDate: action.date
    }
    default: 
    return state
  }
}

//get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== "number" || expense.createdAt <= endDate;
    const textMatch = true;

    return startDateMatch && endDateMatch && textMatch
  })
}

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
)

store.subscribe(() => {
  const state = store.getState()
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
  console.log(visibleExpenses)
})

const expense1 = store.dispatch(addExpense({ description: "Rent", amount: 100, createdAt: 1000 }));
const expense2 = store.dispatch(addExpense({ description: "Coffee", amount: 300, createdAt: -1000 }));
// store.dispatch(addExpense({ description: "Keyboard", amount: 10000 }));

// store.dispatch(removeExpense({ id: expense1.expense.id }))

// store.dispatch(editExpense(expense2.expense.id, { amount: 500 }))

// store.dispatch(setTextFilter("Rent"));

// store.dispatch(sortByAmount())
// store.dispatch(sortByDate())

// store.dispatch(setStartDate())
   store.dispatch(setStartDate(125))
// store.dispatch(setEndDate(1250))
// store.dispatch(setEndDate())

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
    sortBy: "Amount", // date or amount
    startDate: undefined,
    endDate: undefined
  }
}

const user = {
  name: "John", 
  age: 22
}

console.log({
  ...user,
  location: "USA",
  age: 28
})
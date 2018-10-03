import { createStore} from 'redux'
// const add = ({ a, b }, c) => {
//   return a + b + c
// }
// console.log( add({ a: 1, b: 2 }, 100))

const incrementCount = ( { incrementBy = 1 } = {} ) => ({
  type: "INCREMENT",
  incrementBy
})

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy
})

const resetCount = () => ({
  type: "RESET",
 
})

const setCount = ({ count }) => ({
  type: "SET_COUNT",
  count
})

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type){
    case "INCREMENT": 
    return {
      count: state.count + action.incrementBy
    }

    case "DECREMENT": 
    return {
      count: state.count - action.decrementBy
    }

    case "RESET": 
    return {
      count: 0
    }

    case "SET_COUNT": 
    return {
      count: action.count
    }

    default: 
      return state; 
  }
}

const store = createStore(countReducer)

store.subscribe(() => {
  console.log(store.getState());
})



// store.dispatch({
//   type: "INCREMENT",
//   incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 10 }))

store.dispatch(incrementCount())

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount( {decrementBy: 10 }));

store.dispatch(setCount({ count: 1000 }));
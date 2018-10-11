import { addExpense, editExpense, removeExpense } from '../../actions/expenses';



test("should set up remove expense action", () => {
  const action = removeExpense({ id: "123" })
  expect(action).toEqual({ 
    type: 'REMOVE_EXPENSE',
    id: "123"
   })
})

test("should update a expense action", () => {
  const action = editExpense("123", {note: "a new note"} )
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123",
    updates: {
      note: "a new note"
    }
  })
})

test("should set up add expesne action with provided values", () => {
  const expenseData = {
    description: "Rent",
    note: "This was last months rent!",
    amount: 100500,
    createdAt: 1000
   }
   const action = addExpense(expenseData)
   expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
     ...expenseData,
     id: expect.any(String)
    }
   })
})

test("should set up add expense action with default values", () => {
  const action = addExpense()
   expect(action).toEqual({
     type:"ADD_EXPENSE",
     expense: {
      description: "",
      note: "",
      amount: 0,
      createdAt: 0,
      id: expect.any(String)
     }
   })
})


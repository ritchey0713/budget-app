import filtersReducer from '../../reducers/filters';
import moment from 'moment' 

test("should set up default values", () => {
  const state = filtersReducer(undefined, { type: "@@INIT" })
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")

  })
})
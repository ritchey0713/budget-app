import { setEndDate, 
         setStartDate, 
         sortByAmount, 
         sortByDate, 
         setTextFilter } from '../../actions/filters';
import moment from 'moment'

test("should generate set start date", () => {
  const action = setStartDate(moment(0))
  expect(action).toEqual({
    type: "SET_START_DATE",
    date: moment(0)
  })
})

test("should generate set end date", () => {
  const action = setEndDate(moment(0))
  expect(action).toEqual({
    type: "SET_END_DATE",
    date: moment(0)
  })
})

test("should sort by amount", () => {
  const action = sortByAmount()
  expect(action).toEqual({
    type: "SORT_BY_AMOUNT"
  })
})

test("should sort by date", () => {
  const action = sortByDate()
  expect(action).toEqual({
    type: "SORT_BY_DATE"
  })
})

test("should sort by text value", () => {
  const text = "Test string"
  const action = setTextFilter(text)
  expect(action).toEqual({
    type: "SET_TEXT",
    text: text
  })
})

test('should return all expenses with no arguments', () => {
  const action = setTextFilter()
  expect(action).toEqual({
    type: "SET_TEXT",
    text: ""
  })
})
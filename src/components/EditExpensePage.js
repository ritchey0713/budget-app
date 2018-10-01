import React from 'react';

<<<<<<< HEAD
const EditExpensePage = () => (
  <div>
    This is from my edit expense component
  </div>
);

export default EditExpensePage
=======
const EditExpensePage = (props) => {
console.log(props)
  return(

      <div>
        Editing expense with id of {props.match.params.id}
      </div>

  )
}

export default EditExpensePage
>>>>>>> f2a8e1eb88b16b29d6b7f42e8edf500ccf33826d

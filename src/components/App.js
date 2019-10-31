import React from 'react';
import BookList from '../containers/BookList'
import BookDetail from '../containers/BookDetail'
import { connect } from 'react-redux'
import {addTodo} from '../action';

let Add = ({ dispatch }) => {
  let input1,input2,input3,input4
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
       
          dispatch(addTodo(input1.value,input2.value,input3.value,input4.value))
          input1.value = '',
          input2.value = '',
          input3.value = '',
          input4.value = ''
        }}
      >
        <input
          ref={node => {
            input1 = node
          }}
        />
         <input
          ref={node => {
            input2 = node
          }}
        />
         <input
          ref={node => {
            input3 = node
          }}
        />
         <input
          ref={node => {
            input4 = node
          }}
        />
        <button type="submit">
          Add 
        </button>
      </form>
      <BookList/>
        <BookDetail/>
    </div>
  )
}
Add = connect()(Add)

export default Add
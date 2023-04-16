import React from 'react'

function Todolist(props) {
  return (
    <li className='list-item'>
      {props.item}
    <span className='icons'>
    <i className="fa-solid fa-trash-arrow-up icon-delet" onClick={e=>{
      props.deleteItem(props.index)
    }}></i>
    </span>
    </li>
  )
}

export default Todolist
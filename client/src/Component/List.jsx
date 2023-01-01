import React from 'react'
import {MdCancel} from 'react-icons/md'


const List = (props) => {
    return (
    <>
    <div className='todo_style'>
    <MdCancel className='icon' onClick={()=>{
        props.onSelect(props.id)
    }}/>
    <li>{props.text}</li>
    </div>
    </>
  )
}

export default List
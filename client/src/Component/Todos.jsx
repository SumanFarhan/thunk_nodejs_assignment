import React, { useState } from "react";
import List from "./List";
import { useDispatch, useSelector } from "react-redux";
import { todos } from '../Redux/adduser'

const Todos = () => {
  const loginData = useSelector((state) => state.user.loginData)
  // let list = loginData[0].signupData.todo

  const dispatch = useDispatch()
  const [input, setinput] = useState("");
  const [items, setitems] = useState([]);

  const add = (event) => {
    setinput(event.target.value)
  }

  const listOfItems = () => {
    setitems((oldItems) => {
      if(input){
        dispatch(todos(input))
        return [...oldItems, input]
      }
    })
    setinput("");
  };
  const deleteItem = (id) => {
    console.log("delete")
    setitems((oldItems) => {
      return oldItems.filter((arrElement, index) => {
        return index !== id;
      })
    })
  }

  return (
    <>
      <div className="main">
        <div className="center_div">
          <h1>To-do-list</h1>
          <br />
          <input
            type="text"
            placeholder="Add a item"
            value={input}
            onChange={add}
          />
          <button onClick={listOfItems}>+</button>
          <ol>
            {items.map((itemval, index) => {
              return <List
                key={index}
                id={index}
                text={itemval}
                onSelect={deleteItem}
              />
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default Todos;


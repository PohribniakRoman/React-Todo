import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Stat from "./components/Stat";
import TodoItem from "./components/TodoItem";
import "./styles/style.css";




const addTask = (e,user,update,todo,inputData,updateInputData) => {
  e.preventDefault();
  if(inputData.trim()){
  const cuurentData = [
    ...todo,
    {title:inputData, id: todo.length, date: moment().format('LTS'),name:user},
  ]
  updateInputData("");
  update(cuurentData);
  localStorage.setItem(
    "Todos",
    JSON.stringify(cuurentData)
  );
  }else{
    alert("Write task name")
  }
}

function App() {
  const updateStorage = (data) =>{
    localStorage.setItem("Todos", JSON.stringify(data));
  } 
  const user = localStorage.getItem("user");
  const StoredData = JSON.parse(localStorage.getItem("Todos"));

  const [isLogined, updateLogin] = useState(false);
  const [todo, update] = useState([]);
  const [inputData,updateInputData] = useState('');
  useEffect(()=>StoredData !== null?update(StoredData):null,[])
  useEffect(()=>user!==null?updateLogin(true):null,[])
  console.log(user);  
  return (
    <>
      {isLogined ? (
        <Logout changeStatus={updateLogin} />
      ) : (
        <Login changeStatus={updateLogin} />
      )}
    <div className={isLogined ? "" : "none"}>
      <Form className="form" onSubmit={(e)=>addTask(e,user,update,todo,inputData,updateInputData)}>
        <Form.Label>Add task</Form.Label>
          <InputGroup className="mb-3">
            <Form.Control
              required
              value={inputData}
              placeholder="task name"
              onChange={(e)=>updateInputData(e.target.value)}/>
            <Button type="submit" variant="outline-secondary" id="button-addon2">
              Add
            </Button>
          </InputGroup>
      </Form>
      <ul>
        {todo.map(todoItem => {
          return (
            <TodoItem
              key={todoItem.id}
              data={todoItem}
              changeStatus={() => {
                todo[todoItem.id].isDone = !todoItem.isDone;
                update([...todo]);
                updateStorage(todo);
              }}
              deleteItem={() => {
                const updatedTodos = todo.filter((tI) => {
                  return tI.id !== todoItem.id;
                });
                update(updatedTodos);
                updateStorage(updatedTodos);
              }}
            />
          );
        })}
      </ul>
      <Stat todo={todo} />
    </div>
    </>
  );
}
export default App;

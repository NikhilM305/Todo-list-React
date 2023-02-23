
import './App.css';
import Header from './Mycomponents/Header';
import {Todos} from "./Mycomponents/Todos";
import {Footer} from "./Mycomponents/Footer";
import {AddTodos} from "./Mycomponents/AddTodos";

import React, {useState, useEffect} from 'react';



function App() { 

  // LocalStorage GetItem
let initTodo;
if(localStorage.getItem("todos")===null){
  initTodo = []
   }
else{
 initTodo =JSON.parse(localStorage.getItem("todos"))
}


//Delete Todo
const onDelete = (todo)=>{ 

  console.log("on the delete",todo)
  setTodos(todos.filter((e)=>{
  
    return e!==todo;
  }))


}


//Add Todo
const addTodo  = (title,desc)=>{
let sno;
  if(todos.length==0){
    sno = 0;
  }
  else{

     sno = todos[todos.length-1].sno+1;
  }
 const myTodo = {
  sno:sno,
  title : title,
  desc : desc,
 }
 setTodos([...todos,myTodo])

}
 

//UseState
const [todos, setTodos] = useState (initTodo); 

//UseEffect for LocalStorage SetItem
useEffect(() => {
  localStorage.setItem("todos",JSON.stringify(todos))

 
},[todos])


//These Objects were in UseState like this useState([Objects]) 
    // {
    //   sno: 1,
    //   title: "read",
    //   desc: "to get job"
    // },
    // {
    //   sno: 2,
    //   title: "write",
    //   desc: "to get job"
    // },
    // {
    //   sno: 3,
    //   title: "revise",
    //   desc: "to get job"
    // }
  


  return (
    <>
<Header title="MyTodoList" test="" searchBar={true}/>
<AddTodos addTodo={addTodo}/>
<Todos todos={todos} onDelete={onDelete}/>
<Footer/>

    </>
  );
}

export default App;

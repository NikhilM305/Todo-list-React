import React from 'react'
import {TodoItem} from "../Mycomponents/TodoItem";
export const Todos = (props) => {

  return (
    <div className='container'>
      <h3 className='my-3'>Todos List</h3>
      {props.todos.length===0? "No Todos to display" :
      props.todos.map((todo) => {
        return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
      })
    
      }












{/* {(()=>{
 let array = []
   for(let i=0;i<props.todos.length;i++){
   // array.push(<TodoItem todo={todos[i]}/>)
      array[i]=<TodoItem todo={props.todos[i]}/>
 
 
   }
   
   return array 

})()}
                   */}



         </div>
         
  )
}

// export const Todos = ({todos}) => {


// <h3>Nikhil</h3>
//   let array = []
//   for(let i=0;i<todos.length;i++){
//   // array.push(<TodoItem todo={todos[i]}/>)
//      array[i]=<TodoItem todo={todos[i]}/>


//   }
  
//   return array 
//   }
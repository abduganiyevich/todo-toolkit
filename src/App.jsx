import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo } from './store/todoSlice';

function App() {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos.todos);
  const [input, setInput] = useState('');

  const handleAddTodo = () => {
    dispatch(addTodo({ id: Date.now(), text: input }));
    setInput('');
  };

  const handleRemoveTodo = id => {
    dispatch(removeTodo(id));
  };

  return (
    <div className="App">
      <h1 style={{color:"black",fontSize:"32px",textAlign:"center",marginBottom:"10px "}}>Todo App</h1>
     <div style={{display:"flex",alignItems:"center",justifyContent:"center", gap:"10px"}}>
     <input style={{width:"350px",padding:"10px",borderRadius:"8px"}}
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <button style={{padding:"8px",borderRadius:"5px",cursor:"pointer",border:"none",backgroundColor:"yellowgreen", color:'white'}} onClick={handleAddTodo}>Add Todo</button>
     </div>
      <ul style={{listStyle:"none", display:"flex",alignItems:'center',justifyContent:'center',marginTop:"20px",flexDirection:"column", gap:'15px'}}>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}{' '}
            <button style={{padding:"8px",borderRadius:"5px",cursor:"pointer",border:"none",backgroundColor:"red", color:'white'}} onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

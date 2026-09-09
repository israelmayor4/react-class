import { useState } from 'react';

export default function ToDo() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');


  const addTask = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    setTasks([...tasks, { id: tasks.length + 1, text: inputValue, completed: false }]);
    setInputValue(''); 
  };

  console.log(tasks);
  

  
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };


  const toggleComplete = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div style={{ maxWidth: '400px', margin: '20px auto', padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>My To-Do List</h2>

      
      <form onSubmit={addTask} style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <input 
          type="text" 
          placeholder="Add a new task..." 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          style={{ flex: 1, padding: '8px' }}
        />
        <button type="submit" style={{ padding: '8px 12px', cursor: 'pointer' }}>Add</button>
      </form>

     
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {tasks.map(task => (
          <li 
            key={task.id} 
            style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              padding: '10px',
              borderBottom: '1px solid #eee'
            }}
          >
            <span 
              onClick={() => toggleComplete(task.id)}
              style={{ 
                textDecoration: task.completed ? 'line-through' : 'none',
                color: task.completed ? '#888' : '#000',
                cursor: 'pointer',
                flex: 1
              }}
            >
              {task.completed ? '✅': '❌'}
              {task.text}
            </span>
            <button 
              onClick={() => deleteTask(task.id)}
              style={{ background: '#ff4d4d', color: 'white', border: 'none', padding: '5px 8px', cursor: 'pointer', borderRadius: '3px' }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      {tasks.length === 0 && <p style={{ color: '#888', textAlign: 'center' }}>No tasks yet!</p>}
    </div>
  );
}

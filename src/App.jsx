import { useState } from 'react';

import './App.scss';

import ToDo from './components/ToDo.jsx';

function App() {
  const [isDuplicate, setIsDuplicate] = useState(false);
  const [showTaskWarning, setShowTaskWarning] = useState(false);
  const [toDoDescription, setToDoDescription] = useState('');
  const [toDoList, setToDoList] = useState([]);
  const [toDoTask, setToDoTask] = useState('');

  function handleAddToDo() {
    const newToDo = {
      task: toDoTask,
      description: toDoDescription
    };
    
    const duplicate = toDoList.find(toDo => toDo.task === newToDo.task);
    setIsDuplicate(duplicate);
    
    if (duplicate) {
      setShowTaskWarning(false);
      return;
    }
    
    if (toDoTask) {
      const updatedToDoList = [...toDoList, newToDo];

      setToDoList(updatedToDoList);
      setShowTaskWarning(false);
    } else {
      setShowTaskWarning(true);
    }
  }

  function handleRemoveToDo(toDo) {
    const updatedToDoList = [...toDoList];
    const selectedToDoIndex = updatedToDoList.indexOf(toDo);

    if (selectedToDoIndex > -1) {
      updatedToDoList.splice(selectedToDoIndex, 1);
    }

    setToDoList(updatedToDoList);
  }

  function handleChangeDescription(event) {
    setToDoDescription(event.target.value);
  }
  
  function handleChangeTask(event) {
    setToDoTask(event.target.value);
  }

  return (
    <>
      <main>
        <div className='to-do-add'>
          <div className='to-do-task'>
            <label htmlFor='to-do-task'>Task: </label>
            <input
              required
              type='text'
              name='to-do-task'
              placeholder='Please add a task'
              onChange={handleChangeTask}
              value={toDoTask}
            />
            {showTaskWarning && <span className='task-warning'>Task is required</span>}
            {isDuplicate && <span className='task-warning'>Task already exists</span>}
          </div>
          <div className='to-do-description'>
            <label htmlFor='to-do-description'>Description: </label>
            <input
              required
              type='textarea'
              name='to-do-description'
              placeholder='Please add a description (optional)'
              onChange={handleChangeDescription}
              value={toDoDescription}
            />
          </div>
          <button onClick={handleAddToDo}>Add to do</button>
        </div>
        <div className='to-do-list'>
          <h1>List</h1>
          {toDoList.length < 1 && <p>The list is empty. Please add a task.</p>}
          <ul>
            {toDoList.map((toDo, toDoIndex) => (
              <ToDo toDo={toDo} key={toDoIndex} onRemoveToDo={handleRemoveToDo} />
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}

export default App;

import 'reset-css';
import { useState } from 'react';
import './App.css';

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [toDoTitle, setToDoTitle] = useState('');
  const [toDoDescription, setToDoDescription] = useState('');

  function handleAddToDo() {
    const newToDo = {
      title: toDoTitle,
      description: toDoDescription
    };

    const updatedToDoList = [...toDoList, newToDo];

    setToDoList(updatedToDoList);
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
  
  function handleChangeTitle(event) {
    setToDoTitle(event.target.value);
  }

  return (
    <>
      <main>
        <div className='add'>
          <label htmlFor='to-do-title'>Title: </label>
          <input
            required
            type='text'
            name='to-do-title'
            placeholder='Please add a title'
            onChange={handleChangeTitle}
            value={toDoTitle}
          />
          <label htmlFor='to-do-description'>Description: </label>
          <input
            required
            type='textarea'
            name='to-do-description'
            placeholder='Please add a description'
            onChange={handleChangeDescription}
            value={toDoDescription}
          />
          <button onClick={handleAddToDo}>Add to do</button>
        </div>
        <div className='to-do-list'>
          <ul>
            {toDoList.map((toDo, toDoIndex) => (
              <li key={toDoIndex}>
                {toDo.title} - {toDo.description}
                <button onClick={() => handleRemoveToDo(toDo)}>Remove</button>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}

export default App;

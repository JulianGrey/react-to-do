import { useState } from 'react';

import './App.scss';

import ToDo from './components/ToDo.jsx';

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [toDoTitle, setToDoTitle] = useState('');
  const [toDoDescription, setToDoDescription] = useState('');
  const [showTitleWarning, setShowTitleWarning] = useState(false);

  function handleAddToDo() {
    const newToDo = {
      title: toDoTitle,
      description: toDoDescription
    };

    if (toDoTitle) {
      const updatedToDoList = [...toDoList, newToDo];
  
      setToDoList(updatedToDoList);
      setShowTitleWarning(false);
    } else {
      setShowTitleWarning(true);
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
  
  function handleChangeTitle(event) {
    setToDoTitle(event.target.value);
  }

  return (
    <>
      <main>
        <div className='to-do-add'>
          <div className='to-do-title'>
            <label htmlFor='to-do-title'>Title: </label>
            <input
              required
              type='text'
              name='to-do-title'
              placeholder='Please add a title'
              onChange={handleChangeTitle}
              value={toDoTitle}
            />
            <span className={'title-warning' + (showTitleWarning ? '' : ' hide')}>Title is required</span>
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

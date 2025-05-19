import { useState } from 'react';

import './ToDo.scss';

export default function ToDo({toDo, onRemoveToDo}) {
  const { task, description } = toDo;

  const [isOpen, setIsOpen] = useState(false);

  function handleIsOpen() {
    setIsOpen(() => !isOpen);
  }

  return (
    <li className='to-do-entry'>
      <div className='entry-task-container'>
        <div onClick={handleIsOpen} className={`entry-task${isOpen ? ' open' : ''}${description ? ' has-description' : ''}`}>
          {task}
        </div>
        <button onClick={() => onRemoveToDo(toDo)}>Remove</button>
      </div>
      {description && <div className={`entry-description${isOpen ? ' open' : ''}`}>{description}</div>}
    </li>
  );
}

import { useState } from 'react';

import './ToDo.scss';

export default function ToDo({toDo, onRemoveToDo}) {
  const { title, description } = toDo;

  const [isOpen, setIsOpen] = useState(false);

  function handleIsOpen() {
    setIsOpen(() => !isOpen);
  }

  return (
    <li className='to-do-entry'>
      <div className='entry-title-container'>
        <div onClick={handleIsOpen} className={`entry-title${isOpen ? ' open' : ''}`}>
          {title}
        </div>
        <button onClick={() => onRemoveToDo(toDo)}>Remove</button>
      </div>
      {description && <div className={`entry-description${isOpen ? ' open' : ''}`}>{description}</div>}
    </li>
  );
}

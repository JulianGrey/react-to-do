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
      <div onClick={handleIsOpen} className={`entry-title${isOpen ? ' active' : ''}`}>
        {title}
        <button onClick={() => onRemoveToDo(toDo)}>Remove</button>
      </div>
      {description && <span className='entry-description'>{description}</span>}
    </li>
  );
}

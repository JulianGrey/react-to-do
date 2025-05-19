import './ToDo.scss';

export default function ToDo({toDo, onRemoveToDo}) {
  const { title, description } = toDo;

  return (
    <li className='to-do-entry'>
      {description ? `${title} - ${description}` : `${title}`}
      <button onClick={() => onRemoveToDo(toDo)}>Remove</button>
    </li>
  );
}

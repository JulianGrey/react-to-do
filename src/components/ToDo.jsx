export default function ToDo({toDo, onRemoveToDo}) {
  const { title, description } = toDo;

  return (
    <li>
      {description ? `${title} - ${description}` : `${title}`}
      <button onClick={() => onRemoveToDo(toDo)}>Remove</button>
    </li>
  );
}

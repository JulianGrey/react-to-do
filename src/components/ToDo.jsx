export default function ToDo({toDo, onRemoveToDo}) {
  const { title, description } = toDo;

  return (
    <li>
      {title} - {description}
      <button onClick={() => onRemoveToDo(toDo)}>Remove</button>
    </li>
  );
}

import { Todo, TodoType } from './Todo'

// Define this
interface StateProps {
  incompleteTodos: TodoType[]
  toggleTodoCompletion: (target: TodoType) => void
  removeTodo:(target: TodoType) => void
}

export const TodoList : React.FC<StateProps> = (props) => {

  const { incompleteTodos, toggleTodoCompletion, removeTodo } = props;

  return (
    <section className="todo-list-section">
      <h2 className="title">TODO</h2>
      <ul className="todo-list">
        {incompleteTodos.map((todo: TodoType, index: number) => (
          <Todo
            key={index}
            todo={todo}
            toggleTodoCompletion={toggleTodoCompletion}
            removeTodo={removeTodo}
          />
        ))}
      </ul>
    </section>
  )
}

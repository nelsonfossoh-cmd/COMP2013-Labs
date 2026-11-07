//This component will have a Todo list as aprop
//Then we will map into several TodoCards

import type { TodosContainerProps } from "./TodoApp";
import TodoCard from "./TodoCard";

export default function TodosContainer({
  todosList,
  handleTodoCheck,
  handleDeleteTodo,
  handleEditTodo,
}: TodosContainerProps) {
  return (
    <div>
      {todosList.length > 0 || "Todo list is Empty"}
      {todosList.map((todo) => (
        <TodoCard
          key={todo.id}
          handleTodoCheck={handleTodoCheck}
          handleDeleteTodo={handleDeleteTodo}
          handleEditTodo={handleEditTodo}
          {...todo}
        />
      ))}
    </div>
  );
}

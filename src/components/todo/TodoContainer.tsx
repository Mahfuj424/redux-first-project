import { useAppSelector } from "@/redux/hooks";
import AddTodoModal from "./AddTodoModal";
import TodoCart from "./TodoCart";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
  const { todos } = useAppSelector((state) => state.todos);
  console.log('this is todos',todos);
  return (
    <div>
      <div className="flex justify-between mb-5">
        <AddTodoModal />
        <TodoFilter />
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-5 space-y-3">
        {todos.length > 0 ? (
          todos.map((item) => (
            <TodoCart key={item?.id} {...item} />
          ))
        ) : (
          <div className="bg-white p-3 rounded-md text-2xl flex justify-center items-center">
            <p>There is no cart</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoContainer;

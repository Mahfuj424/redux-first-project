import { useAppSelector } from "@/redux/hooks";
import AddTodoModal from "./AddTodoModal";
import TodoCart from "./TodoCart";
import TodoFilter from "./TodoFilter";
import { useGetTodosQuery } from "@/redux/api/api";
import { useState } from "react";

const TodoContainer = () => {
  const [priority, setPriority] = useState('')
  console.log(priority);

  const { data: todos, isLoading, isError } = useGetTodosQuery(priority);

  return (
    <div>
      <div className="flex justify-between mb-5">
        <AddTodoModal />
        <TodoFilter priority={priority} setPriority={setPriority}/>
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-5 space-y-3">
        {todos?.data?.length > 0 ? (
          todos?.data?.map((item) => (
            <TodoCart key={item?._id} {...item} />
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

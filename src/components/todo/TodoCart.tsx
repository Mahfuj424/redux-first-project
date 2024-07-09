import { Button } from "../ui/button";
import { useDeleteTodoMutation, useUpdateTodoMutation } from "@/redux/api/api";
import UpdateTaskModal from "./UpdateTaskModal";

type TTodoProps = {
  _id: string;
  title: string;
  description: string;
  isCompleted: boolean;
  priority: string;
};

const TodoCart = ({
  title,
  description,
  priority,
  _id,
  isCompleted,
}: TTodoProps) => {
  const [updateTodo, { isLoading }] = useUpdateTodoMutation();
  const [deleteTodo, { isLoadin }] = useDeleteTodoMutation();

  const toggleState = () => {
    const options = {
      id: _id,
      data: {
        title,
        description,
        priority,
        isCompleted: !isCompleted,
      },
    };
    updateTodo(options);
  };

  const deleteTask = async (id) => {
    await deleteTodo({id});
  };

  return (
    <div className="bg-white p-3 rounded-md flex justify-between items-center">
      <input
        className="mr-2"
        onChange={() => toggleState()}
        type="checkbox"
        name="complete"
        id="complete"
        defaultChecked={isCompleted}
      />
      <p className="font-semibold flex-1">{title}</p>
      <div className="flex-1 flex items-center gap-1.5">
        <p
          className={`size-3 rounded-full
          ${priority === "high" ? "bg-red-500" : null}
          ${priority === "mediam" ? "bg-yellow-500" : null}
          ${priority === "low" ? "bg-green-500" : null}
        `}
        ></p>
        <p>{priority}</p>
      </div>
      <div className="flex-1">
        {!isCompleted ? (
          <p className="text-red-500">pending</p>
        ) : (
          <p className="text-green-500">Done</p>
        )}
      </div>
      <p className="flex-[2]">{description}</p>
      <div className="space-x-5">
        <Button
          onClick={() => deleteTask(_id)}
          className="bg-red-500 hover:bg-red-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </Button>
        <UpdateTaskModal id={_id}/>
      </div>
    </div>
  );
};

export default TodoCart;

import { useAppSelector } from "@/redux/hooks";
import AddTodoModal from "./AddTodoModal";
import TodoCard, { ITodoProp } from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useGetTodosQuery } from "@/redux/api/api";
import { useState } from "react";

const TodoContainer = () => {
  const [priority, setPriority] = useState("");
  // from local state
  // const { todos } = useAppSelector((state) => state.todos);

  // from server
  const { data: todos, isLoading } = useGetTodosQuery(priority);

  if (isLoading) {
    return (
      <>
        <p>Loading...</p>
      </>
    );
  }

  return (
    <>
      <div className="">
        <div className="flex justify-between">
          {/* <Button className="bg-primary-gradient text-xl font-semibold mb-5">
            Add Todo
          </Button> */}
          <AddTodoModal />
          {/* <Button className="bg-[#2bec4b] text-black hover:text-white">
            Filter
          </Button> */}
          <TodoFilter priority={priority} setPriority={setPriority} />
        </div>
        <div className="bg-primary-gradient w-full h-full rounded-xl  p-[5px]">
          {/* <div className="p-5 text-2xl font-bold flex justify-center items-center rounded-md">
            <p>There is no task pending</p>
          </div> */}
          <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
            {todos?.data?.map((todo: ITodoProp) => (
              <TodoCard key={todo._id} todo={todo} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoContainer;

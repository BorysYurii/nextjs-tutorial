import Link from "next/link";
import DeleteForm from "./DeleteForm";
import { getAllTasks } from "../app/utils/actions";

const TaskList = async () => {
  const tasks = await getAllTasks();

  if (!tasks.length)
    return <h1 className="font-medium text-lg mt-8">Not tasks to show...</h1>;

  return (
    <div>
      <ul className="mt-8">
        {tasks.map((task) => {
          return (
            <li
              key={task.id}
              className="flex justify-between items-center px-6 py-4 mb-4 border border-base-300 rounded-lg shadow-lg"
            >
              <h2
                className={`text-lg capitalize ${
                  task.completed && "line-through"
                }`}
              >
                {task.content}
              </h2>
              <div className="flex gap-6 items-center">
                <Link
                  href={`/tasks/${task.id}`}
                  className="btn btn-accent btn-xs uppercase"
                >
                  edit
                </Link>
                <DeleteForm id={task.id} />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TaskList;

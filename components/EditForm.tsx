import React from "react";
import { editTask } from "@/utils/actions";

interface ITask {
  task: { id: string; content: string; completed: boolean };
}

const EditForm = async ({ task }: ITask) => {
  const { id, content, completed } = task;

  return (
    <form
      action={editTask}
      className="max-w-sm p-12 border border-base-300 rounded-lg flex flex-col"
    >
      <input name="id" type="hidden" value={id} />
      <input
        name="content"
        className="input input-bordered w-full"
        type="text"
        defaultValue={content}
        required
      />
      <div className="form-control my-4">
        <label htmlFor="completed" className="label cursor-pointer">
          <span className="label-text">completed</span>
          <input
            type="checkbox"
            defaultChecked={completed}
            id="completed"
            name="completed"
            className="checkbox checkbox-primary checkbox-sm"
          />
        </label>
      </div>

      <button type="submit" className="btn btn-primary btn-sm uppercase">
        update
      </button>
    </form>
  );
};

export default EditForm;

"use client";
import { useFormStatus, useFormState } from "react-dom";
import { createTask } from "../utils/actions";
import { useEffect } from "react";
import toast from "react-hot-toast";

const SubmitBtn = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="btn btn-primary join-item uppercase"
      disabled={pending}
    >
      {pending ? "please wait..." : "create task"}
    </button>
  );
};

const initialState = {
  message: "",
};

const TaskForm = () => {
  const [state, formAction] = useFormState(createTask, initialState);

  useEffect(() => {
    if (state.message === "error") {
      toast.error("Error creating task");
      return;
    }
    if (state.message === "success") {
      toast.success("Task created");
    }
  }, [state]);

  return (
    <form action={formAction}>
      <div className="join w-full">
        <input
          type="text"
          className="input input-bordered join-item w-full"
          placeholder="type here"
          name="content"
          required
        />
        <SubmitBtn />
      </div>
    </form>
  );
};

export default TaskForm;

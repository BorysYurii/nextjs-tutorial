"use client";
import { useFormState, useFormStatus } from "react-dom";
import { deleteTask } from "../app/utils/actions";
import { useEffect } from "react";
import toast from "react-hot-toast";

interface IDeleteForm {
  id: string;
}

const DeleteBtn = () => {
  const { pending } = useFormStatus();

  return (
    <button className="btn btn-xs btn-error uppercase" disabled={pending}>
      {pending ? "deleting..." : "delete"}
    </button>
  );
};

const initialState = {
  message: "",
};

const DeleteForm = ({ id }: IDeleteForm) => {
  const [state, formAction] = useFormState(deleteTask, initialState);

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
      <input type="hidden" name="id" value={id} />
      <DeleteBtn />
    </form>
  );
};

export default DeleteForm;

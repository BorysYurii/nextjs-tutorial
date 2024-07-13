"use server";

import { revalidatePath } from "next/cache";
import db from "./db";
import { redirect } from "next/navigation";
import { z } from "zod";

const getAllTasks = async () =>
  await db.task.findMany({ orderBy: { createdAt: "desc" } });

const createTask = async (prevState: any, formData: FormData) => {
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  const content = formData.get("content");

  if (typeof content !== "string")
    return { message: "error", error: "Content error." };

  const Task = z.object({
    content: z.string().min(5),
  });

  try {
    Task.parse({ content });

    await db.task.create({ data: { content } });
    revalidatePath("/tasks");
    return { message: "success" };
  } catch (e) {
    console.log(e);
    return { message: "error" };
  }
};

const editTask = async (formData: FormData) => {
  const id = formData.get("id");
  const content = formData.get("content");
  const completed = formData.get("completed");

  if (typeof id !== "string") return new Error("Incorrect id");
  if (typeof content !== "string") return new Error("Incorrect content");

  await db.task.update({
    where: { id },
    data: { content, completed: completed === "on" ? true : false },
  });
  revalidatePath("/tasks");
  redirect("/tasks");
};

const deleteTask = async (prevState: any, formData: FormData) => {
  const id = formData.get("id");

  if (typeof id !== "string") throw new Error("Incorrect id");

  try {
    await db.task.delete({ where: { id } });
    revalidatePath("/tasks");
    return { message: "success" };
  } catch (e) {
    console.log(e);
    return { message: "error" };
  }
};

const getTask = async (id: string) => {
  return await db.task.findUnique({ where: { id } });
};

export { getAllTasks, createTask, editTask, deleteTask, getTask };

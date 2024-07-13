import React from "react";
import { getTask } from "../../utils/actions";
import { notFound } from "next/navigation";
import Link from "next/link";
import EditForm from "@/components/EditForm";

const SingleTaskPage = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const task = await getTask(id);

  if (!task) return notFound();

  return (
    <>
      <Link href="/tasks" className="btn btn-accent mb-16">
        back to tasks
      </Link>
      <EditForm task={task} />
    </>
  );
};

export default SingleTaskPage;

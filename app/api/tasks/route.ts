import db from "../../../utils/db";

export const GET = async () => {
  const tasks = await db.task.findMany();

  return Response.json(tasks);
};

export const POST = async (request: Request) => {
  const data = await request.json();
  const { content } = data;

  try {
    const task = await db.task.create({ data: { content } });
    return Response.json({ data: { message: "success" }, task });
  } catch (e) {
    return Response.json({ message: "error" });
  }
};

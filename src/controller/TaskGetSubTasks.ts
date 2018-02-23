import { Request, Response } from "express";
import { Task } from "../entity/Task";

/**
 * Loads all tasks from the database.
 */
export async function taskGetSubTasksAction(request: Request, response: Response) {
  const { id } = request.params
  const tasks = await Task.findOneById(id)

  response.send(tasks.subTasks);
}

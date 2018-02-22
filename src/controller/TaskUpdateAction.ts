import { Request, Response } from "express";
import { Task } from "../entity/Task";

/**
 * Update one task
 */
export async function taskUpdateAction(request: Request, response: Response) {
  const { id } = request.params
  const { isCompleted, body } = request.body
  const task = await Task.findOneById(id)
  task.isCompleted = isCompleted || task.isCompleted
  task.body = body
  await task.save()
  response.send(task);
}

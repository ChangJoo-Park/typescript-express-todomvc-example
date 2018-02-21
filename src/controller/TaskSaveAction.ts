import { Request, Response } from "express";
import { Task } from "../entity/Task";

/**
 * Create one task
 */
export async function taskSaveAction(request: Request, response: Response) {
  const { body } = request.body
  const task = new Task()
  task.body = body
  await task.save()
  response.send(task);
}

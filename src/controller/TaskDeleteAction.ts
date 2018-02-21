import { Request, Response } from "express";
import { Task } from "../entity/Task";

/**
 * Delete one task
 */
export async function taskDeleteAction(request: Request, response: Response) {
  const { id } = request.params
  const task = await Task.findOneById(id)
  const result = await task.remove()
  response.send(result);
}

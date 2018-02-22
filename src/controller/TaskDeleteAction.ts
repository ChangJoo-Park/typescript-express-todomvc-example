import { Request, Response } from "express";
import { Task } from "../entity/Task";

/**
 * Delete one task
 */
export async function taskDeleteAction(request: Request, response: Response) {
  const { id } = request.params
  console.log('id => ', id)
  const task = await Task.findOneById(id)
  console.log('task => ', task)
  const result = await task.remove()
  response.send(result);
}

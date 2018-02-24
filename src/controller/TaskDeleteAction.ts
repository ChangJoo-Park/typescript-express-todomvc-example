import { Request, Response } from "express";
import { Task } from "../entity/Task";

/**
 * Delete one task
 */
export async function taskDeleteAction(request: Request, response: Response) {
  const { id } = request.params
  try {
    const task = await Task.findOneById(id)
    await task.remove()
  } catch (error) {
    console.error(error)
  }
  response.send({ id });
}

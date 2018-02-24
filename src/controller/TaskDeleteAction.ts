import { Request, Response } from "express";
import { Task } from "../entity/Task";

/**
 * Delete one task
 */
export async function taskDeleteAction(request: Request, response: Response) {
  console.log('taskDeleteAction : ', request.params)
  const { id } = request.params
  const task = await Task.findOneById(id)

  try {
    await task.remove()
    console.log('remove succeed')
  } catch (error) {
    console.error(error)
  }
  response.send({ id });
}

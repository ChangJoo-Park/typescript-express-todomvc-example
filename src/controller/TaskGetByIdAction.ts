import { Request, Response } from "express";
import { Task } from "../entity/Task";

/**
 * Fetch one task
 */
export async function taskGetByIdAction(request: Request, response: Response) {
  const { id } = request.params
  const task = await Task.findOneById(id)
  response.send(task);
}

import { Request, Response } from "express";
import { Task } from "../entity/Task";

/**
 * Loads all tasks from the database.
 */
export async function taskGetIncompleted(request: Request, response: Response) {
  const tasks = await Task.findByIncompleted()
  response.send(tasks);
}

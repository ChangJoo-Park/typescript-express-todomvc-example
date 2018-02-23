import { taskGetAllAction } from './controller/TaskGetAllAction'
import { taskSaveAction } from './controller/TaskSaveAction'
import { taskGetByIdAction } from './controller/TaskGetByIdAction'
import { taskUpdateAction } from './controller/TaskUpdateAction'
import { taskDeleteAction } from './controller/TaskDeleteAction'
import { taskGetCompleted } from './controller/TaskGetCompleted'
import { taskGetIncompleted } from './controller/TaskGetIncompleted'
import { taskGetSubTasksAction } from './controller/TaskGetSubTasks'

/**
 * All application routes.
 */
export const AppRoutes = [
  {
    path: '/tasks',
    method: 'get',
    action: taskGetAllAction
  },
  {
    path: '/tasks/completed',
    method: 'get',
    action: taskGetCompleted
  },
  {
    path: '/tasks/incomplete',
    method: 'get',
    action: taskGetIncompleted
  },
  {
    path: '/tasks',
    method: 'post',
    action: taskSaveAction
  },
  {
    path: '/task/:id',
    method: 'get',
    action: taskGetByIdAction
  },
  {
    path: '/task/:id',
    method: 'patch',
    action: taskUpdateAction
  },
  {
    path: '/task/:id',
    method: 'delete',
    action: taskDeleteAction
  },
  // Subtasks
  {
    path: '/task/:id/subtasks',
    method: 'get',
    action: taskGetSubTasksAction
  }
]

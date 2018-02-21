import { taskGetAllAction } from './controller/TaskGetAllAction'
import { taskSaveAction } from './controller/TaskSaveAction'
import { taskGetByIdAction } from './controller/TaskGetByIdAction'
import { taskUpdateAction } from './controller/TaskUpdateAction'
import { taskDeleteAction } from './controller/TaskDeleteAction'

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
    path: '/tasks',
    method: 'post',
    action: taskSaveAction
  },
  {
    path: '/tasks/:id',
    method: 'get',
    action: taskGetByIdAction
  },
  {
    path: '/tasks/:id',
    method: 'patch',
    action: taskUpdateAction
  },
  {
    path: '/tasks/:id',
    method: 'delete',
    action: taskDeleteAction
  }
]

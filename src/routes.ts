import { taskGetAllAction } from './controller/TaskGetAllAction'
import { taskSaveAction } from './controller/TaskSaveAction'

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
  }
  // {
  //   path: '/tasks/:id',
  //   method: 'get',
  //   action: ''
  // },
  // {
  //   path: '/tasks/:id',
  //   method: 'patch',
  //   action: ''
  // },
  // {
  //   path: '/tasks/:id',
  //   method: 'delete',
  //   action: ''
  // },
]

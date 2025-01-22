export interface Todo {
  id: string;
  title: string;
  status: 'Todo' | 'In Progress' | 'Backlog' | 'Done' | 'Canceled';
}

export const todos: Todo[] = [
  {
    id: 'TASK-8782',
    title: "Optimize the interactive experience of the page.",
    status: 'In Progress'
  },
  {
    id: 'TASK-7878',
    title: "Integrate database to achieve real data interaction.",
    status: 'Todo'
  },
  {
    id: 'TASK-6565',
    title: "Implement search function.",
    status: 'Todo'
  },
  {
    id: 'TASK-6566', 
    title: "Add search result highlighting.",
    status: 'Backlog'
  },
  {
    id: 'TASK-6567',
    title: "Optimize search performance and user experience.",
    status: 'Backlog'
  }
]; 
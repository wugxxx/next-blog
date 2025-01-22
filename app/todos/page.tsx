import { todos } from "@/lib/todos";
import { cn } from "@/lib/utils";

export default function TodosPage() {
  return (
    <div className="container py-10">
      <div className="rounded-lg">
        <div className="relative w-full">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-800">
                <th className="text-left pb-3 text-lg w-[75%]">Title</th>
                <th className="text-left pb-3 px-4 text-lg w-[25%]">Status</th>
              </tr>
            </thead>
            <tbody>
              {todos.map((todo) => (
                <tr 
                  key={todo.id}
                  className="border-b border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                >
                  <td className="py-3">
                    {todo.title}
                  </td>
                  <td className="py-3 px-4 whitespace-nowrap">
                    <span className={cn(
                      "inline-flex items-center rounded-full px-2 py-1 text-xs",
                      todo.status === 'Todo' && "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400",
                      todo.status === 'In Progress' && "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
                      todo.status === 'Done' && "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
                      todo.status === 'Canceled' && "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400",
                      todo.status === 'Backlog' && "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
                    )}>
                      {todo.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 
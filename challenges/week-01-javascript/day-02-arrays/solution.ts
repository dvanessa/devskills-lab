/** Day 02: implement a summarizeTasks. */

interface Task {
  id: number;
  title: string;
  completed: boolean;
  priority: "high" | "medium" | "low";
};

interface TaskSummary {
  total: number;
  completed: number;
  pending: number;
  highPriorityPending: number;
};

export function summarizeTasks(tasks: Task[]): TaskSummary {
  return tasks.reduce(
    (summary, task) => {
      summary.total += 1;   
      if (task.completed) 
        summary.completed++;
      else {
        summary.pending++;
        if(task.priority === "high") 
            summary.highPriorityPending++;
    }
      return summary;
    },
    { total: 0, completed: 0, pending: 0, highPriorityPending: 0 }
  );
}


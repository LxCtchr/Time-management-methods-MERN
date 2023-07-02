import React from "react";

import "./Tasks.scss";

import AddTasksForm from "./AddTasksForm";
import TaskForm from "./TaskForm";

function Tasks({
  list,
  onAddTask,
  notEmpty,
  onRemoveTask,
  onEditTask,
  onTaskComplete,
}) {
  return (
    <div className="tasks">
      <div className="tasks__items">
        {/* {!notEmpty && list.tasks && !list.tasks.length && (
          <h2>Задачи отсутствуют</h2>
        )} */}
        {list.tasks &&
          list.tasks.map((task) => (
            <TaskForm
              onComplete={onTaskComplete}
              onEdit={onEditTask}
              onRemove={onRemoveTask}
              list={list}
              key={task.id}
              {...task}
            />
          ))}
        <AddTasksForm key={list.id} list={list} onAddTask={onAddTask} />
      </div>
    </div>
  );
}

export default Tasks;

import React, { useState, useEffect } from "react";
import { Tasks } from "../../../components/exports.js";
import { useNavigate } from "react-router-dom";

import "./Pomodoro.scss";

import axios from "axios";

const Pomodoro = () => {
  const [lists, setLists] = useState(null);
  const [tests, setTests] = useState(null);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  if (!token) {
    navigate("/survey");
  }

  useEffect(() => {
    axios.get("http://localhost:3001/lists?_embed=tasks").then(({ data }) => {
      setLists(data);
    });
    axios.get("/methods/pomodoro/tasks").then((response) => {
      setTests(response.data);
    });
  }, []);

  const onAddTask = (listId, taskObj) => {
    if (taskObj.text !== "") {
      const newTask = lists.map((item) => {
        if (item.id === listId) {
          item.tasks = [...item.tasks, taskObj];
        }
        return item;
      });
      setLists(newTask);
    } else return;
  };

  const onRemoveTask = (listId, taskId) => {
    const newList = lists.map((item) => {
      if (item.id === listId) {
        item.tasks = item.tasks.filter((task) => task.id !== taskId);
      }
      return item;
    });
    setLists(newList);
    if (window.confirm("Вы действительн хотите удалить задачу?")) {
      axios.delete("http://localhost:3001/tasks/" + taskId).catch(() => {
        alert("Не удалось удалить задачу");
      });
    }
  };

  const onEditTask = (listId, taskObj) => {
    const newTaskText = window.prompt("Текст задачи", taskObj.text);

    if (!newTaskText) {
      return;
    }

    const newList = lists.map((list) => {
      if (list.id === listId) {
        list.tasks = list.tasks.map((task) => {
          if (task.id === taskObj.id) {
            task.text = newTaskText;
          }
          return task;
        });
      }
      return list;
    });
    setLists(newList);
    axios
      .patch("http://localhost:3001/tasks/" + taskObj.id, {
        text: newTaskText,
      })
      .catch(() => {
        alert("Не удалось обновить задачу");
      });
  };

  const onTaskComplete = (listId, taskId, completed) => {
    const newList = lists.map((list) => {
      if (list.id === listId) {
        list.tasks = list.tasks.map((task) => {
          if (task.id === taskId) {
            task.completed = completed;
          }
          return task;
        });
      }
      return list;
    });
    setLists(newList);
    axios
      .patch("http://localhost:3001/tasks/" + taskId, {
        completed,
      })
      .catch(() => {
        alert("Не удалось обновить задачу");
      });
  };

  if (tests) {
    for (let _ in tests) {
      console.log(lists);
      return (
        <div className="todo">
          <div className="todo__tasks">
            <Tasks
              list={tests}
              onAddTask={onAddTask}
              onRemoveTask={onRemoveTask}
              onEditTask={onEditTask}
              onTaskComplete={onTaskComplete}
              notEmpty
            />
          </div>
        </div>
      );
    }
  }
};

export default Pomodoro;

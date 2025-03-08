"use client";

import { useState } from "react";
import { FaCheckCircle, FaRegCircle } from "react-icons/fa";

const ToDoCard = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Human Interaction Designs",
      completed: true,
      date: "Tuesday, 30 June 2024",
    },
    {
      id: 2,
      text: "Design system Basics",
      completed: true,
      date: "Monday, 24 June 2024",
    },
    {
      id: 3,
      text: "Introduction to UI",
      completed: false,
      date: "Friday, 10 June 2024",
    },
    {
      id: 4,
      text: "Basics of Figma",
      completed: false,
      date: "Friday, 05 June 2024",
    },
  ]);

  const [newTask, setNewTask] = useState("");

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const addTask = () => {
    if (newTask.trim() === "") return;

    const newTaskObj = {
      id: tasks.length + 1,
      text: newTask,
      completed: false,
      date: new Date().toLocaleDateString({
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    };

    setTasks([newTaskObj, ...tasks]);
    setNewTask("");
  };

  return (
    <div className="border border-[#E4E4E4] w-[288px] rounded-lg py-[11px] px-7">
      <h2 className="text-gray-800 font-semibold text-[15px] mb-[10px]">
        To-Do List
      </h2>

      <div className="mb-4 flex">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
          className="border border-gray-300 rounded-l-lg px-2 py-1 w-full"
        />
        <button
          onClick={addTask}
          className="bg-[#FF4B00] text-white px-4 rounded-r-lg"
        >
          Add
        </button>
      </div>

      <ul className="space-y-3 h-[170px] overflow-y-auto">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="items-center justify-between rounded-lg transition"
          >
            <div
              className="flex items-center cursor-pointer"
              onClick={() => toggleTask(task.id)}
            >
              {task.completed ? (
                <FaCheckCircle className="text-[#FF4B00] mr-3" />
              ) : (
                <FaRegCircle className="text-gray-400 mr-3" />
              )}
              <span
                className={`text-sm text-black ${
                  task.completed ? "line-through" : ""
                }`}
              >
                {task.text}
              </span>
            </div>
            <span className="text-gray-500 text-[12px] ml-7">{task.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoCard;

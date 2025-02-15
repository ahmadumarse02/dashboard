"use client";
import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

function App() {
  const [event, setEvents] = useState([]);
  const [addTaskModel, setAddTaskModel] = useState(false);
  const [task, setTask] = useState({ title: "", description: "", start: "" });

  const handleAddTask = () => {
    setAddTaskModel(true);
  };

  const handleSaveTask = () => {
    if (task.title && task.description && task.start) {
      setEvents([...event, task]);
      setAddTaskModel(false);
      setTask({ title: "", description: "", start: "" });
    } else {
      alert("Please fill in both the title and start time.");
    }
  };

  return (
    <>
      <div className="flex justify-between items-center border-b px-4 py-2 bg-white">
        <h2 className="text-lg font-semibold text-orange-600">Calendar</h2>
        <div className="flex items-center space-x-3">
          <button className="bg-orange-500 text-white px-4 py-2 rounded-lg">
            Filter
          </button>
          <button
            className="bg-orange-500 text-white px-4 py-2 rounded-lg"
            onClick={handleAddTask}
          >
            + Add Tasks
          </button>
        </div>
      </div>
      {/* Model adn the tasks */}
      <div className="p-4">
        {addTaskModel && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
              <h2 className="text-lg font bold text-center mb-4">
                Add New Tasks
              </h2>
              <div className="">
                <input
                  type="text"
                  placeholder="Task Title"
                  className="border p-2 w-full mb-2 rounded"
                  value={task.title || ""}
                  onChange={(e) => setTask({ ...task, title: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Task Description"
                  className="border p-2 w-full mb-2 rounded"
                  value={task.description || ""}
                  onChange={(e) =>
                    setTask({ ...task, description: e.target.value })
                  }
                />
                <input
                  type="datetime-local"
                  placeholder="Start Time"
                  className="border p-2 w-full mb-2 rounded"
                  value={task.start || ""}
                  onChange={(e) => setTask({ ...task, start: e.target.value })}
                />
              </div>
              <button
                onClick={handleSaveTask}
                className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
              >
                Save Task
              </button>
              <button
                onClick={() => setAddTaskModel(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
      {/* FullCalendar */}
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          start: "today prev,next",
          center: "title",
          end: "dayGridMonth ,timeGridWeek ,timeGridDay",
        }}
        events={event}
      />
    </>
  );
}

export default App;

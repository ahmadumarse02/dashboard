"use client";
import { useState, useEffect, useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

function Schedule() {
  const calendarRef = useRef(null);
  const [events, setEvents] = useState([]);
  const [addTaskModel, setAddTaskModel] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState({
    title: "",
    description: "",
    start: "",
    end: "",
  });
  const [showEventModal, setShowEventModal] = useState(false);
  const [currentMonth, setCurrentMonth] = useState("");

  const [task, setTask] = useState({
    title: "",
    description: "",
    start: "",
    end: "",
  });

  const handlePrev = () => {
    calendarRef.current.calendar.prev();
    setCurrentMonth(calendarRef.current.calendar.view.title);
  };

  const handleNext = () => {
    calendarRef.current.calendar.next();
    setCurrentMonth(calendarRef.current.calendar.view.title);
  };

  const handleToday = () => {
    calendarRef.current.calendar.today();
    setCurrentMonth(calendarRef.current.calendar.view.title);
  };

  useEffect(() => {
    setCurrentMonth(calendarRef.current.calendar.view.title);
  }, []);

  const handleAddTask = () => {
    setAddTaskModel(true);
  };

  const handleSaveTask = () => {
    if (task.title && task.description && task.start && task.end) {
      const newEvent = {
        ...task,
        start: new Date(task.start).toISOString(),
        end: new Date(task.end).toISOString(),
        allDay: true,
      };

      setEvents([...events, newEvent]);
      setAddTaskModel(false);
      setTask({ title: "", description: "", start: "", end: "" });
    } else {
      alert("Please fill in all fields.");
    }
  };

  const handleEventClick = (clickInfo) => {
    const selected = {
      title: clickInfo.event.title,
      description: clickInfo.event.extendedProps.description,
      start: clickInfo.event.start.toISOString(),
      end: clickInfo.event.end?.toISOString() || "",
    };
    setSelectedEvent(selected);
    setShowEventModal(true);
  };

  const handleEditEvent = () => {
    if (
      selectedEvent.title &&
      selectedEvent.description &&
      selectedEvent.start &&
      selectedEvent.end
    ) {
      const updatedEvents = events.map((evt) =>
        evt.start === selectedEvent.start ? selectedEvent : evt
      );
      setEvents(updatedEvents);
      setShowEventModal(false);
    } else {
      alert("Please fill in all fields.");
    }
  };

  const handleDeleteEvent = () => {
    const filteredEvents = events.filter(
      (evt) => evt.start !== selectedEvent.start
    );
    setEvents(filteredEvents);
    setShowEventModal(false);
  };

  return (
    <>
      <div className="flex justify-between items-center border-b px-4 py-2 bg-white">
        <div className="flex items-center gap-5 text-orange-600 cursor-pointer">
          <h2 className="text-lg font-semibold text-orange-600 mr-7">
            Calendar
          </h2>
          <div className="tab flex text-orange-500 gap-4">
            <button
              className="tablinks"
              onClick={() =>
                calendarRef.current.calendar.changeView("dayGridMonth")
              }
            >
              Monthly
            </button>
            <button
              className="tablinks"
              onClick={() =>
                calendarRef.current.calendar.changeView("timeGridWeek")
              }
            >
              Weekly
            </button>
            <button
              className="tablinks"
              onClick={() =>
                calendarRef.current.calendar.changeView("timeGridDay")
              }
            >
              Daily
            </button>
          </div>
        </div>
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

      <div className="flex my-6 mx-4 text-lg font-medium text-orange-500">
        <h1 className="flex items-center gap-2">
          {currentMonth}
          <Image src={assets.caretDown1} alt="" />
        </h1>
        <div className="flex gap-3 ml-9 text-orange-500 items-center">
          <div
            onClick={handlePrev}
            className="bg-[#FF4B00] bg-opacity-10 p-2 rounded-md"
          >
            <FaAngleLeft className="text-sm" />
          </div>

          <button
            onClick={handleToday}
            className="bg-[#FF4B00] text-white px-4 py-1 rounded-md text-[10px]"
          >
            Today
          </button>
          <div
            onClick={handleNext}
            className="bg-[#FF4B00] bg-opacity-10 p-2 rounded-md"
          >
            <FaAngleRight className="text-sm" />
          </div>
        </div>
      </div>

      <div className="">
        {addTaskModel && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50">
            <div className="bg-white shadow-lg w-96 transform transition-transform duration-1000">
              <h2 className="text-lg font-bold text-center mb-2">
                Add New Event
              </h2>
              <hr className="mb-4 w-full" />
              <div className="p-6">
                <input
                  type="text"
                  placeholder="Task Title"
                  className="border p-2 w-full mb-2 rounded"
                  value={task.title}
                  onChange={(e) => setTask({ ...task, title: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Task Description"
                  className="border p-2 w-full mb-2 rounded"
                  value={task.description}
                  onChange={(e) =>
                    setTask({ ...task, description: e.target.value })
                  }
                />
                <input
                  type="datetime-local"
                  placeholder="Start Time"
                  className="border p-2 w-full mb-2 rounded"
                  value={task.start}
                  onChange={(e) => setTask({ ...task, start: e.target.value })}
                />
                <input
                  type="datetime-local"
                  placeholder="End Time"
                  className="border p-2 w-full mb-2 rounded"
                  value={task.end}
                  onChange={(e) => setTask({ ...task, end: e.target.value })}
                />
              </div>
              <div className="flex gap-4 p-6">
                <button
                  onClick={handleSaveTask}
                  className="bg-orange-500 text-white px-4 py-2 rounded"
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
          </div>
        )}
      </div>

      {showEventModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white shadow-lg w-96 p-6 rounded">
            <h2 className="text-lg font-bold text-center mb-2">
              Event Details
            </h2>
            <hr className="mb-4 w-full" />
            <input
              type="text"
              placeholder="Event Title"
              className="border p-2 w-full mb-2 rounded"
              value={selectedEvent.title}
              onChange={(e) =>
                setSelectedEvent({ ...selectedEvent, title: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Event Description"
              className="border p-2 w-full mb-2 rounded"
              value={selectedEvent.description}
              onChange={(e) =>
                setSelectedEvent({
                  ...selectedEvent,
                  description: e.target.value,
                })
              }
            />
            <div className="flex gap-4 justify-center">
              <button
                onClick={handleEditEvent}
                className="bg-orange-500 text-white px-4 py-2 rounded"
              >
                Save Changes
              </button>
              <button
                onClick={handleDeleteEvent}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Delete
              </button>
              <button
                onClick={() => setShowEventModal(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="p-5">
        <FullCalendar
          ref={calendarRef}
          plugins={[dayGridPlugin, timeGridPlugin]}
          headerToolbar={false}
          events={events}
          eventClick={handleEventClick}
        />
      </div>
    </>
  );
}

export default Schedule;

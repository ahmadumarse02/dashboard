"use client";
import { useState, useEffect, useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import CalendarHeader from "@/components/Calendar/CalendarHeader";
import AddTaskModal from "@/components/Calendar/AddTaskModal";
import EventModal from "@/components/Calendar/EventModal";

function Schedule() {
  const calendarRef = useRef(null);
  const [events, setEvents] = useState([]);
  const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState({
    title: "",
    description: "",
    start: "",
    end: "",
  });
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);
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
    if (calendarRef.current) {
      setCurrentMonth(calendarRef.current.calendar.view.title);
    }
  }, []);

  const handleViewChange = (view) => {
    if (view === "addTask") {
      setIsAddTaskModalOpen(true);
    } else {
      calendarRef.current.calendar.changeView(view);
    }
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
      setIsAddTaskModalOpen(false);
      setTask({ title: "", description: "", start: "", end: "" });
    } else {
      alert("Please fill in all fields.");
    }
  };

  // Cancel adding a new task
  const handleCancelTask = () => {
    setIsAddTaskModalOpen(false);
    setTask({ title: "", description: "", start: "", end: "" });
  };

  // Handle event click to show event details
  const handleEventClick = (clickInfo) => {
    const selected = {
      title: clickInfo.event.title,
      description: clickInfo.event.extendedProps.description,
      start: clickInfo.event.start,
      end: clickInfo.event.end ,
    };
    setSelectedEvent(selected);
    setIsEventModalOpen(true);
  };

  // Save changes to an event
  const handleSaveChanges = () => {
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
      setIsEventModalOpen(false);
    } else {
      alert("Please fill in all fields.");
    }
  };

  // Delete an event
  const handleDeleteEvent = () => {
    const filteredEvents = events.filter(
      (evt) => evt.start !== selectedEvent.start
    );
    setEvents(filteredEvents);
    setIsEventModalOpen(false);
  };

  // Close the event modal
  const handleCloseEventModal = () => {
    setIsEventModalOpen(false);
  };

  return (
    <>
      <CalendarHeader
        onViewChange={handleViewChange}
        currentMonth={currentMonth}
        onPrev={handlePrev}
        onNext={handleNext}
        onToday={handleToday}
      />

      {isAddTaskModalOpen && (
        <AddTaskModal
          task={task}
          setTask={setTask}
          onSave={handleSaveTask}
          onCancel={handleCancelTask}
        />
      )}

      {isEventModalOpen && (
        <EventModal
          selectedEvent={selectedEvent}
          setSelectedEvent={setSelectedEvent}
          onSaveChanges={handleSaveChanges}
          onDelete={handleDeleteEvent}
          onClose={handleCloseEventModal}
        />
      )}

      <div className="p-5">
        <FullCalendar
          ref={calendarRef}
          plugins={[dayGridPlugin, timeGridPlugin]}
          headerToolbar={false}
          initialView="dayGridMonth"
          events={events}
          eventClick={handleEventClick}
        />
      </div>
    </>
  );
}

export default Schedule;
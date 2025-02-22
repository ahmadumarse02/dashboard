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
    originalStart: "",
  });

  const [isEventModalOpen, setIsEventModalOpen] = useState(false);

  const [currentMonth, setCurrentMonth] = useState("");

  const [task, setTask] = useState({
    title: "",
    description: "",
    start: "",
    end: "",
  });

  // Calendar navigation handlers
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
    view === "addTask"
      ? setIsAddTaskModalOpen(true)
      : calendarRef.current.calendar.changeView(view);
  };

  const handleSaveTask = () => {
    if (task.title && task.start && task.end) {
      const newEvent = {
        ...task,
        start: new Date(task.start).toISOString(),
        end: new Date(task.end).toISOString(),
      };
      setEvents([...events, newEvent]);
      setIsAddTaskModalOpen(false);
      setTask({ title: "", description: "", start: "", end: "" });
    } else {
      alert("Please fill in required fields.");
    }
  };

  const handleCancelTask = () => {
    setIsAddTaskModalOpen(false);
    setTask({ title: "", description: "", start: "", end: "" });
  };

  // Event click handler with originalStart tracking
  const handleEventClick = (clickInfo) => {
    const originalStart = clickInfo.event.start.toISOString();
    setSelectedEvent({
      title: clickInfo.event.title,
      description: clickInfo.event.extendedProps.description,
      start: clickInfo.event.start.toISOString(),
      end: clickInfo.event.end?.toISOString() || "",
      originalStart,
    });
    setIsEventModalOpen(true);
  };

  // Updated save handler with date conversion
  const handleSaveChanges = () => {
    if (!selectedEvent.title || !selectedEvent.start || !selectedEvent.end) {
      alert("Please fill in required fields.");
      return;
    }

    const updatedEvent = {
      ...selectedEvent,
      start: new Date(selectedEvent.start).toISOString(),
      end: new Date(selectedEvent.end).toISOString(),
    };

    setEvents(
      events.map((evt) =>
        evt.start === selectedEvent.originalStart ? updatedEvent : evt
      )
    );
    setIsEventModalOpen(false);
  };

  // Fixed delete handler using originalStart
  const handleDeleteEvent = () => {
    setEvents(
      events.filter((evt) => evt.start !== selectedEvent.originalStart)
    );
    setIsEventModalOpen(false);
  };

  const handleCloseEventModal = () => setIsEventModalOpen(false);

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

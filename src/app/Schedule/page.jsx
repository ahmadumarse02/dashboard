"use client";
import { useState, useEffect, useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import CalendarHeader from "@/components/Calendar/CalendarHeader";
import AddTaskModal from "@/components/Calendar/AddTaskModal";
import EventModal from "@/components/Calendar/EventModal";
import useStore from "@/store/eventStore";


function Schedule() {
  const calendarRef = useRef<FullCalendar>(null);
  const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false);
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState("");
  
  const [currentEvent, setCurrentEvent] = useState<CalendarEvent>({
    id: undefined,
    title: "",
    description: "",
    start: "",
    end: "",
    isEditing: false,
  });
  
  

  // Reset function to clear the input fields
  const reset = () => {
    setCurrentEvent({
      id: undefined,
      title: "",
      description: "",
      start: "",
      end: "",
      isEditing: false,
    });
  };

  const { events, fetchEvents, addEvent, updateEvent, deleteEvent } = useStore();

  // Fetch events on component mount
  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  // Calendar navigation handlers
  const handlePrev = () => {
    if (calendarRef.current) {
      calendarRef.current.getApi().prev();
      setCurrentMonth(calendarRef.current.getApi().view.title);
    }
  };

  const handleNext = () => {
    if (calendarRef.current) {
      calendarRef.current.getApi().next();
      setCurrentMonth(calendarRef.current.getApi().view.title);
    }
  };

  const handleToday = () => {
    if (calendarRef.current) {
      calendarRef.current.getApi().today();
      setCurrentMonth(calendarRef.current.getApi().view.title);
    }
  };

  // Set the current month on initial render
  useEffect(() => {
    if (calendarRef.current) {
      setCurrentMonth(calendarRef.current.getApi().view.title);
    }
  }, []);

  // Handle view change (e.g., switching to "addTask" view)
  const handleViewChange = (view) => {
    if (view === "addTask") {
      setIsAddTaskModalOpen(true);
      reset();
    } else {
      if (calendarRef.current) {
        calendarRef.current.getApi().changeView(view);
        setCurrentMonth(calendarRef.current.getApi().view.title);
      }
    }
  };

  // Save a new task
  const handleSaveTask = () => {
    if (currentEvent.title && currentEvent.start && currentEvent.end) {
      const newEvent = {
        title: currentEvent.title,
        description: currentEvent.description || "",
        start: new Date(currentEvent.start).toISOString(),
        end: new Date(currentEvent.end).toISOString(),
        isEditing: false,
      };
      addEvent(newEvent);
      setIsAddTaskModalOpen(false);
      reset();
    } else {
      alert("Please fill in required fields (Title, Start Time, and End Time).");
    }
  };

  // Cancel adding a task
  const handleCancelTask = () => {
    setIsAddTaskModalOpen(false);
    reset();
  };

  // Handle event click (opens the event modal)
  const handleEventClick = (clickInfo) => {
    setCurrentEvent({
      id: clickInfo.event.id, // `id` is already a `string` or `undefined`
      title: clickInfo.event.title,
      description: clickInfo.event.extendedProps.description || "",
      start: clickInfo.event.start?.toISOString() || "",
      end: clickInfo.event.end?.toISOString() || "",
      isEditing: true,
    });
    setIsEventModalOpen(true);
  };

  // Save changes to an existing event
  const handleSaveChanges = () => {
    if (!currentEvent.title) {
      alert("Please fill in all required fields (Title, Start Time, and End Time).");
      return;
    }

    const updatedEvent = {
      title: currentEvent.title, // `title` is guaranteed to be a string
      description: currentEvent.description || "",
      start: new Date(currentEvent.start).toISOString(),
      end: new Date(currentEvent.end).toISOString(),
      isEditing: false,
    };

    if (currentEvent.id) {
      updateEvent(currentEvent.id, updatedEvent);
      setIsEventModalOpen(false);
      reset();
    }
  };

  // Handle date selection (opens the add task modal)
  const handleDateSelect = (selectInfo) => {
    const now = new Date();
    now.setMinutes(0, 0, 0);

    const startTime = new Date(selectInfo.start);
    startTime.setHours(now.getHours(), now.getMinutes());

    const endTime = new Date(startTime.getTime() + 60 * 60 * 1000);

    setCurrentEvent({
      id: undefined, // Set to `undefined` for new events
      title: "",
      description: "",
      start: startTime.toISOString().slice(0, 16),
      end: endTime.toISOString().slice(0, 16),
      isEditing: false,
    });

    setIsAddTaskModalOpen(true);
  };

  // Delete an event
  const handleDeleteEvent = () => {
    if (!currentEvent.id) {
      alert("Event ID is missing. Unable to delete.");
      return;
    }

    deleteEvent(currentEvent.id);
    setIsEventModalOpen(false);
    reset();
  };

  // Close the event modal
  const handleCloseEventModal = () => {
    setIsEventModalOpen(false);
  };

  return (
    <div className="flex flex-col w-full bg-white">
      <CalendarHeader
        onViewChange={handleViewChange}
        currentMonth={currentMonth}
        onPrev={handlePrev}
        onNext={handleNext}
        onToday={handleToday}
      />

      {isAddTaskModalOpen && (
        <AddTaskModal
          task={currentEvent}
          setTask={setCurrentEvent}
          onSave={handleSaveTask}
          onCancel={handleCancelTask}
        />
      )}

      {isEventModalOpen && (
        <EventModal
          selectedEvent={currentEvent}
          setSelectedEvent={setCurrentEvent}
          onSaveChanges={handleSaveChanges}
          onDelete={handleDeleteEvent}
          onClose={handleCloseEventModal}
        />
      )}

      <div className="p-5">
        <FullCalendar
          ref={calendarRef}
          plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          selectable={true}
          select={handleDateSelect}
          events={events}
          eventClick={handleEventClick}
          headerToolbar={false}
        />
      </div>
    </div>
  );
}

export default Schedule;
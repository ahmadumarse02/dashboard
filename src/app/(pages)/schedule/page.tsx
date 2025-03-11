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
import { DateSelectArg, EventClickArg } from "@fullcalendar/core";

interface Event {
  id?: string;
  title: string;
  description: string;
  start: string;
  end: string;
  isEditing?: boolean;
}

function Schedule() {
  const calendarRef = useRef<FullCalendar>(null);
  const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false);
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState("");
  const [currentEvent, setCurrentEvent] = useState<Event>({
    id: undefined,
    title: "",
    description: "",
    start: "",
    end: "",
    date: new Date().toISOString(),
  });

  const { events, fetchEvents, addEvent, updateEvent, deleteEvent } = useStore();

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

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

  useEffect(() => {
    if (calendarRef.current) {
      setCurrentMonth(calendarRef.current.getApi().view.title);
    }
  }, []);

  const handleViewChange = (view: string) => {
    if (view === "addTask") {
      setIsAddTaskModalOpen(true);
      setCurrentEvent({ id: undefined, title: "", description: "", start: "", end: "" });
    } else if (calendarRef.current) {
      calendarRef.current.getApi().changeView(view);
      setCurrentMonth(calendarRef.current.getApi().view.title);
    }
  };

  const handleSaveTask = async () => {
    if (!currentEvent.title || !currentEvent.start || !currentEvent.end) {
      alert("Please fill in required fields (Title, Start Time, and End Time).");
      return;
    }
  
    const newEvent = {
      title: currentEvent.title,
      description: currentEvent.description,
      start: currentEvent.start,
      end: currentEvent.end,
      date: new Date().toISOString(), // Add the `date` property
    };
  
    await addEvent(newEvent);
    setIsAddTaskModalOpen(false);
    setCurrentEvent({ id: undefined, title: "", description: "", start: "", end: "" });
  };

  const handleCancelTask = () => {
    setIsAddTaskModalOpen(false);
    setCurrentEvent({ id: undefined, title: "", description: "", start: "", end: "" });
  };

  const handleEventClick = (clickInfo: EventClickArg) => {
    setCurrentEvent({
      id: clickInfo.event.id,
      title: clickInfo.event.title,
      description: clickInfo.event.extendedProps.description || "",
      start: clickInfo.event.start?.toISOString() || "",
      end: clickInfo.event.end?.toISOString() || "",
    });
    setIsEventModalOpen(true);
  };

  const handleSaveChanges = async () => {
    if (!currentEvent.id || !currentEvent.title || !currentEvent.start || !currentEvent.end) {
      alert("Please fill in all required fields (Title, Start Time, and End Time).");
      return;
    }
  
    const updatedEvent = {
      id: currentEvent.id,
      title: currentEvent.title,
      description: currentEvent.description,
      start: currentEvent.start,
      end: currentEvent.end,
      date: new Date().toISOString(), // Add the `date` property if required
    };
  
    await updateEvent(updatedEvent); // Pass the entire event object
    setIsEventModalOpen(false);
  };

  const handleDeleteEvent = async () => {
    if (!currentEvent.id) {
      alert("Event ID is missing. Unable to delete.");
      return;
    }

    await deleteEvent(currentEvent.id);
    setIsEventModalOpen(false);
  };

  const handleDateSelect = (selectInfo: DateSelectArg) => {
    const now = new Date();
    now.setMinutes(0, 0, 0);

    const startTime = new Date(selectInfo.start);
    startTime.setHours(now.getHours(), now.getMinutes());

    const endTime = new Date(startTime.getTime() + 60 * 60 * 1000);

    setCurrentEvent({
      id: undefined,
      title: "",
      description: "",
      start: startTime.toISOString().slice(0, 16),
      end: endTime.toISOString().slice(0, 16),
    });

    setIsAddTaskModalOpen(true);
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
          onClose={() => setIsEventModalOpen(false)}
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
"use client";
import { useState, useEffect, useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import CalendarHeader from "@/components/Calendar/CalendarHeader";
import AddTaskModal from "@/components/Calendar/AddTaskModal";
import EventModal from "@/components/Calendar/EventModal";
import interactionPlugin from "@fullcalendar/interaction";

function Schedule() {
  const calendarRef = useRef(null);
  const [events, setEvents] = useState([]);
  const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false);
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState("");

  const [currentEvent, setCurrentEvent] = useState({
    title: "",
    description: "",
    start: "",
    end: "",
    originalStart: "",
    isEditing: false,
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
      setCurrentEvent({
        title: "",
        description: "",
        start: "",
        end: "",
        isEditing: false,
      });
    } else {
      calendarRef.current.calendar.changeView(view);
      setCurrentMonth(calendarRef.current.calendar.view.title);
    }
  };

  const handleSaveTask = () => {
    if (currentEvent.title && currentEvent.start && currentEvent.end) {
      const newEvent = {
        ...currentEvent,
        start: new Date(currentEvent.start).toISOString(),
        end: new Date(currentEvent.end).toISOString(),
      };
      setEvents([...events, newEvent]);
      setIsAddTaskModalOpen(false);
      setCurrentEvent({
        title: "",
        description: "",
        start: "",
        end: "",
        isEditing: false,
      });
    } else {
      alert("Please fill in required fields.");
    }
  };

  const handleCancelTask = () => {
    setIsAddTaskModalOpen(false);
    setCurrentEvent({
      title: "",
      description: "",
      start: "",
      end: "",
      isEditing: false,
    });
  };

  const handleEventClick = (clickInfo) => {
    const originalStart = clickInfo.event.start.toISOString();
    setCurrentEvent({
      title: clickInfo.event.title,
      description: clickInfo.event.extendedProps.description || "",
      start: clickInfo.event.start.toISOString(),
      end: clickInfo.event.end?.toISOString() || "",
      originalStart,
      isEditing: true,
    });
    setIsEventModalOpen(true);
  };

  const handleSaveChanges = () => {
    if (!currentEvent.title || !currentEvent.start || !currentEvent.end) {
      alert("Please fill in required fields.");
      return;
    }

    const updatedEvent = {
      ...currentEvent,
      start: new Date(currentEvent.start).toISOString(),
      end: new Date(currentEvent.end).toISOString(),
    };

    setEvents(
      events.map((evt) =>
        evt.start === currentEvent.originalStart ? updatedEvent : evt,
      ),
    );
    setIsEventModalOpen(false);
    setCurrentEvent({
      title: "",
      description: "",
      start: "",
      end: "",
      isEditing: false,
    });
  };

  const handleDeleteEvent = () => {
    setEvents(events.filter((evt) => evt.start !== currentEvent.originalStart));
    setIsEventModalOpen(false);
  };

  const handleCloseEventModal = () => setIsEventModalOpen(false);

  const handleDateSelect = (selectInfo) => {
    const startTime = new Date(selectInfo.start);
    startTime.setMinutes(
      startTime.getMinutes() - startTime.getTimezoneOffset(),
    );
    const endTime = new Date(startTime.getTime() + 60 * 60 * 1000);
    setCurrentEvent({
      title: "",
      description: "",
      start: startTime.toISOString().slice(0, 16),
      end: endTime.toISOString().slice(0, 16),
      isEditing: false,
    });
    setIsAddTaskModalOpen(true);
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
          plugins={[
            dayGridPlugin,
            timeGridPlugin,
            listPlugin,
            interactionPlugin,
          ]}
          initialView="dayGridMonth"
          selectable={true}
          select={handleDateSelect}
          events={events}
          eventClick={handleEventClick}
          headerToolbar={false}
        />
      </div>
    </>
  );
}

export default Schedule;

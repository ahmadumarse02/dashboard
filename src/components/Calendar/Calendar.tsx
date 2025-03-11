/* eslint-disable @typescript-eslint/no-explicit-any */
// src/components/Calendar.tsx
"use client";
import { useEffect, useRef, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { useEventStore } from '@/store/eventStore';
import AddTaskModal from './AddTaskModal';
import EventModal from './EventModal';

export default function Calendar() {
  const calendarRef = useRef<FullCalendar>(null);
  const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false);
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);
  const [currentEvent, setCurrentEvent] = useState({
    id: undefined,
    title: '',
    description: '',
    start: '',
    end: '',
  });

  const { events, fetchEvents, addEvent, updateEvent, deleteEvent } = useEventStore();

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  const handleDateSelect = (selectInfo: any) => {
    setCurrentEvent({
      id: undefined,
      title: '',
      description: '',
      start: selectInfo.startStr,
      end: selectInfo.endStr,
    });
    setIsAddTaskModalOpen(true);
  };

  const handleEventClick = (clickInfo: any) => {
    setCurrentEvent({
      id: clickInfo.event.id,
      title: clickInfo.event.title,
      description: clickInfo.event.extendedProps.description,
      start: clickInfo.event.startStr,
      end: clickInfo.event.endStr,
    });
    setIsEventModalOpen(true);
  };

  return (
    <div>
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        selectable={true}
        select={handleDateSelect}
        events={events}
        eventClick={handleEventClick}
      />

      {isAddTaskModalOpen && (
        <AddTaskModal
          task={currentEvent}
          setTask={setCurrentEvent}
          onSave={() => {
            addEvent(currentEvent);
            setIsAddTaskModalOpen(false);
          }}
          onCancel={() => setIsAddTaskModalOpen(false)}
        />
      )}

      {isEventModalOpen && (
        <EventModal
          selectedEvent={currentEvent}
          setSelectedEvent={setCurrentEvent}
          onSaveChanges={() => {
            updateEvent(currentEvent);
            setIsEventModalOpen(false);
          }}
          onDelete={() => {
            deleteEvent(currentEvent.id!);
            setIsEventModalOpen(false);
          }}
          onClose={() => setIsEventModalOpen(false)}
        />
      )}
    </div>
  );
}
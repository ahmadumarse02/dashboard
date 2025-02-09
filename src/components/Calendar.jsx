"use client";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid"


function Calendar() {
  return (
    <>
      <div>
      <h1>Calendar</h1>
      <FullCalendar
        plugins={[dayGridPlugin,timeGridPlugin , interactionPlugin]}
        initialView={"dayGridMonth"}
        headerToolbar = {
          {
            start: 'today prev,next', 
            center: 'title',
            end: 'dayGridMonth ,timeGridWeek ,timeGridDay' 
          }
        }
      />
    </div>
    </>
  )
}

export default Calendar
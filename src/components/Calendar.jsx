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
            start: 'today prev,next', // will normally be on the left. if RTL, will be on the right
            center: 'title',
            end: 'dayGridMonth ,timeGridWeek ,timeGridDay' // will normally be on the right. if RTL, will be on the left
          }
        }
      />
    </div>
    </>
  )
}

export default Calendar
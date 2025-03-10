import React from 'react'
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import './style/calendar.css';
// import "./App.css";

function Calendar() {
  return (
    <>
    <div className="max-w-[288px] ml-16 bg-white border border-[#E4E4E4] p-4 rounded-2xl">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        height="auto"
        contentHeight="auto"
        headerToolbar={{
          left: "prev",
          center: "title",
          right: "next",
        }}
        editable={true}
      /></div>
    </>
  )
}

export default Calendar
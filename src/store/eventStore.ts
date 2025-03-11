// src/store/eventStore.ts
import { create } from 'zustand';

interface Event {
  id?: number;
  title: string;
  description: string;
  start: string;
  end: string;
}

interface EventStore {
  events: Event[];
  fetchEvents: () => Promise<void>;
  addEvent: (event: Omit<Event, 'id'>) => Promise<void>;
  updateEvent: (event: Event) => Promise<void>;
  deleteEvent: (id: number) => Promise<void>;
}

export const useEventStore = create<EventStore>((set) => ({
  events: [],
  fetchEvents: async () => {
    try {
      const response = await fetch('/api/events');
      const data = await response.json();
      set({ events: data });
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  },
  addEvent: async (event) => {
    try {
      const response = await fetch('/api/events', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(event),
      });
      const newEvent = await response.json();
      set((state) => ({ events: [...state.events, newEvent] }));
    } catch (error) {
      console.error('Error adding event:', error);
    }
  },
  updateEvent: async (event) => {
    try {
      await fetch('/api/events', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(event),
      });
      set((state) => ({
        events: state.events.map((e) => (e.id === event.id ? event : e)),
      }));
    } catch (error) {
      console.error('Error updating event:', error);
    }
  },
  deleteEvent: async (id) => {
    try {
      await fetch('/api/events', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });
      set((state) => ({ events: state.events.filter((e) => e.id !== id) }));
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  },
}));
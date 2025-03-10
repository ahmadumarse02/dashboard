// components/Calendar/EventModal.js
export default function EventModal({
  selectedEvent,
  setSelectedEvent,
  onSaveChanges,
  onDelete,
  onClose,
}) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white shadow-lg w-96 p-6 rounded">
        <h2 className="text-lg font-bold text-center mb-2">Event Details</h2>
        <hr className="mb-4 w-full" />
        <input
          type="text"
          placeholder="Event Title"
          className="border p-2 w-full mb-2 rounded"
          value={selectedEvent.title}
          onChange={(e) => setSelectedEvent({ ...selectedEvent, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Event Description"
          className="border p-2 w-full mb-2 rounded"
          value={selectedEvent.description}
          onChange={(e) =>
            setSelectedEvent({
              ...selectedEvent,
              description: e.target.value,
            })
          }
        />
        <div className="flex gap-4 justify-center">
          <button onClick={onSaveChanges} className="bg-orange-500 text-white px-4 py-2 rounded">
            Save Changes
          </button>
          <button onClick={onDelete} className="bg-red-500 text-white px-4 py-2 rounded">
            Delete
          </button>
          <button onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

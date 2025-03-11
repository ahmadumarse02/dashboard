export default function AddTaskModal({ task, setTask, onSave, onCancel }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50">
      <div className="bg-white shadow-lg w-96 transform transition-transform duration-1000">
        <h2 className="text-lg font-bold text-center mb-2">Add New Event</h2>
        <hr className="mb-4 w-full" />
        <div className="p-6">
          <input
            type="text"
            placeholder="Task Title"
            className="border p-2 w-full mb-2 rounded"
            value={task.title}
            onChange={(e) => setTask({ ...task, title: e.target.value })}
          />
          <input
            type="text"
            placeholder="Task Description"
            className="border p-2 w-full mb-2 rounded"
            value={task.description}
            onChange={(e) => setTask({ ...task, description: e.target.value })}
          />
          <input
            placeholder="Start Time"
            type="datetime-local"
            className="border p-2 w-full mb-2 rounded"
            value={task.start}
            onChange={(e) => setTask({ ...task, start: e.target.value })}
          />
          <input
            placeholder="End Time"
            type="datetime-local"
            className="border p-2 w-full mb-2 rounded"
            value={task.end}
            onChange={(e) => setTask({ ...task, end: e.target.value })}
          />
        </div>
        <div className="flex gap-4 p-6">
          <button
            onClick={onSave}
            className="bg-orange-500 text-white px-4 py-2 rounded"
          >
            Save Task
          </button>
          <button
            onClick={onCancel}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

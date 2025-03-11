import { connectDB } from "@/lib/db";
import { NextResponse } from "next/server";
import { ResultSetHeader, RowDataPacket } from "mysql2/promise";

// Utility function to convert ISO date string to MySQL datetime format
const toMySQLDateTime = (isoString: string): string => {
  const date = new Date(isoString);
  return date.toISOString().slice(0, 19).replace("T", " ");
};

// Define the shape of an event
interface Event {
  id: number;
  title: string;
  description: string;
  start: string;
  end: string;
}

// GET handler to fetch all events
export async function GET() {
  let connection;
  try {
    connection = await connectDB();
    const [rows] = await connection.execute<RowDataPacket[]>("SELECT * FROM events");
    return NextResponse.json(rows);
  } catch (error) {
    console.error("Error fetching events:", error);
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  } finally {
    if (connection) connection.end();
  }
}

// POST handler to add a new event
export async function POST(request: Request) {
  let connection;
  try {
    const { title, description, start, end }: Partial<Event> = await request.json();

    if (!title || !start || !end) {
      return NextResponse.json(
        { error: "Title, start, and end are required fields" },
        { status: 400 }
      );
    }

    connection = await connectDB();

    const mysqlStart = toMySQLDateTime(start);
    const mysqlEnd = toMySQLDateTime(end);

    const [result] = await connection.execute<ResultSetHeader>(
      "INSERT INTO events (title, description, start, end) VALUES (?, ?, ?, ?)",
      [title, description, mysqlStart, mysqlEnd]
    );

    const [newEvent] = await connection.execute<RowDataPacket[]>(
      "SELECT * FROM events WHERE id = ?",
      [result.insertId]
    );

    return NextResponse.json(newEvent[0]);
  } catch (error) {
    console.error("Error adding event:", error);
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  } finally {
    if (connection) connection.end();
  }
}

// PUT handler to update an event
export async function PUT(request: Request) {
  let connection;
  try {
    const { id, title, description, start, end }: Partial<Event> = await request.json();

    if (!id || !title || !start || !end) {
      return NextResponse.json(
        { error: "ID, title, start, and end are required fields" },
        { status: 400 }
      );
    }

    connection = await connectDB();

    const mysqlStart = toMySQLDateTime(start);
    const mysqlEnd = toMySQLDateTime(end);

    await connection.execute(
      "UPDATE events SET title = ?, description = ?, start = ?, end = ? WHERE id = ?",
      [title, description, mysqlStart, mysqlEnd, id]
    );

    const [updatedEvent] = await connection.execute<RowDataPacket[]>(
      "SELECT * FROM events WHERE id = ?",
      [id]
    );

    return NextResponse.json(updatedEvent[0]);
  } catch (error) {
    console.error("Error updating event:", error);
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  } finally {
    if (connection) connection.end();
  }
}

// DELETE handler to delete an event
export async function DELETE(request: Request) {
  let connection;
  try {
    const { id }: Partial<Event> = await request.json();

    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    connection = await connectDB();

    const [eventToDelete] = await connection.execute<RowDataPacket[]>(
      "SELECT * FROM events WHERE id = ?",
      [id]
    );

    await connection.execute("DELETE FROM events WHERE id = ?", [id]);

    return NextResponse.json({ message: "Event deleted", deletedEvent: eventToDelete[0] });
  } catch (error) {
    console.error("Error deleting event:", error);
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  } finally {
    if (connection) connection.end();
  }
}
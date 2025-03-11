import { connectDB } from "../../../lib/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import { ResultSetHeader } from "mysql2/promise";

export async function POST(req: Request) {
  let connection;
  try {
    const { username, email, password }: { username: string; email: string; password: string } =
      await req.json();

    // Validate required fields
    if (!username || !email || !password) {
      return NextResponse.json(
        { message: "Username, email, and password are required" },
        { status: 400 }
      );
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Connect to the database
    connection = await connectDB();

    // Insert the new user into the database
    const [result] = await connection.execute<ResultSetHeader>(
      "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
      [username, email, hashedPassword]
    );

    // Check if the insertion was successful
    if (result.affectedRows === 1) {
      return NextResponse.json({ message: "Signup successful" }, { status: 200 });
    } else {
      return NextResponse.json({ message: "Failed to create user" }, { status: 500 });
    }
  } catch (error) {
    console.error("Error in signup:", error);
    return NextResponse.json(
      { message: "Error in signup", error: (error as Error).message },
      { status: 500 }
    );
  } finally {
    if (connection) await connection.end();
  }
}

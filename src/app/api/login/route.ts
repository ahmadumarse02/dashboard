import { connectDB } from "../../../lib/db";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
import { RowDataPacket } from "mysql2/promise";

// Define environment variables for JWT
const JWT_SECRET = process.env.JWT_SECRET || "123qweasdzxc";
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "1h";

// Define the shape of a user
interface User extends RowDataPacket {
  id: number;
  email: string;
  password: string;
}

// POST handler for user login
export async function POST(req: Request) {
  let connection;
  try {
    const { email, password }: { email: string; password: string } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and password are required" },
        { status: 400 }
      );
    }

    connection = await connectDB();

    // Fetch user from the database
    const [rows] = await connection.execute<User[]>(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );

    if (rows.length === 0) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 }
      );
    }

    const user = rows[0];

    // Validate password
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 }
      );
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user.id }, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN,
    });

    // Return success response with token
    return NextResponse.json(
      { message: "Login successful", user: { id: user.id, email: user.email } },
      {
        status: 200,
        headers: {
          "Set-Cookie": `token=${token}; HttpOnly; Secure; Path=/; Max-Age=3600`,
        },
      }
    );
  } catch (error) {
    console.error("Error in login:", error);
    return NextResponse.json(
      { message: "Error in login", error: (error as Error).message },
      { status: 500 }
    );
  } finally {
    if (connection) await connection.end();
  }
}
import { connectDB } from "@/lib/db";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req) {
  let connection;
  try {
    connection = await connectDB();
    const { email, password } = await req.json();

    const [row] = await connection.execute(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );

    if (row.length === 0) {
      return NextResponse.json({ message: "Invalid email or password" }, { status: 401 });
    }

    const user = row[0];

    const inValidpassword = await bcrypt.compare(password, user.password);
    if (!inValidpassword) {
      return NextResponse.json( { message: "Invalid email or password" }, { status: 401 });
    }

    return NextResponse.json({ message: "Login successful" }, { status: 200 });
  } catch (error) {
    console.error("Error in login:", error);
    return NextResponse.json({ message: "Error in login" }, { status: 500 });
  } finally {
    if (connection) {
      await connection.end();
    }
  }
}

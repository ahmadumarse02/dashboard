import { connectDB } from "@/lib/db";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req) {
  let connection;
  try {
    const connection = await connectDB();
    const { username, email, password } = await req.json();
    const hashedpassword = await bcrypt.hash(password, 10);
    const [result] = await connection.execute(
      "INSERT INTO users (username , email , password) VALUES (? , ? , ?)",
      [username, email, hashedpassword]
    );
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

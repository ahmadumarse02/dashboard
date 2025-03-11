import { connectDB } from "@/lib/db";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = "ahmadneifn";
const JWT_EXPIRES_IN = "1h";

export async function POST(req) {
  let connection;
  try {
    connection = await connectDB();
    const { email, password } = await req.json();

    const [row] = await connection.execute(
      "SELECT * FROM users WHERE email = ?",
      [email],
    );

    if (row.length === 0) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 },
      );
    }

    const user = row[0];

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 },
      );
    }

    const token = jwt.sign({ userId: user.id }, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN,
    });

    // Create response and set cookie
    const response = NextResponse.json(
      { message: "Login successful" },
      { status: 200 },
    );

    response.cookies.set("token", token, {
      httpOnly: true,
      secure: true,
      maxAge: 3600,
      path: "/",
    });

    return response;
  } catch (error) {
    console.error("Error in login:", error);
    return NextResponse.json({ message: "Error in login" }, { status: 500 });
  } finally {
    if (connection) {
      await connection.end();
    }
  }
}

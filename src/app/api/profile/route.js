import jwt from "jsonwebtoken";
import { connectDB } from "@/lib/db";

const JWT_SECRET = "ahmadneifn";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Not authenticated" });
  }

  let connection;
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    connection = await connectDB();

    const [rows] = await connection.execute(
      "SELECT id, username, email FROM users WHERE id = ?",
      [decoded.userId]
    );

    if (rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ user: rows[0] });
  } catch (error) {
    res.status(401).json({ message: "Invalid token", error: error.message });
  } finally {
    if (connection) await connection.end();
  }
}

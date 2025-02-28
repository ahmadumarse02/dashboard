import mysql from "mysql2/promise";

export async function connectDB() {
  try {
    const connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "123qweasd",
      database: "nextjs_auth",
      connectTimeout: 20000,
    });

    console.log("Database connected successfully");
    return connection;
  } catch (error) {
    console.error("Database connection failed:", error.message);
    throw error;
  }
}
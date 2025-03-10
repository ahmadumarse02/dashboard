import mysql from "mysql2/promise";

// Define the return type of the `connectDB` function
export async function connectDB(): Promise<mysql.Connection> {
  try {
    const connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "123qweasd111",
      database: "dashboard",
      connectTimeout: 20000,
    });
    console.log("Database connected successfully");
    return connection;
  } catch (error) {
    // TypeScript requires us to check if `error` is an instance of `Error`
    if (error instanceof Error) {
      console.error("Database connection failed:", error.message);
    } else {
      console.error("Database connection failed:", error);
    }
    throw error;
  }
}
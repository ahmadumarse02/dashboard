"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Profile() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get("/api/profile");
        setUser(response.data.user);
      } catch (error) {
        router.push("/loginin");
      }
    };

    fetchProfile();
  }, [router]);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Profile</h1>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <button
        onClick={() =>
          axios.post("/api/logout").then(() => router.push("/login"))
        }
      >
        Logout
      </button>
    </div>
  );
}

"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function TestPage() {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await supabase.from("users").select("*");
      setUsers(data || []);
    };
    fetchData();
  }, []);

  return (
    <div className="p-4">
      <h1 className="font-bold text-xl mb-2">Test Supabase Connection</h1>
      {users.length > 0 ? (
        <ul>
          {users.map((u) => (
            <li key={u.id}>{u.email}</li>
          ))}
        </ul>
      ) : (
        <p>No users yet.</p>
      )}
    </div>
  );
}

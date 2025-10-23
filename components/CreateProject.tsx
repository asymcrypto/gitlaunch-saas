"use client";
import { useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function CreateProject() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const user = supabase.auth.user();
    if (!user) return;

    const { data, error } = await supabase.from("projects").insert([
      {
        name,
        description,
        owner_id: user.id,
      },
    ]);

    if (error) alert("Error: " + error.message);
    else {
      setName("");
      setDescription("");
      alert("Project created successfully!");
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <input
        type="text"
        placeholder="Project Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="border p-2 w-full rounded"
      />
      <textarea
        placeholder="Project Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-2 w-full rounded"
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        {loading ? "Creating..." : "Create Project"}
      </button>
    </form>
  );
}

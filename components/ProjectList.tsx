"use client";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

type Project = {
  id: string;
  name: string;
  description: string | null;
  created_at: string;
};

export default function ProjectList() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      const user = supabase.auth.user();
      if (!user) return;

      const { data, error } = await supabase
        .from<Project>("projects")
        .select("*")
        .eq("owner_id", user.id)
        .order("created_at", { ascending: false });

      if (error) console.error(error);
      else setProjects(data || []);
      setLoading(false);
    };

    fetchProjects();
  }, []);

  if (loading) return <p>Loading projects...</p>;
  if (projects.length === 0) return <p>No projects found.</p>;

  return (
    <div>
      {projects.map((p) => (
        <div key={p.id} className="border p-3 mb-3 rounded shadow">
          <h3 className="font-bold text-lg">{p.name}</h3>
          <p>{p.description}</p>
          <small>{new Date(p.created_at).toLocaleString()}</small>
        </div>
      ))}
    </div>
  );
}

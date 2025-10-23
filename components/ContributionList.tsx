"use client";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

type Contribution = {
  id: string;
  contributor_id: string;
  description: string | null;
  equity: number | null;
  created_at: string;
};

type Props = { projectId: string };

export default function ContributionList({ projectId }: Props) {
  const [contributions, setContributions] = useState<Contribution[]>([]);

  useEffect(() => {
    const fetchContributions = async () => {
      const { data, error } = await supabase
        .from<Contribution>("contributions")
        .select("*")
        .eq("project_id", projectId)
        .order("created_at", { ascending: false });

      if (error) console.error(error);
      else setContributions(data || []);
    };

    fetchContributions();
  }, [projectId]);

  if (!contributions.length) return <p>No contributions yet.</p>;

  return (
    <div>
      {contributions.map((c) => (
        <div key={c.id} className="border p-2 mb-2 rounded">
          <p>{c.description}</p>
          <small>Equity: {c.equity ?? 0}%</small>
        </div>
      ))}
    </div>
  );
}

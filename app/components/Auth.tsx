import React, { useState } from "react";
import { supabase } from "../lib/supabaseClient";
import Button from "./Button";
import { useRouter } from "next/navigation";

const Auth: React.FC = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleSignIn = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithOtp({ email });
    if (error) {
      setMessage(`Error: ${error.message}`);
    } else {
      setMessage("Check your email for the login link!");
      router.push("/dashboard"); // Redirect to dashboard after login
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center space-y-4 mt-6">
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border border-gray-300 rounded px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-600"
      />
      <Button onClick={handleSignIn} className="w-64">
        {loading ? "Sending..." : "Sign In / Sign Up"}
      </Button>
      {message && <p className="text-sm text-gray-700 text-center">{message}</p>}
    </div>
  );
};

export default Auth;

"use client"; // Needed for useState

import React, { useState } from "react";
import { supabase } from "../lib/supabaseClient";
import Button from "./Button";
import { useRouter } from "next/navigation";

export default function Auth() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handleSignIn = async () => {
    const { error } = await supabase.auth.signInWithOtp({ email });
    if (error) alert(error.message);
    else alert("Check your email for login link!");
  };

  return (
    <div>
      <input
        type="email"
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button onClick={handleSignIn}>Sign In</Button>
    </div>
  );
}

import React, { useState } from "react";
import { supabase } from "../lib/supabaseClient";
import Button from "./Button";

const Auth: React.FC = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSignIn = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithOtp({ email });
    if (error) setMessage(`Error: ${error.message}`);
    else setMessage("Check your email for the login link!");
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
      {message && <p className="text-sm text-gray-700">{message}</p>}
    </div>
  );
};

export default Auth;

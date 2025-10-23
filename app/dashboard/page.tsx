import React, { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Button from "../../components/Button";

const Dashboard: React.FC = () => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const session = supabase.auth.getSession().then(({ data }) => {
      setUser(data.session?.user || null);
    });

    const { subscription } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });

    return () => {
      subscription?.unsubscribe();
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header title="📊 Your Dashboard" subtitle="Welcome to your SaaS workspace!" />

      <main className="flex-1 flex flex-col items-center justify-center px-4 space-y-6">
        {user ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold">Hello, {user.email}!</h2>
            <p className="mt-2 text-gray-700">This is your dashboard where you can manage your SaaS project.</p>
            <div className="mt-4">
              <Button
                onClick={async () => {
                  await supabase.auth.signOut();
                  alert("Logged out!");
                }}
              >
                Logout
              </Button>
            </div>
          </div>
        ) : (
          <p className="text-gray-700 text-center">Please log in to access your dashboard.</p>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;

<main className="flex-1 flex flex-col items-center justify-center px-4 space-y-6">
  <h2 className="text-4xl font-bold text-blue-600 text-center">
    Build SaaS in Public. Launch Fast. Grow with Community.
  </h2>
  <p className="mt-4 text-lg text-gray-700 text-center max-w-2xl">
    GitLaunch SaaS helps you start, contribute, and scale open-source SaaS projects directly from GitHub. Everything is ready for AI-assisted development and contributor workflows.
  </p>

  <div className="mt-6">
    <Button onClick={() => alert("🚀 Let's Launch!")}>
      Get Started
    </Button>
  </div>

  {/* Supabase Authentication */}
  <Auth />
</main>

// import React from "react";

// export default function Home() {
//   return <h1>Home Page</h1>;
// }

import { useState } from "react";
import { Link } from "react-router-dom";

import "../App.css";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div class="flex h-screen w-full overflow-x-hidden bg-gray-100">
        <aside class=" bg-white shadow-md">
          <div class="h-16 bg-amber-400 flex items-center justify-center border-b">
            <span class="text-xl font-semibold">Gold Tree IT</span>
          </div>

          <nav class="p-4 space-y-2">
            <Link
              to="/about"
              class="block px-4 py-2 text-black rounded hover:bg-gray-200 hover:text-black"
            >
              Dashboard
            </Link>
            <Link
              to="/profile"
              class="block px-4 py-2 rounded hover:bg-gray-200"
            >
              Profile
            </Link>
            <Link to="/about" class="block px-4 py-2 rounded hover:bg-gray-200">
              Settings
            </Link>
            <Link
              to="/profile"
              class="block px-4 py-2 rounded hover:bg-gray-200"
            >
              Logout
            </Link>
          </nav>
        </aside>

        <main class="flex-1 p-6">
          <h1 class="text-2xl font-bold">Main Content</h1>
          <p class="mt-4">This is the main content area.</p>
        </main>
      </div>
    </>
  );
}

export default Home;

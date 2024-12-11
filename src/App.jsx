import { useState } from "react";
import { Header } from "./components/Headers/Header";
import { Navbar } from "./components/Dashboard/Navbar";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="container mx-auto p-4">
          
            <Navbar />
          
        </main>
      </div>
    </>
  );
}

export default App;
